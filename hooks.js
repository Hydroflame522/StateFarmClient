const storageKey = "StateFarm_" + (unsafeWindow.document.location.host.replaceAll(".", "")) + "_";

const log = function (...args) {
    let condition;
    try {
        condition = extract("consoleLogs");
    } catch (error) {
        condition = GM_getValue(storageKey + "DisableLogs");
    };
    if (!condition) {
        if (__DEBUG__.doTraceLogging) console.trace(...args);
        else console.log(...args);
    };
};

let originalReplace = String.prototype.replace;
let originalReplaceAll = String.prototype.replaceAll;

String.prototype.originalReplace = function () {
    return originalReplace.apply(this, arguments);
};
String.prototype.originalReplaceAll = function () {
    return originalReplaceAll.apply(this, arguments);
};

const createStatefarmElement = function (tagName, options) {
    let elem = document.createElement(tagName, options);
    elem.classList.add('tp-statefarm');
    return elem
}

export {
    storageKey, log, originalReplace, originalReplaceAll
}

WebAssembly.instantiateStreaming = async (resp, importObj) => {
    const response = await resp;
    const buffer = await response.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    const replacements = [
        {
            // pattern: loop + void type + br + depth 0 + end
            pattern: [0x03, 0x40, 0x0C, 0x00, 0x0B],
            replacement: [0x01, 0x01, 0x01, 0x01, 0x01] // five nops
        },
        {
            pattern: [0x41, 0x20, 0x41, 0x01, 0x10, 0xA7], // 0x01 = i32.const 1
            replacement: [0x41, 0x20, 0x41, 0x4B, 0x10, 0xA7]
        }
    ];

    const start = performance.now();

    const formatBytes = (bytes, base = 10) => ([...bytes]).map(b => b.toString(base).padStart(base === 16 ? 2 : 3, '0')).join(' ');

    let index = 0;
    // loop through all replacements
    /* for (const { pattern, replacement } of replacements) {
        // search and patch
        for (let i = 0; i < bytes.length - pattern.length; i++) {
            if (pattern.every((b, j) => bytes[i + j] === b)) {
                let before = bytes.slice(i, i + pattern.length);
                let before10 = formatBytes(before, 10);
                let before16 = formatBytes(before, 16);

                for (let j = 0; j < replacement.length; j++) {
                    bytes[i + j] = replacement[j];
                };

                let after = bytes.slice(i, i + replacement.length);
                let after10 = formatBytes(after, 10);
                let after16 = formatBytes(after, 16);

                log(
                    `[sfc] Found loop at offset ${i} (hex: 0x${i.toString(16)}), patching ${index}...\n` +
                    `Before: ${before10}\n` +
                    `After:  ${after10}\n` +
                    `Before (hex): ${before16}\n` +
                    `After  (hex):  ${after16}\n`
                );
            };
        };
        index++;
    }; */

    const end = performance.now();

    log(`[sfc] Loop patching for ${replacements.length} patches took ${end - start}ms`);

    const wbg = importObj.wbg;

    let blockedCalls = ["sethref", "setInterval"];
    let exceptions = ["SELF", "WINDOW", "GLOBAL_THIS", "GLOBAL", "is_undefined", "init_", "document", "createElement", "settextContent", "body", "instanceof_Window", "instanceof_HtmlCanvasElement", "nodeType", "_item_", "_textContent_", "_now_", "_closure_", "_string_", "_number_", "movementX", "movementY", "_new_", "addEventListener", "instanceof_HtmlElement", "_get_", "_set_", "_cast_", "_wbindgenis", "_wbindgennumberget"];

    // https://stackoverflow.com/questions/2712136/how-do-i-make-this-loop-all-children-recursively

    function wipeNode(node, classNameToRemove) {
        const clonedNode = node.cloneNode(true);

        function removeElements(currentNode) {
            if (!currentNode || !currentNode.children) {
                return;
            };
            const children = Array.from(currentNode.children);

            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const classList = Array.from(child.classList);
                if (classList.includes('tp-statefarm')
                    || classList.includes('tp-dvfw')
                    || classList.includes("MiniMap")
                    || classList.includes("playerDot")
                    || classList.some(c => c.startsWith("tp-"))) {
                    currentNode.removeChild(child);
                } else {
                    removeElements(child);
                };
            };
        };
        removeElements(clonedNode);

        return clonedNode;
    };


    function checkForStateFarmChildren(node) {
        if (node.querySelectorAll) {
            return node.querySelectorAll("[class^=\"tp-\"], .MiniMap, .playerDot").length > 0;
        };
        return true;
    };

    class FakeNodeList extends Array {
        item(index) {
            return this[index];
        };
    };

    let rewrites = { // nice try but you only publicly get to see the prod rewrites
        'querySelector': function (item, wasm_str_offset, len) {
            if (len == 1) { // '*'
                log("Hooked querySelector", item, wasm_str_offset, len);
                let items = document.querySelectorAll("*:not(.tp-statefarm):not(.tp-statefarm *):not(.tp-statefarm > *):not(.tp-statefarm > * *)");
                log("Hooked length:", items.length);
                return items;
            };
        },
        'childNodes': function (item) {
            // log("Hooked childNodes, arg:", item);
            let nodes = item.childNodes;
            let spoofedNodes = new FakeNodeList();
            for (let child of nodes) {
                if (checkForStateFarmChildren(child)) { // holy speedup
                    let fakeNode = wipeNode(child.cloneNode(true));
                    spoofedNodes.push(fakeNode);
                } else {
                    spoofedNodes.push(child.cloneNode(true));
                };
            };
            return spoofedNodes;
        },
        '_length_': function (item) {
            if (item instanceof FakeNodeList) {
                return item.length;
            } else {
                log("Hooked length, arg:", item);
                return item.length;
            };
        },
        'appendChild': function (parent, child) {
            console.warn("Attempted to append", child, "to", parent);
            parent.appendChild(child);
        },
        // 'addEventListener': function(item, stringStart, stringLen, listener) {
        //     log("Hooked addEventListener", item, stringStart, stringLen, listener);
        //     item.addEventListener('pointermove', (...args) => {
        //         // log("Called pointermove listener with args:", args);
        //         listener(...args);
        //     });
        // },
        'innerText': () => { },
        '_has_': () => true,
        'isTrusted': () => true,
    };

    for (const key in wbg) {
        if (blockedCalls.some(call => key.includes(call))) {
            log(`${key}: Patching blank`);
            wbg[key] = function (...args) {
                console.warn(`Blocked call to ${key}`, args);
            };
        };
        // log(`wbg.${key}:`, wbg[key].toString());
        if (exceptions.some(exception => key.includes(exception))) {
            log(`${key}: Skipping patch (raw: ${wbg[key].toString()})`);
            continue;
        } else if (Object.keys(rewrites).some(rew => key.includes(rew))) {
            log(`${key}: Custom patch`);
            wbg[key] = rewrites[Object.keys(rewrites).find(rew => key.includes(rew))];
        } else {
            log(`${key}: Default patch (print args)`)
            wbg[key] = function () {
                log("Called", key);
                log("Args", arguments);
                console.warn(`Called unpatched ${key}! Something probably broke. Args:`, arguments, "\nAllowing passthrough!");
                return wbg[key].apply(this, arguments);
            };
        };
    };

    ss.WASMOBJECT = { response, importObj };
    window.WASMOBJECT = { response, importObj };

    // instantiate patched WASM
    return WebAssembly.instantiate(bytes, importObj);
};