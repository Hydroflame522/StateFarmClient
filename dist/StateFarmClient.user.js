// ==UserScript==
// @name         Shell Shockers Aimbot & ESP: StateFarm Client V3 - Bloom, Chat, Botting, Unban & More, shellshock.io
// @namespace    https://github.com/Hydroflame522/StateFarmClient/
// @version      3.5.8
// @author       Hydroflame521, enbyte, notfood, 1ust, OakSwingZZZ, Seq and de_Neuublue
// @description  Shell Shockers Aimbot & ESP of the highest level. Best shellshock.io menu in 2025 with NO ADS! Many cheats such as Aimbot, PlayerESP, AmmoESP, Chams, Nametags, Join/Leave alerts, Chat Filter Bypass, AntiAFK, FOV Slider, Zooming, Player Stats, Auto Reload, Auto Unban and many more whilst having unsurpassed customisation options such as binding to any key, easily editable color scheme and themes - all on the fly!
// @license      GPL-3.0
// @icon         https://sfc.best/raw/icons/StateFarmClientLogo384px.png
// @supportURL   https://github.com/Hydroflame522/StateFarmClient/-/issues/
// @downloadURL  https://sfc.best/js/sf.user.js
// @updateURL    https://sfc.best/js/sf.meta.js
// @match        *://*.shellshock.io/*
// @match        *://*.algebra.best/*
// @match        *://*.algebra.monster/*
// @match        *://*.algebra.vip/*
// @match        *://*.biologyclass.club/*
// @match        *://*.combateggs.com/*
// @match        *://*.deadlyegg.com/*
// @match        *://*.deathegg.life/*
// @match        *://*.deathegg.world/*
// @match        *://*.eggbattle.com/*
// @match        *://*.eggboy.club/*
// @match        *://*.eggboy.me/*
// @match        *://*.eggboy.xyz/*
// @match        *://*.eggcombat.com/*
// @match        *://*.egg.dance/*
// @match        *://*.eggfacts.fun/*
// @match        *://*.egggames.best/*
// @match        *://*.egghead.institute/*
// @match        *://*.eggisthenewblack.com/*
// @match        *://*.eggsarecool.com/*
// @match        *://*.eggshock.com/*
// @match        *://*.eggshock.me/*
// @match        *://*.eggshock.net/*
// @match        *://*.eggshooter.best/*
// @match        *://*.eggshooter.com/*
// @match        *://*.eggwarfare.com/*
// @match        *://*.eggwars.io/*
// @match        *://*.geometry.best/*
// @match        *://*.geometry.monster/*
// @match        *://*.geometry.pw/*
// @match        *://*.geometry.report/*
// @match        *://*.hardboiled.life/*
// @match        *://*.hardshell.life/*
// @match        *://*.humanorganising.org/*
// @match        *://*.mathactivity.club/*
// @match        *://*.mathactivity.xyz/*
// @match        *://*.mathdrills.info/*
// @match        *://*.mathdrills.life/*
// @match        *://*.mathfun.rocks/*
// @match        *://*.mathgames.world/*
// @match        *://*.math.international/*
// @match        *://*.mathlete.fun/*
// @match        *://*.mathlete.pro/*
// @match        *://*.overeasy.club/*
// @match        *://*.risenegg.com/*
// @match        *://*.scrambled.tech/*
// @match        *://*.scrambled.today/*
// @match        *://*.scrambled.us/*
// @match        *://*.scrambled.world/*
// @match        *://*.shellgame.me/*
// @match        *://*.shellplay.live/*
// @match        *://*.shellshockers.best/*
// @match        *://*.shellshockers.ca/*
// @match        *://*.shellshockers.club/*
// @match        *://*.shellshockers.life/*
// @match        *://*.shellshockers.site/*
// @match        *://*.shellshockers.today/*
// @match        *://*.shellshockers.us/*
// @match        *://*.shellshockers.website/*
// @match        *://*.shellshockers.wiki/*
// @match        *://*.shellshockers.world/*
// @match        *://*.shellshockers.xyz/*
// @match        *://*.shellshock.guru/*
// @match        *://*.shellsocks.com/*
// @match        *://*.softboiled.club/*
// @match        *://*.urbanegger.com/*
// @match        *://*.violentegg.club/*
// @match        *://*.violentegg.fun/*
// @match        *://*.yolk.best/*
// @match        *://*.yolk.life/*
// @match        *://*.yolk.monster/*
// @match        *://*.yolk.rocks/*
// @match        *://*.yolk.tech/*
// @match        *://*.yolk.quest/*
// @match        *://*.yolk.today/*
// @match        *://*.zygote.cafe/*
// @grant        GM.deleteValue
// @grant        GM.getValue
// @grant        GM.info
// @grant        GM.listValues
// @grant        GM.openInTab
// @grant        GM.setClipboard
// @grant        GM.setValue
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        unsafeWindow
// @run-at       document-start
// @antifeature  membership  Joining the discord is required for full usage of the script.
// ==/UserScript==

(function() {
	"use strict";
	var storageKey = "StateFarm_" + unsafeWindow.document.location.host.replaceAll(".", "") + "_";
	var log = function(...args) {
		let condition;
		try {
			condition = extract("consoleLogs");
		} catch (error) {
			condition = GM_getValue(storageKey + "DisableLogs");
		}
		if (!condition) if (__DEBUG__.doTraceLogging) console.trace(...args);
		else console.log(...args);
	};
	var originalReplace = String.prototype.replace;
	var originalReplaceAll = String.prototype.replaceAll;
	String.prototype.originalReplace = function() {
		return originalReplace.apply(this, arguments);
	};
	String.prototype.originalReplaceAll = function() {
		return originalReplaceAll.apply(this, arguments);
	};
	WebAssembly.instantiateStreaming = async (resp, importObj) => {
		const response = await resp;
		const buffer = await response.arrayBuffer();
		const bytes = new Uint8Array(buffer);
		const replacements = [{
			pattern: [
				3,
				64,
				12,
				0,
				11
			],
			replacement: [
				1,
				1,
				1,
				1,
				1
			]
		}, {
			pattern: [
				65,
				32,
				65,
				1,
				16,
				167
			],
			replacement: [
				65,
				32,
				65,
				75,
				16,
				167
			]
		}];
		const start = performance.now();
		const end = performance.now();
		log(`[sfc] Loop patching for ${replacements.length} patches took ${end - start}ms`);
		const wbg = importObj.wbg;
		let blockedCalls = ["sethref", "setInterval"];
		let exceptions = [
			"SELF",
			"WINDOW",
			"GLOBAL_THIS",
			"GLOBAL",
			"is_undefined",
			"init_",
			"document",
			"createElement",
			"settextContent",
			"body",
			"instanceof_Window",
			"instanceof_HtmlCanvasElement",
			"nodeType",
			"_item_",
			"_textContent_",
			"_now_",
			"_closure_",
			"_string_",
			"_number_",
			"movementX",
			"movementY",
			"_new_",
			"addEventListener",
			"instanceof_HtmlElement",
			"_get_",
			"_set_",
			"_cast_",
			"_wbindgenis",
			"_wbindgennumberget"
		];
		function wipeNode(node, classNameToRemove) {
			const clonedNode = node.cloneNode(true);
			function removeElements(currentNode) {
				if (!currentNode || !currentNode.children) return;
				const children = Array.from(currentNode.children);
				for (let i = 0; i < children.length; i++) {
					const child = children[i];
					const classList = Array.from(child.classList);
					if (classList.includes("tp-statefarm") || classList.includes("tp-dvfw") || classList.includes("MiniMap") || classList.includes("playerDot") || classList.some((c) => c.startsWith("tp-"))) currentNode.removeChild(child);
					else removeElements(child);
				}
			}
			removeElements(clonedNode);
			return clonedNode;
		}
		function checkForStateFarmChildren(node) {
			if (node.querySelectorAll) return node.querySelectorAll("[class^=\"tp-\"], .MiniMap, .playerDot").length > 0;
			return true;
		}
		class FakeNodeList extends Array {
			item(index) {
				return this[index];
			}
		}
		let rewrites = {
			"querySelector": function(item, wasm_str_offset, len) {
				if (len == 1) {
					log("Hooked querySelector", item, wasm_str_offset, len);
					let items = document.querySelectorAll("*:not(.tp-statefarm):not(.tp-statefarm *):not(.tp-statefarm > *):not(.tp-statefarm > * *)");
					log("Hooked length:", items.length);
					return items;
				}
			},
			"childNodes": function(item) {
				let nodes = item.childNodes;
				let spoofedNodes = new FakeNodeList();
				for (let child of nodes) if (checkForStateFarmChildren(child)) {
					let fakeNode = wipeNode(child.cloneNode(true));
					spoofedNodes.push(fakeNode);
				} else spoofedNodes.push(child.cloneNode(true));
				return spoofedNodes;
			},
			"_length_": function(item) {
				if (item instanceof FakeNodeList) return item.length;
				else {
					log("Hooked length, arg:", item);
					return item.length;
				}
			},
			"appendChild": function(parent, child) {
				console.warn("Attempted to append", child, "to", parent);
				parent.appendChild(child);
			},
			"innerText": () => {},
			"_has_": () => true,
			"isTrusted": () => true
		};
		for (const key in wbg) {
			if (blockedCalls.some((call) => key.includes(call))) {
				log(`${key}: Patching blank`);
				wbg[key] = function(...args) {
					console.warn(`Blocked call to ${key}`, args);
				};
			}
			if (exceptions.some((exception) => key.includes(exception))) {
				log(`${key}: Skipping patch (raw: ${wbg[key].toString()})`);
				continue;
			} else if (Object.keys(rewrites).some((rew) => key.includes(rew))) {
				log(`${key}: Custom patch`);
				wbg[key] = rewrites[Object.keys(rewrites).find((rew) => key.includes(rew))];
			} else {
				log(`${key}: Default patch (print args)`);
				wbg[key] = function() {
					log("Called", key);
					log("Args", arguments);
					console.warn(`Called unpatched ${key}! Something probably broke. Args:`, arguments, "\nAllowing passthrough!");
					return wbg[key].apply(this, arguments);
				};
			}
		}
		ss.WASMOBJECT = {
			response,
			importObj
		};
		window.WASMOBJECT = {
			response,
			importObj
		};
		return WebAssembly.instantiate(bytes, importObj);
	};
	var __DEBUG__$1 = {
		avoidReload: false,
		doTraceLogging: false,
		forceTriggerVarData: false,
		preventConsoleBlock: false
	};
	if (__DEBUG__$1.preventConsoleBlock) {
		const consoleMethods = [
			"log",
			"warn",
			"info",
			"error",
			"exception",
			"table",
			"trace"
		];
		const _innerConsole = console;
		consoleMethods.forEach((method) => {
			if (unsafeWindow.console[method]) Object.defineProperty(unsafeWindow.console, method, {
				configurable: false,
				get: (...args) => {
					return _innerConsole[method].bind(_innerConsole);
				},
				set: () => {}
			});
		});
	}
	var attemptedInjection = false;
	(function() {
		log("[sfc] WASM hook installed.");
		log("StateFarm: running (after function)");
		const name = "ЅtateFarm Client";
		const version = typeof GM_info !== "undefined" ? GM_info.script.version : "3";
		const menuTitle = name + " v" + version;
		const discordURL = "https://dsc.gg/sfnetwork";
		const discordName = "Farmer's Workers' Union";
		const greasyforkID = "482982";
		const youtubeURL = "https://www.youtube.com/@StateFarmClientV3";
		const greasyforkURL = `https://greasyfork.org/en/scripts/${greasyforkID}`;
		const downloadURL = GM_info ? GM_info.script.updateURL : greasyforkURL;
		const updateURL = GM_info ? GM_info.script.updateURL : greasyforkURL;
		const scriptInfoURL = `https://greasyfork.org/scripts/${greasyforkID}.json`;
		const gitID = "Hydroflame522/StateFarmClient";
		const gitType = "github";
		const baseURL = `https://${gitType}.com/${gitID}`;
		const treeMain = gitType === "github" ? "tree/main?tab=readme-ov-file" : "-/tree/main";
		const rawBase = "https://sfc.best/raw/";
		const cdnBase = gitType === "github" ? `https://cdn.jsdelivr.net/gh/${gitID}@main` : rawBase;
		const apiTreeBase = gitType === "github" ? `https://api.github.com/repos/${gitID}/contents` : `https://gitlab.com/api/v4/projects/${encodeURIComponent(gitID)}/repository/tree`;
		const commitFeedURL = gitType === "github" ? `https://api.github.com/repos/${gitID}/commits?path=StateFarmClient.js` : `https://gitlab.com/api/v4/projects/${encodeURIComponent(gitID)}/repository/commits?path=StateFarmClient.js&ref=main`;
		const featuresGuideURL = `${baseURL}/${treeMain}#-features`;
		const bottingGuideURL = `${baseURL}/${treeMain}#-botting`;
		const replacementLogoURL = `${cdnBase}/icons/shell-logo-replacement.png`;
		const replacementLogoHalloweenURL = `${cdnBase}/icons/shell-logo-replacement-halloween.png`;
		const replacementLogoChristmasURL = `${cdnBase}/icons/shell-logo-replacement-christmas.png`;
		const replacementLogoNewYearsURL = `${cdnBase}/icons/shell-logo-replacement-new-years.png`;
		const replacementFeedURL = `${rawBase}/feeds/`;
		const badgeListURL = `${cdnBase}/badges/`;
		const iconURL = `${cdnBase}/icons/StateFarmClientLogo384px.png`;
		const itsOverURL = `${cdnBase}/assets/its%20over/ItsOver4Smaller_.png`;
		const eggShowURL = `${cdnBase}/assets/show/EggShowSmaller_.png`;
		const sfxURL = gitType === "github" ? `${apiTreeBase}/soundpacks/sfx` : `${apiTreeBase}?path=soundpacks/sfx&ref=main`;
		const skyboxListURL = gitType === "github" ? `${apiTreeBase}/skyboxes` : `${apiTreeBase}?path=skyboxes&ref=main`;
		const factoryURL = "https://factory.getstate.farm/api/account?key=";
		const clientKeysURL = `https://raw.githubusercontent.com/StateFarmNetwork/client-keys/refs/heads/main/statefarm_`;
		const sfChatURL = `https://raw.githack.com/${gitID}/main/chat/index.html`;
		const babylonURL = `https://cdn.jsdelivr.net/npm/babylonjs@{0}/babylon.min.js`;
		const violentmonkeyURL = `https://violentmonkey.github.io/get-it/`;
		const startUp = function() {
			log("StateFarm: detectURLParams()");
			detectURLParams();
			log("StateFarm: mainLoop()");
			mainLoop();
			log("StateFarm: injectScript()");
			injectScript();
			document.addEventListener("DOMContentLoaded", function() {
				onContentLoaded();
				log("StateFarm: DOMContentLoaded, ran onContentLoaded, fetching sfx");
				try {
					log("fetching badge list...", badgeListURL + "badges.json");
					badgeList = fetchTextContent(badgeListURL + "badges.json");
					badgeList = JSON.parse(badgeList);
					log(badgeList);
				} catch (error) {
					log("couldnt fetch badge list :(");
				}
				try {
					log("fetching greasyfork info...", scriptInfoURL);
					scriptInfo = fetchTextContent(scriptInfoURL);
					scriptInfo = JSON.parse(scriptInfo);
					log(scriptInfo);
				} catch (error) {
					log("couldnt fetch greasyfork info :(");
				}
				let oldVersion = load("version");
				save("version", version);
				if (extract("statefarmUpdates")) {
					const maxAttempts = 30;
					const interval = 500;
					let attempts = 0;
					const checkForElement = function() {
						const existingContainer = document.querySelector(".secondary-aside-wrap");
						if (existingContainer) {
							log("Element found:", existingContainer);
							createAndAppendCommitHistoryBox(existingContainer);
						} else if (attempts < maxAttempts) {
							attempts++;
							setTimeout(checkForElement, interval);
						} else log("Element not found after maximum attempts");
					};
					const createAndAppendCommitHistoryBox = function(existingContainer) {
						let commitHistoryBox = createStatefarmElement("div");
						commitHistoryBox.className = "tp-statefarm media-tabs-wrapper box_relative border-blue5 roundme_sm bg_blue6 common-box-shadow ss_margintop_sm";
						let commitHistoryContent = `
                    <div class="media-tab-container display-grid align-items-center gap-sm bg_blue3">
                        <h4 class="common-box-shadow text-shadow-black-40 text_white dynamic-text" style="display: flex; align-items: center;">
                            <div class="dynamic-text" style="width: 10em; font-size: 1em;">
                                <div class="dynamic-text" style="font-size: 1em;">StateFarm Updates</div>
                            </div>
                            <a href="${discordURL}" target="_blank" style="text-decoration: none; margin-left: auto;">
                                <button class="ss_button btn_blue bevel_blue box_relative pause-screen-ui btn-account-w-icon text-shadow-none text_blue1" style="font-size: 0.75em; display: flex; align-items: center; padding: 0.5em 1em; width: 12em; margin-left: -3em;">
                                    <i class="fab fa-discord" style="font-size: 1.2em; margin-right: 0.5em;"></i>
                                    <span>Join Discord</span>
                                </button>
                            </a>
                        </h4>
                    </div>
                    <div class="media-tabs-content f_col">
                        <div class="tab-content ss_paddingright ss_paddingleft">
                            <div class="news-container f_col v_scroll" style="height: 20em; overflow-y: auto;">
                    `;
						let disablePlayButton = vueApp.disablePlayButton;
						vueApp.disablePlayButton = (isDisabled) => {
							log("called disablePlayButton, so we are handling the statefarm updates box");
							if (isDisabled) commitHistoryBox.style.display = "none";
							else commitHistoryBox.style.display = "";
							return disablePlayButton(isDisabled);
						};
						fetch(commitFeedURL).then((response) => {
							if (response.ok) return response.json();
							else log("Failed to fetch commit history contents", response);
						}).then((commitHistory) => {
							log("retrieved: commit history", commitHistory);
							if (oldVersion !== version) commitHistoryContent += `
                                <a href="${baseURL}" target="_blank" style="text-decoration: none;">
                                    <div class="updated-notice" style="background-color: #28a745; color: #fff; padding: 0.75em; text-align: center; font-weight: bold; margin-bottom: 0.15em; margin-top: 0.25em; border-radius: 10px; border: 2px solid #155724;">
                                        <p style="margin: 0; font-size: 0.95em;">🎉 StateFarm has been updated (v${version})! Check out the latest updates below.</p>
                                    </div>
                                </a>
                            `;
							if (scriptInfo && scriptInfo.version && scriptInfo.version !== version && typeof GM_info !== "undefined") commitHistoryContent += `
                            <a href="${downloadURL}" target="_blank" style="text-decoration: none;">
                                <div class="attention-notice" style="background-color: #ffcc00; color: #000; padding: 0.75em; text-align: center; font-weight: bold; margin-bottom: 0.15em; margin-top: 0.25em; border-radius: 5px; border: 2px solid #ffff00;">
                                    <p style="margin: 0; font-size: 0.95em;">🚨 A new update for StateFarm is available (v${scriptInfo.version})! Click to install it.</p>
                                </div>
                            </a>
                            `;
							commitHistory.forEach((commit) => {
								const commitDate = new Date(commit?.commit?.author?.date || commit?.committed_date || 0).toLocaleString();
								const authorName = commit.author?.login || commit.author?.username || commit.author_name;
								const authorProfileURL = `https://${gitType}/${authorName}`;
								const authorAvatarURL = commit.author?.avatar_url || commit.author?.avatar || `${cdnBase}/icons/default-avatar.png`;
								const messageParts = (commit.commit?.message || commit?.message || "").split("\n\n", 2);
								const title = messageParts[0];
								const description = messageParts[1] || "";
								commitHistoryContent += `
                            <div class="commit-item" style="padding: 0.2em 0.3em; background-color: #95e2fe; border-bottom: 2px solid #0B93BD;">
                                <div style="display: flex; align-items: flex-start;">
                                    <a href="${authorProfileURL}" target="_blank" style="margin-right: 0.3em; display: flex; align-items: flex-start;">
                                        <img src="${authorAvatarURL}" alt="${authorName}" style="width: 24px; height: 24px; border-radius: 50%;">
                                    </a>
                                    <div style="display: flex; flex-direction: column; justify-content: flex-start;">
                                        <a href="${commit?.html_url || commit?.web_url}" target="_blank" style="color: #0E7697; text-decoration: none; font-size: 0.75em; font-weight: bold; line-height: 1.2;">
                                            ${title}
                                        </a>
                                        ${description ? `<p style="color: #0B93BD; font-size: 0.65em; margin: 0; line-height: 1.2;">${description}</p>` : ""}
                                        <span style="color: white; font-size: 0.75em; font-weight: bold;">
                                            by <a href="${authorProfileURL}" target="_blank" style="color: #0E7697; text-decoration: none; font-size: 0.75em;">${authorName}</a> on ${commitDate}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            `;
							});
							commitHistoryContent += `
                            </div>
                        </div>
                    </div>
                    `;
							commitHistoryBox.innerHTML = commitHistoryContent;
							existingContainer.appendChild(commitHistoryBox);
						}).catch((error) => {
							log("Error:", error);
						});
					};
					checkForElement();
				}
				(async () => {
					try {
						var response = await fetch(sfxURL);
						if (!response.ok) throw new Error("Failed to fetch folder contents (custom sfx)");
						var data = await response.json();
						data.forEach((file) => {
							retrievedSFX.push({
								text: file.name.replace(".zip", ""),
								value: btoa(file.download_url ? file.download_url : `${rawBase}/${file.path}`)
							});
						});
						var response = await fetch(skyboxListURL);
						if (!response.ok) throw new Error("Failed to fetch folder contents (custom skyboxes)");
						var data = await response.json();
						data.forEach((folder) => {
							if (folder.type === "dir" || folder.mode === "040000" || folder.type === "tree") {
								let url = folder.url || `${rawBase}/${folder.path}`;
								url = url.replace("//api.github.com/repos/", "//raw.githubusercontent.com/");
								url = url.replace("/contents/", "/master/");
								url = `${url.split("?")[0]}/`;
								loadedSkyboxes.push({
									text: folder.name,
									value: btoa(url)
								});
							}
						});
						initMenu(false);
						tp.mainPanel.hidden = extract("hideAtStartup");
					} catch (error) {
						console.error("Error:", error);
						initMenu(false);
						tp.mainPanel.hidden = extract("hideAtStartup");
					}
				})();
			});
		};
		const inbuiltPresets = {
			"onlypuppy7's Config": `sfChatNotifications>true<sfChatNotificationSound>true<sfChatAutoStart>true<sfChatInvitations>true<aimbot>true<aimbotTargetMode>0<aimbotVisibilityMode>1<aimbotRightClick>true<silentAimbot>false<aimbSemiSilent>false<noWallTrack>false<prediction>true<antiBloom>true<antiSwitch>false<oneKill>false<aimbotMinAngle>360<antiSneak>1.8<aimbotAntiSnap>0<aimbotAntiSnapRegime>3<maxAimTime>64<autoRefill>true<smartRefill>true<enableAutomatic>true<enableAutoFire>true<autoFireType>3<autoFireAccuracy>0.05<grenadeMax>true<grenadePower>1<playerESP>true<tracers>true<chams>false<trajectories>true<predictionESP>false<nametags>true<nametagInfo>false<nametagInfoInterval>5<aimbotColor>"#0000ff"<aimbotRainbow>false<tracersType>2<tracersColor1Rainbow>true<tracersColor1>"#ff0000"<tracersColor2>"#00ff00"<tracersColor3>"#ffffff"<tracersColor1to2>5<tracersColor2to3>15<predictionESPColor>"#ff0000"<predictionESPColorRainbow>false<ammoESP>true<ammoTracers>false<ammoESPRegime>1<ammoESPColor>"#ffff00"<grenadeESP>true<grenadeTracers>false<grenadeESPRegime>2<grenadeESPColor>"#00ffff"<lookTracers>false<lookTracersRGI1>false<lookTracersColor>"#00ffff"<fov>120<zoom>15<perspective>0<perspectiveY>0.5<perspectiveZ>2<freecam>false<wireframe>false<particleSpeedMultiplier>0.35<eggSize>1<setDetail>0<enableTextures>true<renderDelay>0<revealBloom>true<showLOS>true<showMinAngle>true<highlightLeaderboard>true<showCoordinates>true<radar>false<playerStats>true<playerInfo>true<gameInfo>true<showStreams>true<minimap>false<minimapZoom>5<minimapSize>1<chatExtend>true<chatHighlight>false<maxChat>10<disableChatFilter>true<unfilterNames>true<chatFilterBypass>false<tallChat>false<fakeMessageID>0<fakeMessageText>"dsc.gg/s𝖿network: ЅtateFarm Client v3.4.1-pre154 On Top! "<fakeMessageBold>false<spamChat>false<spamChatDelay>500<spamChatText>"dsc.gg/s𝖿network: ЅtateFarm Client v3.4.1-pre154 On Top! "<mockMode>false<announcer>false<autoEZ>false<cheatAccuse>false<joinMessages>true<leaveMessages>true<publicBroadcast>false<joinLeaveBranding>false<whitelist>"User-1, User-2"<enableWhitelistAimbot>false<enableWhenNoneVisible>false<enableWhitelistTracers>false<whitelistESPType>0<whitelistColor>"#e80aac"<blacklist>"User-1, User-2"<enableBlacklistAimbot>false<enableBlacklistTracers>false<blacklistESPType>0<blacklistColor>"#00ff00"<bunnyhop>true<autoWalk>false<autoStrafe>false<autoJump>false<autoJumpDelay>1<autoWeapon>0<autoGrenade>false<autoJoin>false<joinCode>"CODE"<useCustomName>false<usernameAutoJoin>"ЅtateFarmer"<autoRespawn>false<autoTeam>0<gameBlacklist>false<gameBlacklistCodes>""<leaveEmpty>false<autoLeave>false<autoLeaveDelay>300<autoGamemode>0<autoRegion>0<eggColor>14<autoStamp>0<autoHat>0<skybox>1<randomSkyBox>true<randomSkyBoxInterval>5.9<legacyModels>true<filter>0<gunPosition>true<bobModifierEnabled>true<bobModifier>0.25<bobModifierWhenStill>true<muteGame>false<distanceMult>1.5<customSFX1>3<customSFX2>4<customSFX3>5<replaceLogo>true<titleAnimation>true<themeType>5<partyLightsEnabled>true<partyLightsIntensity>1.87<worldFlattening>1<loginEmailPass>"ssss"<loginDatabaseSelection>1<autoLogin>0<accountGmail>"example (NO @gmail.com)"<accountPass>"password69"<accountRecordsLogging>false<factoryKey>""<autoUnban>true<adBlock>true<spoofVIP>true<noAnnoyances>true<noTrack>true<antiAFK>true<quickRespawn>true<statefarmUpdates>true<replaceFeeds>true<customBadges>true<unlockSkins>false<adminSpoof>false<autoChickenWinner>true<chickenWinnerNotifs>true<customMacro>"log('cool');"<autoMacro>false<silentRoll>false<enableSeizureX>false<amountSeizureX>2<enableSeizureY>false<amountSeizureY>2<vardataFallback>0<vardataType>0<vardataCustom>"{}"<hideAtStartup>false<consoleLogs>false<popups>true<tooltips>true<enablePanic>true<panicURL>"https://classroom.google.com/"<selectedPreset>0<debug>false`,
			"OP7 + Server Hopper": `sfChatNotifications>true<sfChatNotificationSound>true<sfChatAutoStart>true<aimbot>true<aimbotTargetMode>0<aimbotVisibilityMode>1<aimbotRightClick>true<silentAimbot>false<aimbSemiSilent>false<noWallTrack>false<prediction>true<antiBloom>true<antiSwitch>true<oneKill>true<aimbotMinAngle>174<aimbotAntiSnap>0.75<antiSneak>1.8<aimbotColor>"#0000ff"<autoRefill>true<smartRefill>true<enableAutoFire>true<autoFireType>3<grenadeMax>true<playerESP>true<tracers>true<chams>false<nametags>true<targets>false<predictionESP>false<tracersType>0<tracersColor1>"#ff0000"<tracersColor2>"#00ff00"<tracersColor3>"#ffffff"<tracersColor1to2>5<tracersColor2to3>15<predictionESPColor>"#ff0000"<ammoESP>true<ammoTracers>false<ammoESPRegime>1<ammoESPColor>"#ffff00"<grenadeESP>true<grenadeTracers>false<grenadeESPRegime>2<grenadeESPColor>"#00ffff"<lookTracers>false<lookTracersRGI1>false<lookTracersColor>"#00ffff"<fov>120<zoom>15<perspective>0<perspectiveAlpha>false<perspectiveY>0.5<perspectiveZ>2<freecam>false<wireframe>false<particleSpeedMultiplier>0.35<eggSize>1<setDetail>0<enableTextures>true<renderDelay>0<revealBloom>true<showLOS>true<showMinAngle>false<highlightLeaderboard>true<showCoordinates>true<radar>false<playerStats>true<playerInfo>true<gameInfo>true<showStreams>true<chatExtend>true<chatHighlight>false<maxChat>10<disableChatFilter>true<unfilterNames>true<chatFilterBypass>false<tallChat>false<antiAFK>false<spamChat>false<fakeMessageID>12<fakeMessageText>"dsc.gg/s𝖿network: ЅtateFarm Client v3.4.1-pre94 On Top! "<fakeMessageBold>false<spamChatDelay>500<spamChatText>"dsc.gg/s𝖿network: ЅtateFarm Client v3.4.1-pre71 On Top! "<mockMode>false<announcer>false<autoEZ>false<cheatAccuse>false<joinMessages>true<leaveMessages>true<publicBroadcast>false<joinLeaveBranding>false<whitelist>"User-1, User-2"<enableWhitelistAimbot>false<enableWhenNoneVisible>false<enableWhitelistTracers>false<whitelistESPType>0<whitelistColor>"#e80aac"<blacklist>"User-1, User-2"<enableBlacklistAimbot>false<enableBlacklistTracers>false<blacklistESPType>0<blacklistColor>"#00ff00"<bunnyhop>true<autoWalk>false<autoStrafe>false<autoJump>false<autoJumpDelay>1<autoWeapon>0<autoGrenade>false<autoJoin>false<joinCode>"CODE"<useCustomName>false<usernameAutoJoin>"ЅtateFarmer"<autoRespawn>false<autoTeam>0<gameBlacklist>false<gameBlacklistCodes>""<leaveEmpty>true<autoLeave>true<autoLeaveDelay>150<autoGamemode>5<autoRegion>8<eggColor>0<autoStamp>0<autoHat>0<skybox>9<legacyModels>true<filter>2<gunPosition>0<muteGame>false<distanceMult>1.5<customSFX1>3<customSFX2>4<customSFX3>1<replaceLogo>true<titleAnimation>true<themeType>5<loginEmailPass>"ssss"<loginDatabaseSelection>1<autoLogin>0<accountGmail>"example (NO @gmail.com)"<accountPass>"password69"<accountRecordsLogging>false<factoryKey>""<adBlock>true<spoofVIP>false<noAnnoyances>true<noTrack>true<quickRespawn>true<statefarmUpdates>true<replaceFeeds>true<customBadges>true<unlockSkins>false<adminSpoof>false<autoUnban>true<autoChickenWinner>true<customMacro>"log('cool');"<autoMacro>false<silentRoll>false<enableSeizureX>false<amountSeizureX>2<enableSeizureY>false<amountSeizureY>2<hideAtStartup>false<consoleLogs>false<popups>true<enablePanic>false<panicURL>"https://classroom.google.com/"<selectedPreset>0<debug>false`,
			"OP7 + Server Hopper + Stream Stealth": `sfChatNotifications>true<sfChatNotificationSound>true<sfChatAutoStart>true<aimbot>true<aimbotTargetMode>0<aimbotVisibilityMode>1<aimbotRightClick>true<silentAimbot>true<aimbSemiSilent>false<noWallTrack>false<prediction>true<antiBloom>true<antiSwitch>false<oneKill>false<aimbotMinAngle>174<aimbotAntiSnap>0.75<antiSneak>1.8<aimbotColor>"#0000ff"<autoRefill>true<smartRefill>true<enableAutoFire>true<autoFireType>3<grenadeMax>true<playerESP>false<tracers>false<chams>false<nametags>true<targets>false<predictionESP>false<tracersType>0<tracersColor1>"#ff0000"<tracersColor2>"#00ff00"<tracersColor3>"#ffffff"<tracersColor1to2>5<tracersColor2to3>15<predictionESPColor>"#ff0000"<ammoESP>false<ammoTracers>false<ammoESPRegime>1<ammoESPColor>"#ffff00"<grenadeESP>false<grenadeTracers>false<grenadeESPRegime>2<grenadeESPColor>"#00ffff"<lookTracers>false<lookTracersRGI1>false<lookTracersColor>"#00ffff"<fov>120<zoom>15<perspective>0<perspectiveAlpha>false<perspectiveY>0.5<perspectiveZ>2<freecam>false<wireframe>false<particleSpeedMultiplier>0.35<eggSize>1<setDetail>0<enableTextures>true<renderDelay>0<revealBloom>false<showLOS>false<showMinAngle>false<highlightLeaderboard>true<showCoordinates>false<radar>false<playerStats>false<playerInfo>false<gameInfo>true<showStreams>false<chatExtend>true<chatHighlight>false<maxChat>10<disableChatFilter>true<unfilterNames>true<chatFilterBypass>false<tallChat>false<antiAFK>false<spamChat>false<fakeMessageID>1<fakeMessageText>"dsc.gg/s𝖿network: ЅtateFarm Client v3.4.1-pre95 On Top! "<fakeMessageBold>false<spamChatDelay>500<spamChatText>"dsc.gg/s𝖿network: ЅtateFarm Client v3.4.1-pre95 On Top! "<mockMode>false<announcer>false<autoEZ>false<cheatAccuse>false<joinMessages>true<leaveMessages>true<publicBroadcast>false<joinLeaveBranding>false<whitelist>"User-1, User-2"<enableWhitelistAimbot>false<enableWhenNoneVisible>false<enableWhitelistTracers>false<whitelistESPType>0<whitelistColor>"#e80aac"<blacklist>"User-1, User-2"<enableBlacklistAimbot>false<enableBlacklistTracers>false<blacklistESPType>0<blacklistColor>"#00ff00"<bunnyhop>true<autoWalk>false<autoStrafe>false<autoJump>false<autoJumpDelay>1<autoWeapon>0<autoGrenade>false<autoJoin>false<joinCode>"CODE"<useCustomName>true<usernameAutoJoin>"[sfc] onlypuppy7"<autoRespawn>false<autoTeam>0<gameBlacklist>false<gameBlacklistCodes>""<leaveEmpty>true<autoLeave>true<autoLeaveDelay>150<autoGamemode>5<autoRegion>8<eggColor>0<autoStamp>0<autoHat>0<skybox>9<legacyModels>true<filter>true<gunPosition>true<muteGame>false<distanceMult>1.5<customSFX1>3<customSFX2>4<customSFX3>1<replaceLogo>true<titleAnimation>false<themeType>5<loginEmailPass>"ssss"<loginDatabaseSelection>1<autoLogin>0<accountGmail>"example (NO @gmail.com)"<accountPass>"password69"<accountRecordsLogging>false<factoryKey>""<adBlock>true<spoofVIP>false<noAnnoyances>true<noTrack>true<quickRespawn>true<statefarmUpdates>true<replaceFeeds>true<customBadges>true<unlockSkins>false<adminSpoof>false<autoUnban>true<autoChickenWinner>true<customMacro>"log('cool');"<autoMacro>false<silentRoll>false<enableSeizureX>false<amountSeizureX>2<enableSeizureY>false<amountSeizureY>2<hideAtStartup>false<consoleLogs>false<popups>false<enablePanic>false<panicURL>"https://classroom.google.com/"<selectedPreset>1<debug>false`,
			"Doeshotter's Crackshot Config": `sfChatNotifications>false<sfChatNotificationSound>false<sfChatAutoStart>false<sfChatInvitations>true<aimbot>true<aimbotTargetMode>0<aimbotVisibilityMode>2<aimbotRightClick>true<silentAimbot>true<aimbSemiSilent>false<noWallTrack>false<prediction>true<antiBloom>true<antiSwitch>true<oneKill>false<aimbotMinAngle>7<antiSneak>0<aimbotAntiSnap>0<autoRefill>true<smartRefill>true<enableAutomatic>true<enableAutoFire>true<autoFireType>3<autoFireAccuracy>0.15000000000000002<grenadeMax>false<grenadePower>1<playerESP>true<tracers>false<chams>false<trajectories>true<predictionESP>false<nametags>true<nametagInfo>false<nametagInfoInterval>14<aimbotColor>"#ff0000"<aimbotRainbow>false<tracersType>2<tracersColor1Rainbow>true<tracersColor1>"#ff0000"<tracersColor2>"#0000ff"<tracersColor3>"#ffffff"<tracersColor1to2>5<tracersColor2to3>15<predictionESPColor>"#ff0000"<predictionESPColorRainbow>false<ammoESP>false<ammoTracers>false<ammoESPRegime>0<ammoESPColor>"#ffff00"<grenadeESP>false<grenadeTracers>false<grenadeESPRegime>0<grenadeESPColor>"#00ffff"<lookTracers>false<lookTracersRGI1>false<lookTracersColor>"#00ffff"<fov>72<zoom>15<perspective>0<perspectiveAlpha>false<perspectiveY>0.5<perspectiveZ>2<freecam>false<wireframe>false<particleSpeedMultiplier>1<eggSize>1<setDetail>0<enableTextures>true<renderDelay>0<revealBloom>true<showLOS>true<showMinAngle>false<highlightLeaderboard>false<showCoordinates>false<radar>false<playerStats>false<playerInfo>false<gameInfo>false<showStreams>false<minimap>false<minimapZoom>5<minimapSize>1<chatExtend>false<chatHighlight>false<maxChat>5<disableChatFilter>false<unfilterNames>false<chatFilterBypass>false<tallChat>false<fakeMessageID>1<fakeMessageText>"dsc.gg/s𝖿network: ЅtateFarm Client v3.4.1-pre147 On Top! "<fakeMessageBold>false<spamChat>false<spamChatDelay>500<spamChatText>"dsc.gg/s𝖿network: ЅtateFarm Client v3.4.1-pre147 On Top! "<mockMode>false<announcer>false<autoEZ>false<cheatAccuse>false<joinMessages>false<leaveMessages>false<publicBroadcast>false<joinLeaveBranding>false<whitelist>"User-1, User-2"<enableWhitelistAimbot>false<enableWhenNoneVisible>false<enableWhitelistTracers>false<whitelistESPType>0<whitelistColor>"#e80aac"<blacklist>"User-1, User-2"<enableBlacklistAimbot>false<enableBlacklistTracers>false<blacklistESPType>0<blacklistColor>"#00ff00"<bunnyhop>true<autoWalk>false<autoStrafe>false<autoJump>false<autoJumpDelay>1<autoWeapon>0<autoGrenade>false<autoJoin>false<joinCode>"CODE"<useCustomName>false<usernameAutoJoin>"ЅtateFarmer"<autoRespawn>false<autoTeam>0<gameBlacklist>false<gameBlacklistCodes>""<leaveEmpty>false<autoLeave>false<autoLeaveDelay>300<autoGamemode>0<autoRegion>0<eggColor>0<autoStamp>0<autoHat>0<skybox>true<randomSkyBox>false<randomSkyBoxInterval>3<legacyModels>false<filter>true<gunPosition>true<muteGame>false<distanceMult>1<customSFX1>true<customSFX2>true<customSFX3>true<replaceLogo>false<titleAnimation>false<themeType>5<partyLightsEnabled>false<partyLightsIntensity>0.5<loginEmailPass>"ex@gmail.com:passwd"<loginDatabaseSelection>0<autoLogin>0<accountGmail>"example (NO @gmail.com)"<accountPass>"password69"<accountRecordsLogging>false<factoryKey>""<adBlock>false<spoofVIP>false<noAnnoyances>true<noTrack>true<antiAFK>true<quickRespawn>true<statefarmUpdates>true<replaceFeeds>true<customBadges>true<unlockSkins>true<adminSpoof>false<autoUnban>true<autoChickenWinner>false<customMacro>"log('wow ur cool!');"<autoMacro>true<silentRoll>false<enableSeizureX>false<amountSeizureX>2<enableSeizureY>false<amountSeizureY>2<vardataFallback>0<vardataType>0<vardataCustom>"{}"<hideAtStartup>false<consoleLogs>false<popups>true<tooltips>true<enablePanic>false<panicURL>"https://classroom.google.com/"<selectedPreset>0<debug>false`,
			"Hydroflame521's Config": `aimbot>true<aimbotTargetMode>0<aimbotVisibilityMode>0<aimbotRightClick>true<silentAimbot>false<noWallTrack>true<prediction>true<antiBloom>true<antiSwitch>true<oneKill>true<aimbotMinAngle>30<aimbotAntiSnap>0.77<antiSneak>1.8<aimbotColor>"#0000ff"<autoRefill>true<smartRefill>true<enableAutoFire>true<autoFireType>3<grenadeMax>true<playerESP>true<tracers>true<chams>false<nametags>true<targets>true<tracersType>1<tracersColor1>"#b200ff"<tracersColor2>"#ff0000"<tracersColor3>"#00ff4b"<tracersColor1to2>3<tracersColor2to3>20<ammoESP>true<ammoTracers>false<ammoESPRegime>1<ammoESPColor>"#ffff00"<grenadeESP>true<grenadeTracers>false<grenadeESPRegime>0<grenadeESPColor>"#00ffff"<fov>120<zoom>15<freecam>false<wireframe>false<eggSize>1<setDetail>0<enableTextures>true<renderDelay>0<revealBloom>true<showLOS>true<showMinAngle>false<highlightLeaderboard>false<showCoordinates>true<radar>false<playerStats>true<playerInfo>true<gameInfo>true<showStreams>true<chatExtend>true<chatHighlight>false<maxChat>10<disableChatFilter>true<chatFilterBypass>false<tallChat>false<antiAFK>false<spamChat>false<spamChatDelay>1440<spamChatText>"Live now at twitch.tv/ЅtateFarmNetwork! "<mockMode>false<announcer>false<autoEZ>false<cheatAccuse>false<joinMessages>true<leaveMessages>true<publicBroadcast>false<joinLeaveBranding>false<whitelist>"User-1, User-2"<enableWhitelistAimbot>false<enableWhitelistTracers>false<whitelistESPType>0<whitelistColor>"#e80aac"<blacklist>"User-1, User-2"<enableBlacklistAimbot>false<enableBlacklistTracers>false<blacklistESPType>0<blacklistColor>"#00ff00"<bunnyhop>false<autoWalk>false<autoStrafe>false<autoJump>false<autoJumpDelay>1<autoWeapon>0<autoGrenade>false<autoJoin>false<joinCode>"CODE"<useCustomName>false<usernameAutoJoin>"CaptainShell74"<autoRespawn>false<autoTeam>0<gameBlacklist>false<gameBlacklistCodes>""<leaveEmpty>false<autoLeave>false<autoLeaveDelay>240<autoGamemode>0<autoRegion>0<eggColor>0<autoStamp>0<autoHat>0<muteGame>false<distanceMult>0.59<customSFX>true<adBlock>true<spoofVIP>false<unlockSkins>false<adminSpoof>false<autoUnban>true<silentRoll>false<enableSeizureX>false<amountSeizureX>2<enableSeizureY>false<amountSeizureY>0.04772456526919999<popups>true<replaceLogo>false<titleAnimation>false<themeType>7<enablePanic>false<panicURL>"https://classroom.google.com/"<selectedPreset>0<debug>false`
		};
		const presetStorageLocation = "StateFarmUserPresets";
		let hudElementPositions = {};
		let cachedRealData = {};
		let blacklistedGameCodes = [];
		let sfChatIframe;
		let sfChatContainer;
		let sfChatUsername;
		let presetIgnore = ["sfChatUsername", "otherSettingYouMightWantNotToBeExported"];
		log("Save key:", storageKey);
		let binding = false;
		let previousFrame = 0;
		let framesPassed = 0;
		let previousLogin = 0;
		let lastSpamMessage = [0, ""];
		let startTime = Date.now();
		let lastAutoJump = 0;
		let lastAntiAFKMessage = 0;
		let miniCamera;
		let spamMessageCount = 0;
		let currentFrameIndex = 0;
		let deciSecondsPassed = 0;
		let timeJoinedGame = 0;
		let lastSentMessage = "";
		let spamDelay = 0;
		let URLParams = "";
		let playerInfoCache = {};
		let retrievedSFX = [{
			text: "Default",
			value: "default"
		}];
		let soundsSFC = {};
		let targetingComplete = false;
		let firstExecution = false;
		let username = "";
		let autoStrafeValue = [
			0,
			0,
			"left"
		];
		let TEAMCOLORS = [
			"#fed838",
			"#40e0ff",
			"#ffc0a0"
		];
		let autoLeaveReminder = 9999;
		let lastRandomSkyBoxChangeTime = Date.now();
		const allModules = [];
		const allFolders = [];
		const F = [];
		const createAudioContext = function() {
			return new (window.AudioContext || window.webkitAudioContext)();
		};
		const audioContexts = {
			"BGM": createAudioContext(),
			"KOTC": createAudioContext(),
			"OTHER1": createAudioContext(),
			"OTHER2": createAudioContext(),
			"OTHER3": createAudioContext(),
			"OTHER4": createAudioContext(),
			"OTHER5": createAudioContext(),
			"OTHER6": createAudioContext(),
			"OTHER7": createAudioContext(),
			"OTHER8": createAudioContext(),
			"OTHER9": createAudioContext(),
			"SOUNDS": createAudioContext()
		};
		const loadedSkyboxes = [{
			text: "Default",
			value: "default"
		}];
		const divertContexts = { "KOTC": [
			"kotc_capture",
			"kotc_capturing_opponents",
			"kotc_capturing_player",
			"kotc_contested",
			"kotc_pointscore",
			"kotc_roundend",
			"kotc_zonespawn"
		] };
		const L = {};
		const functionNames = [];
		const isKeyToggled = {};
		let ESPArray = [];
		var trajectory = null;
		var trajectoryNade = null;
		let onlinePlayersArray = [];
		let bindsArray = {};
		let currentAimTime = 0;
		let nowOld = 0;
		let ss = {};
		let H = {};
		let C = {};
		const tp = {};
		let msgElement, allowAccess, tooltipElement, vardataOverlay, vardataPopup, closeVardataPopup, botBlacklist, botWhitelist, hash, onlineClientKeys, initialisedCustomSFX, accuracyPercentage, automatedBorder, clientID, partyLight, didStateFarm, menuInitiated, GAMECODE, noPointerPause, sneakyDespawning, resetModules, amountOnline, errorString, playersInGame, loggedGameMap, startUpComplete, isBanned, attemptedAutoUnban, coordElement, performanceElement, gameInfoElement, playerinfoElement, playerstatsElement, firstUseElement, minangleCircle, redCircle, crosshairsPosition, currentlyTargeting, ammo, ranOneTime, lastWeaponBox, lastChatItemLength, configMain, configBots, playerLogger;
		let whitelistPlayers, scrambledMsgEl, accountStatus, updateMenu, badgeList, scriptInfo, annoyancesRemoved, oldGa, newGame, previousDetail, previousLegacyModels, previousTitleAnimation, blacklistPlayers, playerLookingAt, forceControlKeys, forceControlKeysCache, playerNearest, enemyLookingAt, enemyNearest, AUTOMATED, ranEverySecond, enemyAimNearest;
		let cachedCommand = "", cachedCommandTime = Date.now();
		let activePath, findNewPath, activeNodeTarget;
		let pathfindingTargetOverride = void 0;
		let isFirstFrameAttemptingToPathfind = true;
		let despawnIfNoPath = false;
		let isLeftButtonDown = false;
		let isRightButtonDown = false;
		let configNotSet = true;
		let nameTextures = {};
		let tooltips = {};
		let amountVisible = 0;
		const weaponArray = {
			eggk47: 0,
			scrambler: 1,
			freeranger: 2,
			rpegg: 3,
			whipper: 4,
			crackshot: 5,
			trihard: 6,
			random: 3
		};
		const filteredList = [
			"date",
			"dick",
			"fuck",
			"fuk",
			"suck",
			"piss",
			"hate",
			"nude",
			"fux",
			"hate",
			"pussy"
		];
		let proxyList = [
			"shellshock.io",
			"algebra.best",
			"algebra.vip",
			"biologyclass.club",
			"combateggs.com",
			"deadlyegg.com",
			"deathegg.life",
			"deathegg.world",
			"eggbattle.com",
			"eggboy.club",
			"eggboy.me",
			"eggboy.xyz",
			"eggcombat.com",
			"egg.dance",
			"eggfacts.fun",
			"egghead.institute",
			"eggisthenewblack.com",
			"eggsarecool.com",
			"eggshock.com",
			"eggshooter.best",
			"eggshooter.com",
			"eggwarfare.com",
			"geometry.best",
			"geometry.monster",
			"geometry.pw",
			"geometry.report",
			"hardboiled.life",
			"hardshell.life",
			"humanorganising.org",
			"mathactivity.club",
			"mathactivity.xyz",
			"mathdrills.info",
			"mathdrills.life",
			"mathfun.rocks",
			"mathgames.world",
			"math.international",
			"mathlete.fun",
			"mathlete.pro",
			"overeasy.club",
			"risenegg.com",
			"scrambled.tech",
			"scrambled.today",
			"scrambled.us",
			"scrambled.world",
			"shellshockers.best",
			"shellshockers.club",
			"shellshockers.life",
			"shellshockers.site",
			"shellshockers.today",
			"shellshockers.us",
			"shellshockers.wiki",
			"shellshockers.world",
			"shellshockers.xyz",
			"shellsocks.com",
			"softboiled.club",
			"urbanegger.com",
			"violentegg.club",
			"violentegg.fun",
			"yolk.best",
			"yolk.life",
			"yolk.rocks",
			"yolk.tech",
			"yolk.quest",
			"yolk.today",
			"zygote.cafe"
		];
		proxyList = proxyList.filter((item) => item !== unsafeWindow.location.hostname);
		proxyList = [...proxyList].sort(() => Math.random() - .5);
		let proxyListIndex = 0;
		const monitorObjects = {};
		const titleAnimationFrames = [
			"︻デ═一",
			"︻デ═一",
			"デ═一　-",
			"═一　　　-",
			"一　　　　-",
			".　　　　　-",
			".　　　　-",
			".　　　-",
			".　　　　-　　0",
			".　　　　　-0",
			".　　　　\\/",
			".　　　_-_",
			".　___",
			"__",
			".",
			"STATEFARMCLIEN",
			"TATEFARMCLIENT",
			"ATEFARMCLIENTV",
			"TEFARMCLIENTV3",
			"EFARMCLIENTV3 ",
			"FARMCLIENTV3 S",
			"ARMCLIENTV3 ST",
			"RMCLIENTV3 STA",
			"MCLIENTV3 STAT",
			"CLIENTV3 STATE",
			"LIENTV3 STATEF",
			"IENTV3 STATEFA",
			"ENTV3 STATEFAR",
			"NTV3 STATEFARM",
			"TV3 STATEFARMC",
			"V3 STATEFARMCL",
			"3 STATEFARMCLI",
			"STATEFARMCLIEN",
			"TATEFARMCLIENT",
			"STATEFARM",
			"CLIENT V3",
			"STATEFARM",
			"CLIENT V3",
			"STATEFARM",
			"CLIENT V3",
			"STATEFARM",
			"CLIENT V3",
			":)",
			";)",
			":)",
			"⠝⠓⠗⠅ ஃ ⠟⠑⠙⠟",
			"⠑⠑⠟⠟ ஃ ⠙⠛⠟⠕",
			"⠛⠟⠍⠑ ஃ ⠅⠑⠍⠃",
			"⠅⠟⠇⠝ ஃ ⠟⠕⠗⠕",
			"⠝⠓⠗⠅ ஃ ⠟⠑⠙⠟",
			"⠑⠑⠟⠟ ஃ ⠙⠛⠟⠕",
			"⠛⠟⠍⠑ ஃ ⠅⠑⠍⠃",
			"⠅⠟⠇⠝ ஃ ⠟⠕⠗⠕",
			"( ͡° ͜ʖ ͡°)",
			"( ͠° ͟ʖ ͡°)",
			"( ͡° ͟ʖ ͡°)",
			"( ͡° ͟ʖ ͠°)一",
			"( ͡° ͟ʖ ͠°)═一",
			"( ͡° ͟ʖ ͠°)デ═一",
			"( ͡° ͟ʖ ͠°)︻デ═一",
			" ͡° ͟ʖ ͠°)︻デ═一",
			" ͟ʖ ͠°)︻デ═一",
			" ͠°)︻デ═一",
			")︻デ═一"
		];
		const getScrambled = () => Array.from({ length: 10 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join("");
		let skyboxName = getScrambled();
		const verification = {
			enabled: true,
			verified: true,
			currentlyTrial: false,
			discordInvite: discordURL,
			trialPeriod: 5,
			trialMessage: "Hello! StateFarm Client requires you to verify in the\nDiscord server to use the full version. You have a trial\nperiod of {0} minutes before you will need to verify.\nIt's all free, so don't worry. No subscriptions!",
			trialMessage2: "You have {0} minute(s) left of your SFC trial period.",
			trialOverMessage: "The trial period has ended. Please verify to continue to use StateFarm Client.",
			mustJoinMessage: "You must verify in the Discord server to continue to use\nthis script.\n\nPlease click the verify button below.",
			verificationMessage: "You have been verified! Enjoy the full version of StateFarm Client.",
			timeUsedStorageKey: "StateFarmVerification_TimeUsed",
			verifiedStorageKey: "StateFarmVerification_Verified",
			getTimeUsed: function() {
				if (!verification.timeUsed) verification.timeUsed = GM_getValue(verification.timeUsedStorageKey, 0);
				return verification.timeUsed;
			},
			timeUsed: 0,
			checkVerification: function() {
				const isVerifiedStorage = GM_getValue(verification.verifiedStorageKey, false);
				verification.currentlyTrial = verification.getTimeUsed() < verification.trialPeriod && !isVerifiedStorage;
				verification.verified = !verification.enabled || verification.currentlyTrial || isVerifiedStorage;
				return verification.verified;
			},
			started: false,
			beginVerificationCheck: function() {
				if (verification.started) return;
				verification.started = true;
				if (verification.checkVerification()) {
					if (verification.currentlyTrial) {
						createPrompt(verification.trialMessage2.format(verification.trialPeriod - verification.timeUsed), [], 15e3);
						verification.interval = setInterval(function() {
							verification.timeUsed++;
							GM_setValue(verification.timeUsedStorageKey, verification.timeUsed);
							log("Time used:", verification.timeUsed);
							if (!verification.checkVerification()) {
								change("leaveGame");
								clearInterval(verification.interval);
								createPrompt(verification.trialOverMessage, [], 15e3);
								verification.setDisableClient();
							}
						}, 6e4);
					}
				} else verification.openVerificationPopup();
			},
			setDisableClient: function() {
				initMenu();
				verification.openVerificationPopup();
			},
			popupShown: false,
			openVerificationPopup: function() {
				if (verification.popupShown) return;
				verification.popupShown = true;
				createVarDataOverlay();
				tp.mainPanel.hidden = true;
				unsafeWindow.BAWK.play("ks_double_eggs_end");
				let verificationPopup = createStatefarmElement("div");
				verificationPopup.style.position = "fixed";
				verificationPopup.style.left = "50%";
				verificationPopup.style.top = "50%";
				verificationPopup.style.width = "40em";
				verificationPopup.style.transform = "translate(-50%, -50%)";
				verificationPopup.style.color = "#fff";
				verificationPopup.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
				verificationPopup.style.padding = "15px";
				verificationPopup.style.borderRadius = "5px";
				verificationPopup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
				verificationPopup.style.border = "2px solid rgba(255, 255, 255, 0.5)";
				verificationPopup.style.pointerEvents = "auto";
				verificationPopup.style.opacity = "0";
				verificationPopup.style.transition = "opacity 0.4s ease-in-out";
				verificationPopup.style.fontFamily = "Bahnschrift, sans-serif";
				verificationPopup.style.fontSize = "16px";
				verificationPopup.style.zIndex = "9999";
				verificationPopup.style.whiteSpace = "pre-wrap";
				const title = "Please verify in the StateFarm Discord server";
				const message = `You only need to do this once, and it's free.<br>
    <strong>Why am I seeing this?</strong>
    Due to some recent issues, we have implemented this system to ensure our users are using the genuine StateFarm script.<br>
    <strong>How do I verify?</strong>
    Verifying is easy.
    You can verify by using the command "sf.verify" in the StateFarm Discord bot channel.
    <a href="${discordURL}" target="_blank" style="color: #1944ff; text-decoration: underline; font-size: inherit;">Join the ${discordName} Discord server</a> to get your verification code!`;
				verificationPopup.innerHTML = `${`<img src='${eggShowURL}' style='width: 20%; height: 20%; margin-right: 15px; vertical-align: middle;'>`}<strong>${title}</strong><br><br>${message}<br>
                               <label for="verificationInput">Enter Verification Code:</label>
                               <div style="display: flex; align-items: center;">
                                   <input type="text" id="verificationInput" style="flex: 1; padding: 5px; width: 250px; border: 1px solid rgba(255, 255, 255, 0.5); background-color: rgba(255, 255, 255, 0.1); color: #fff; border-radius: 5px; margin-right: 10px;">
                                   <button id="submitVerificationCode" style="padding: 5px 15px; background-color: rgba(255, 255, 255, 0.1); color: #fff; border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 5px; cursor: pointer; transition: background-color 0.2s;">GO</button>
                               </div>`;
				document.body.appendChild(verificationPopup);
				const input = document.getElementById("verificationInput");
				const submitButton = document.getElementById("submitVerificationCode");
				submitButton.addEventListener("click", () => {
					const inputValue = input.value;
					const error = function() {
						createPopup("Inputted verification code isn't valid.", "error");
					};
					try {
						if (verification.checkCodeValidity(inputValue)) {
							verification.setVerified();
							createPopup(verification.verificationMessage, "success");
							unsafeWindow.BAWK.play("shellstreak_start");
							setTimeout(reloadPage, 1500);
						} else error();
					} catch (e) {
						error();
					}
				});
				input.addEventListener("keypress", (event) => {
					if (event.key === "Enter") submitButton.click();
				});
				setTimeout(() => {
					verificationPopup.style.opacity = "1";
				}, 10);
			},
			codeExpirationTime: 1800,
			checkCodeValidity: function(code) {
				function fromBase62(str) {
					const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
					let num = 0;
					for (let i = 0; i < str.length; i++) num = num * 62 + chars.indexOf(str[i]);
					return num;
				}
				let codeNum = fromBase62(code) % 1e11 * 1e3;
				return Date.now() - codeNum <= verification.codeExpirationTime * 1e3;
			},
			setVerified: function() {
				GM_setValue(verification.verifiedStorageKey, true);
			}
		};
		const extract = function(variable, shouldUpdate) {
			try {
				if (shouldUpdate) updateConfig();
				return configMain[variable] || configBots[variable];
			} catch (error) {
				return;
			}
		};
		const extractDropdownList = function(variable) {
			return tp[variable + "Button"].controller_.binding.value.constraint_.constraints[0].options;
		};
		const extractAsDropdownInt = function(variable) {
			const options = extractDropdownList(variable);
			const state = extract(variable);
			for (let i = 0; i < options.length; i++) if (options[i].value === state) return i;
		};
		const beginBinding = function(value) {
			if (binding == false) {
				binding = value;
				tp[binding + "BindButton"].title = "PRESS KEY";
			}
		};
		const change = function(module, newValue) {
			const labels = document.querySelectorAll(".tp-lblv_l");
			const moduleLabel = tp[module + "Button"].label;
			for (const label of labels) if (label.textContent == moduleLabel) {
				const inputContainer = label.nextElementSibling;
				const currentValue = extract(module);
				const checkbox = inputContainer.querySelector(".tp-ckbv_i");
				if (checkbox) {
					if (newValue == void 0) newValue = !currentValue;
					if (newValue !== !!currentValue) checkbox.click();
					log(module, "checkbox", currentValue, newValue);
					return extract(module, true);
				}
				const button = inputContainer.querySelector(".tp-btnv_b");
				if (button) {
					button.click();
					log(module, "button", currentValue, newValue);
					return "NOMSG";
				}
				const dropdown = inputContainer.querySelector(".tp-lstv_s");
				if (dropdown) {
					if (newValue == void 0) newValue = (dropdown.selectedIndex + 1) % dropdown.options.length;
					dropdown.selectedIndex = newValue;
					dropdown.dispatchEvent(new Event("change"));
					log(module, "dropdown", currentValue, newValue);
					return extract(module, true);
				}
				const textInput = inputContainer.querySelector(".tp-txtv_i");
				if (textInput) {
					textInput.value = newValue;
					textInput.dispatchEvent(new Event("change"));
					return extract(module, true);
				}
			}
		};
		document.addEventListener("mousedown", function(event) {
			if (event.button === 2) isRightButtonDown = true;
			else if (event.button === 0) {}
		}, true);
		document.addEventListener("mouseup", function(event) {
			if (event.button === 2) isRightButtonDown = false;
			else if (event.button === 0) {}
		}, true);
		document.addEventListener("keydown", function(event) {
			event = event.code.originalReplace("Key", "");
			isKeyToggled[event] = true;
			if (event == "Escape") {
				noPointerPause = false;
				unsafeWindow.document.onpointerlockchange();
			}
		});
		document.addEventListener("keyup", function(event) {
			event = event.code.originalReplace("Key", "");
			isKeyToggled[event] = false;
			if (document.activeElement && document.activeElement.tagName === "INPUT") return;
			else if (binding != false) {
				if (event == "Delete") event = "Set Bind";
				tp[binding + "BindButton"].title = event;
				bindsArray[binding] = event;
				save(binding + "Bind", event);
				createPopup("Bound " + tp[binding + "Button"].label + " to key: " + event);
				binding = false;
			} else Object.keys(bindsArray).forEach(function(module) {
				if (bindsArray[module] == event && module != "zoom") {
					let state = change(module);
					let popupText = state;
					if (state != "NOMSG") {
						if (state === true || state === false || state === void 0) state = state ? "ON" : "OFF";
						popupText = "Set " + module + " to: " + state;
						if (extract("announcer")) sendChatMessage("I just set " + module + " to " + state + "!");
					} else switch (module) {
						case "hide":
							popupText = "Toggled StateFarm Panel";
							break;
						case "showBotPanel":
							popupText = "Toggled Bot Panel";
							break;
						case "sfChatShowHide":
							popupText = "Toggled SFC Chat";
							break;
						case "panic":
							popupText = "Exiting to set URL...";
							break;
						default:
							popupText = module;
							break;
					}
					createPopup(popupText);
				}
			});
		});
		const initTabs = function(tab, guideData) {
			tp[tab.storeAs] = tab.location.addTab({ pages: [
				{ title: "Modules" },
				{ title: "Binds" },
				{ title: "Guide" }
			] });
			if (guideData) {
				const thePages = [];
				guideData.forEach((aPage) => {
					thePages.push({ title: aPage.title });
				});
				tp[tab.storeAs + "Guide"] = tp[tab.storeAs].pages[2].addTab({ pages: thePages });
				for (let i = 0; i < guideData.length; i++) {
					const storeAs = tab.storeAs + "Guide" + i;
					const text = guideData[i].content || "Not set up correctly lmao";
					initModule({
						location: tp[tab.storeAs + "Guide"].pages[i],
						storeAs,
						monitor: text.split("\n").length + .25
					});
					monitorObjects[storeAs] = text;
					const infoElement = tp[storeAs + "Button"].controller_.view.element.children[1].children[0];
					infoElement.style.width = "270px";
					infoElement.style.setProperty("margin-left", "-110px", "important");
				}
			}
		};
		const initFolder = function(folder) {
			tp[folder.storeAs] = folder.location.addFolder({
				title: folder.title,
				expanded: load(folder.storeAs) !== null ? load(folder.storeAs) : false
			});
			allFolders.push(folder.storeAs);
		};
		const initModule = function(module) {
			if (module.requirements) {}
			const value = {};
			value[module.storeAs] = module.defaultValue !== void 0 ? module.defaultValue : false;
			if (module.tooltip) tooltips[module.title] = module.tooltip;
			tp[module.storeAs + "TiedModules"] = {
				showConditions: module.showConditions || false,
				hideConditions: module.hideConditions || false,
				enableConditions: module.enableConditions || false,
				disableConditions: module.disableConditions || false
			};
			if (!(module.slider && module.slider.step)) module.slider = {};
			const config = {
				label: module.title,
				options: module.dropdown,
				min: module.slider.min,
				max: module.slider.max,
				step: module.slider.step,
				title: module.button
			};
			const tpStoreAs = module.storeAs + "Button";
			if (module.button) tp[tpStoreAs] = module.location.addButton({
				label: module.title,
				title: module.button
			}).on("click", (value) => {
				try {
					if (module.clickFunction !== void 0) module.clickFunction(value);
				} catch (error) {
					log("OooOoOoops, error in click function", module.storeAs, error);
				}
				if (module.botParam !== void 0) updateBotParams(module.botParam);
				log("click", module.storeAs, value);
				onOptionChanged(module.storeAs, value);
			});
			else if (module.monitor) {
				monitorObjects[module.storeAs] = "Text Goes Here";
				tp[tpStoreAs] = module.location.addMonitor(monitorObjects, module.storeAs, {
					label: "",
					expanded: true,
					multiline: true,
					lineCount: module.monitor
				});
			} else tp[tpStoreAs] = module.location.addInput(value, module.storeAs, config).on("change", (value) => {
				try {
					if (module.changeFunction !== void 0) module.changeFunction(value);
				} catch (error) {
					log("OooOoOoops, error in change function", module.storeAs, error);
				}
				setTimeout(() => {
					if (startUpComplete) {
						if (module.botParam !== void 0) updateBotParams(module.botParam);
					}
					updateHiddenAndDisabled();
					saveConfig();
				}, 150);
				log("change", module.storeAs, value);
				onOptionChanged(module, value);
			});
			allModules.push(module.storeAs);
			if (module.bindLocation) initBind(module);
		};
		const initBind = function(module) {
			if (resetModules) remove(module.storeAs + "Bind");
			const theBind = load(module.storeAs + "Bind") || module.defaultBind || "Set Bind";
			tp[module.storeAs + "BindButton"] = module.bindLocation.addButton({
				label: module.title,
				title: theBind
			}).on("click", (value) => {
				beginBinding(module.storeAs);
			});
			bindsArray[module.storeAs] = theBind;
		};
		const initMenu = function(reset) {
			resetModules = reset === true;
			menuInitiated = false;
			const alreadyOpen = tp?.mainPanel !== void 0 && !tp.mainPanel.hidden;
			log("alreadyOpen", alreadyOpen);
			if (tp.mainPanel) tp.mainPanel.dispose();
			if (tp.botPanel) tp.botPanel.dispose();
			tp.mainPanel = new Tweakpane.Pane();
			tp.mainPanel.containerElem_.classList.add("tp-statefarm");
			tp.mainPanel.hidden = true;
			if (alreadyOpen) tp.mainPanel.hidden = false;
			verification.checkVerification();
			allowAccess = true;
			if (verification.currentlyTrial || !verification.verified) {
				initModule({
					location: tp.mainPanel,
					title: "Verification",
					storeAs: "verificationText",
					monitor: 5
				});
				if (verification.currentlyTrial) monitorObjects["verificationText"] = verification.trialMessage.format(verification.trialPeriod);
				else {
					monitorObjects["verificationText"] = verification.mustJoinMessage;
					allowAccess = false;
				}
				initModule({
					location: tp.mainPanel,
					title: "Verify",
					storeAs: "verificationButton",
					tooltip: "Go to the Discord to verify",
					button: "Go",
					clickFunction: verification.openVerificationPopup
				});
				tp.mainPanel.addSeparator();
				tp.mainPanel.title = menuTitle + " (✘)";
			} else tp.mainPanel.title = menuTitle + " (✔)";
			initFolder({
				location: tp.mainPanel,
				title: "StateFarm Chat",
				storeAs: "sfChatFolder"
			});
			initTabs({
				location: tp.sfChatFolder,
				storeAs: "sfChatTab"
			}, [{
				title: "WIP",
				content: `Sorry! No guide yet!`
			}]);
			initModule({
				location: tp.sfChatTab.pages[0],
				title: "Username",
				storeAs: "sfChatUsername",
				tooltip: "Your username in the chatroom",
				defaultValue: "Guest" + (Math.floor(Math.random() * 8999) + 1e3)
			});
			tp.sfChatTab.pages[0].addSeparator();
			initModule({
				location: tp.sfChatTab.pages[0],
				title: "Show/Hide",
				storeAs: "sfChatShowHide",
				tooltip: "Toggle chat panel visibility",
				button: "Show/Hide",
				bindLocation: tp.sfChatTab.pages[1],
				defaultBind: "K",
				clickFunction: function() {
					if (sfChatContainer != void 0) if (sfChatContainer.style.display == "none") sfChatContainer.style.display = "block";
					else sfChatContainer.style.display = "none";
					else startStateFarmChat();
				}
			});
			tp.sfChatTab.pages[0].addSeparator();
			initModule({
				location: tp.sfChatTab.pages[0],
				title: "Notifications",
				storeAs: "sfChatNotifications",
				tooltip: "Shows an in-game notification for every new chat message",
				bindLocation: tp.sfChatTab.pages[1]
			});
			initModule({
				location: tp.sfChatTab.pages[0],
				title: "Notification Sound",
				storeAs: "sfChatNotificationSound",
				tooltip: "Play a sound for every new message",
				bindLocation: tp.sfChatTab.pages[1]
			});
			tp.sfChatTab.pages[0].addSeparator();
			initModule({
				location: tp.sfChatTab.pages[0],
				title: "Auto Start Chat",
				storeAs: "sfChatAutoStart",
				tooltip: "Automatically connects to the chatroom on startup",
				bindLocation: tp.sfChatTab.pages[1]
			});
			tp.sfChatTab.pages[0].addSeparator();
			initModule({
				location: tp.sfChatTab.pages[0],
				title: "Prompt Invitations",
				storeAs: "sfChatInvitations",
				tooltip: "Show invite prompts when someone sends a game code in the chatroom",
				bindLocation: tp.sfChatTab.pages[1],
				defaultValue: true
			});
			if (allowAccess) {
				initFolder({
					location: tp.mainPanel,
					title: "Combat",
					storeAs: "combatFolder"
				});
				initTabs({
					location: tp.combatFolder,
					storeAs: "combatTab"
				}, [
					{
						title: "Basics",
						content: `This is the combat tab. Here you will find
options relating to aimbotting, and other
useful macros. Aimbot is made active by
turning it on. Using ToggleRM will give you
more control by allowing you to switch by
pressing the right mouse button.
TargetMode also allows a more intuitive
means of selecting who you will target.
The most powerful features you can use
are Predictions and Antibloom. These
improve the accuracy of the tracking.
AntiSwitch will make you lock on to a
target until they die, and if you don't want
to target anyone else after they die then
choose 1Kill too. Auto Refill helps you
stay topped up and choosing the Smart
mode allows you to refill at the moment
when you will not have a long
reload time. GrenadeMAX makes all
grenades get thrown at max strength.`
					},
					{
						title: "Visibility",
						content: `There are a couple of options related to
visibility (Line-of-Sight). First is
TargetVisible. This tunes the aimbot to
be more strategic with where it aims.
NoWallTrack makes it such that if a
targeted player goes behind a wall, you
stop aimlocking them. There is also an
AutoFire mode with this sort of
functionality.`
					},
					{
						title: "Advanced",
						content: `If you want to increase stealthiness,
make use of MinAngle and AntiSnap. The
first will make it so that you have to
manually move your reticle within your
specified radius to lock on. The latter
smooths snapping, which evades
detection on botter spotter scripts.
If you want to be more powerful, opt for
SilentAim. This modifies your direction
packets instead of making you lock on.
However, this can lead to slightly glitchy
movement. When this is on, MinAngle
changes to instead narrow down the
selection of targets rather than acting
as a guide.
AntiSneak is a module which, while not
always showing use, can help you in a
difficult situation. It automatically
switches targets to a player that enters
your specified range, and begins
shooting with your primary gun, and then
the pistol. Ideal use case is when you are
sniping and someone sneaks up on you
(...hence it is called... AntiSneak).`
					}
				]);
				initModule({
					location: tp.combatTab.pages[0],
					title: "Aimbot",
					storeAs: "aimbot",
					tooltip: "Locks onto targeted player",
					bindLocation: tp.combatTab.pages[1],
					defaultBind: "V"
				});
				initFolder({
					location: tp.combatTab.pages[0],
					title: "Aimbot Options",
					storeAs: "aimbotFolder"
				});
				initModule({
					location: tp.aimbotFolder,
					title: "TargetMode",
					storeAs: "aimbotTargetMode",
					tooltip: "Decides the priority for which player aimbot should target",
					bindLocation: tp.combatTab.pages[1],
					defaultBind: "T",
					dropdown: [
						{
							text: "Pointing At",
							value: "pointingat"
						},
						{
							text: "Nearest",
							value: "nearest"
						},
						{
							text: "Lowest HP",
							value: "lowestHp"
						},
						{
							text: "Most Kills",
							value: "mostKills"
						},
						{
							text: "Aiming At Me",
							value: "aimingAt"
						}
					],
					defaultValue: "pointingat",
					enableConditions: [["aimbot", true]]
				});
				initModule({
					location: tp.aimbotFolder,
					title: "TargetVisible",
					storeAs: "aimbotVisibilityMode",
					tooltip: "A filter, applied after TargetMode helping to pick the aimbot target",
					bindLocation: tp.combatTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "Prioritise Visible",
							value: "prioritise"
						},
						{
							text: "Only Visible",
							value: "onlyvisible"
						}
					],
					defaultValue: "disabled",
					enableConditions: [["aimbot", true]]
				});
				tp.aimbotFolder.addSeparator();
				initModule({
					location: tp.aimbotFolder,
					title: "ToggleRM",
					storeAs: "aimbotRightClick",
					tooltip: "Modifies aimbot to only lock when the right mouse is held",
					bindLocation: tp.combatTab.pages[1],
					enableConditions: [["aimbot", true]]
				});
				initModule({
					location: tp.aimbotFolder,
					title: "SilentAim",
					storeAs: "silentAimbot",
					tooltip: "Shoots without moving the camera. ONLY visual, VERY blatant cheating. Refer to the GitHub README for more information",
					bindLocation: tp.combatTab.pages[1],
					enableConditions: [["aimbot", true]]
				});
				initModule({
					location: tp.aimbotFolder,
					title: "SemiSilent",
					storeAs: "aimbSemiSilent",
					tooltip: "SilentAimbot behavior, but will move the camera after a shot has been fired",
					bindLocation: tp.combatTab.pages[1],
					enableConditions: [["aimbot", true], ["silentAimbot", true]]
				});
				initModule({
					location: tp.aimbotFolder,
					title: "NoWallTrack",
					storeAs: "noWallTrack",
					tooltip: "Aimbot ignores the player if they're behind obstacles",
					bindLocation: tp.combatTab.pages[1],
					enableConditions: [["aimbot", true], ["silentAimbot", false]]
				});
				tp.aimbotFolder.addSeparator();
				initModule({
					location: tp.aimbotFolder,
					title: "Prediction",
					storeAs: "prediction",
					tooltip: "Predicts where the player will be when the bullet hits them and ajusts aimbot accordingly",
					bindLocation: tp.combatTab.pages[1],
					enableConditions: [["aimbot", true]],
					defaultValue: true
				});
				initModule({
					location: tp.aimbotFolder,
					title: "AntiBloom",
					storeAs: "antiBloom",
					tooltip: "Locks onto the predicted bloom point. Good for shooting & moving",
					bindLocation: tp.combatTab.pages[1],
					enableConditions: [["aimbot", true]],
					defaultValue: true
				});
				tp.aimbotFolder.addSeparator();
				initModule({
					location: tp.aimbotFolder,
					title: "AntiSwitch",
					storeAs: "antiSwitch",
					tooltip: "Prevents the aimbot from changing the target until they die",
					bindLocation: tp.combatTab.pages[1],
					enableConditions: [["aimbot", true]]
				});
				initModule({
					location: tp.aimbotFolder,
					title: "1 Kill",
					storeAs: "oneKill",
					tooltip: "Disables aimbot when the targeted player dies",
					bindLocation: tp.combatTab.pages[1],
					enableConditions: [["aimbot", true]]
				});
				tp.aimbotFolder.addSeparator();
				initModule({
					location: tp.aimbotFolder,
					title: "MinAngle",
					storeAs: "aimbotMinAngle",
					tooltip: "Prevents you from snapping if the angle between you and the player is greater than this value (in degrees)",
					slider: {
						min: .05,
						max: 360,
						step: 1
					},
					defaultValue: 360,
					enableConditions: [["aimbot", true]]
				});
				initModule({
					location: tp.aimbotFolder,
					title: "AntiSneak",
					storeAs: "antiSneak",
					tooltip: "Recommended distance under 2. This automatically kills players in the given range",
					slider: {
						min: 0,
						max: 5,
						step: .2
					},
					defaultValue: 0,
					enableConditions: [["aimbot", true]]
				});
				tp.aimbotFolder.addSeparator();
				initModule({
					location: tp.aimbotFolder,
					title: "AntiSnap",
					storeAs: "aimbotAntiSnap",
					tooltip: "This makes snapping smooth at higher values. useful to avoid being spotted",
					slider: {
						min: 0,
						max: .99,
						step: .01
					},
					defaultValue: 0,
					enableConditions: [["aimbot", true], ["silentAimbot", false]]
				});
				initFolder({
					location: tp.aimbotFolder,
					title: "AntiSnap Options",
					storeAs: "antisnapFolder"
				});
				initModule({
					location: tp.antisnapFolder,
					title: "AntiSnap Regime",
					storeAs: "aimbotAntiSnapRegime",
					tooltip: "Changes the method of smoothing\n\nCredit to de_Neuublue for this code",
					bindLocation: tp.combatTab.pages[1],
					dropdown: [
						{
							text: "Linear",
							value: "linear"
						},
						{
							text: "Slow End",
							value: "slowEnd"
						},
						{
							text: "Fast End",
							value: "fastEnd"
						},
						{
							text: "Time Based",
							value: "timeBased"
						}
					],
					defaultValue: "linear",
					enableConditions: [["aimbot", true], ["silentAimbot", false]]
				});
				initModule({
					location: tp.antisnapFolder,
					title: "Max Aim Time (ms)",
					storeAs: "maxAimTime",
					tooltip: "How long to aim for until you force the locking.",
					slider: {
						min: 10,
						max: 5e3,
						step: 1
					},
					defaultValue: 700,
					enableConditions: [["aimbot", true], ["silentAimbot", false]],
					showConditions: [["aimbotAntiSnapRegime", "timeBased"]]
				});
				tp.combatTab.pages[0].addSeparator();
				initModule({
					location: tp.combatTab.pages[0],
					title: "Auto Refill",
					storeAs: "autoRefill",
					tooltip: "This automatically reloads your gun if there is no more ammo",
					bindLocation: tp.combatTab.pages[1]
				});
				initModule({
					location: tp.combatTab.pages[0],
					title: "Smart Refill",
					storeAs: "smartRefill",
					tooltip: "This makes your weapon refill at the best moment, which reduces reload time",
					bindLocation: tp.combatTab.pages[1],
					showConditions: [["autoRefill", true]]
				});
				tp.combatTab.pages[0].addSeparator();
				initModule({
					location: tp.combatTab.pages[0],
					title: "Auto Fire",
					storeAs: "enableAutomatic",
					tooltip: "Makes every gun act like an automatic one",
					bindLocation: tp.combatTab.pages[1]
				});
				initModule({
					location: tp.combatTab.pages[0],
					title: "Triggerbot",
					storeAs: "enableAutoFire",
					tooltip: "Automatically shoot the gun",
					bindLocation: tp.combatTab.pages[1]
				});
				initModule({
					location: tp.combatTab.pages[0],
					title: "TriggerType",
					storeAs: "autoFireType",
					tooltip: "Picks how to shoot the gun",
					bindLocation: tp.combatTab.pages[1],
					dropdown: [
						{
							text: "Force Automatic",
							value: "forceAutomatic"
						},
						{
							text: "While Visible",
							value: "whileVisible"
						},
						{
							text: "While Aimbotting",
							value: "whileAimbot"
						},
						{
							text: "Visible and Aimbotting",
							value: "whileVisAimbot"
						},
						{
							text: "Always",
							value: "always"
						}
					],
					defaultValue: "leftMouse",
					enableConditions: [["enableAutoFire", true]]
				});
				initModule({
					location: tp.combatTab.pages[0],
					title: "MinAccuracy%",
					storeAs: "autoFireAccuracy",
					tooltip: "Minimum spread/accuracy before shooting. Helpful for sniper guns, bad for automatics. Leave at 0 for default.",
					slider: {
						min: 0,
						max: 1,
						step: .05
					},
					defaultValue: 0,
					enableConditions: [["enableAutoFire", true]]
				});
				tp.combatTab.pages[0].addSeparator();
				initModule({
					location: tp.combatTab.pages[0],
					title: "GrenadeMAX",
					storeAs: "grenadeMax",
					tooltip: "Sets grenades to be thrown to max power immediately without the need of charging",
					bindLocation: tp.combatTab.pages[1]
				});
				initModule({
					location: tp.combatTab.pages[0],
					title: "Nade Power",
					storeAs: "grenadePower",
					tooltip: "porcupane hijinks ensue — Today at 6:33 PM• goo/ber grenade power override for how long you hold ot",
					slider: {
						min: 0,
						max: 1,
						step: .05
					},
					defaultValue: 1
				});
				initFolder({
					location: tp.mainPanel,
					title: "Render",
					storeAs: "renderFolder"
				});
				initTabs({
					location: tp.renderFolder,
					storeAs: "renderTab"
				}, [{
					title: "WIP",
					content: `Sorry! No guide yet!`
				}]);
				initModule({
					location: tp.renderTab.pages[0],
					title: "PlayerESP",
					storeAs: "playerESP",
					tooltip: "Creates boxes around enemy players",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Tracers",
					storeAs: "tracers",
					tooltip: "Creates lines pointing from the center of the screen to the location of enemy players",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Chams",
					storeAs: "chams",
					tooltip: "Renders players through walls",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Trajectories",
					storeAs: "trajectories",
					tooltip: "Shows the path your grenade will take when thrown",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "PredictionESP",
					storeAs: "predictionESP",
					tooltip: "Creates an ESP box at the predicted position of the player",
					bindLocation: tp.renderTab.pages[1]
				});
				tp.renderTab.pages[0].addSeparator();
				initModule({
					location: tp.renderTab.pages[0],
					title: "NametagESP",
					storeAs: "nametags",
					tooltip: "Enlarges nametags and makes them appear through walls",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "NametagInfo",
					storeAs: "nametagInfo",
					tooltip: "Adds extra info to nametags such as HP and score stats (Warning: Lags)",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Info Update Interval",
					storeAs: "nametagInfoInterval",
					tooltip: "If the info updater lags you, increase this value to make it update less often.",
					slider: {
						min: 1,
						max: 180,
						step: 1
					},
					defaultValue: 180,
					showConditions: [["nametagInfo", true]]
				});
				tp.renderTab.pages[0].addSeparator();
				initFolder({
					location: tp.renderTab.pages[0],
					title: "Player ESP/Tracers Options",
					storeAs: "tracersFolder"
				});
				initModule({
					location: tp.tracersFolder,
					title: "TargetedColor",
					storeAs: "aimbotColor",
					tooltip: "The color used to highlight the ESP line of a targeted player. Useless if PlayerESP is disabled",
					defaultValue: "#0000ff",
					showConditions: [["aimbotRainbow", false]]
				});
				initModule({
					location: tp.tracersFolder,
					title: "Targeted RGB",
					storeAs: "aimbotRainbow",
					tooltip: "Adds RGB to the ESP, for fun",
					defaultValue: true,
					bindLocation: tp.renderTab.pages[1]
				});
				tp.aimbotFolder.addSeparator();
				initModule({
					location: tp.tracersFolder,
					title: "Type",
					storeAs: "tracersType",
					tooltip: "The mode for how ESP/Tracers are coloured. Different colour options present themselves based on option.\n\nStatic: Just stays as one colour.\nProximity: Fades between three colours based on how close someone is.\nVisibility: Switches between two colours if there is Line of Sight.",
					bindLocation: tp.renderTab.pages[1],
					dropdown: [
						{
							text: "Static",
							value: "static"
						},
						{
							text: "Proximity",
							value: "proximity"
						},
						{
							text: "Visibility",
							value: "visibility"
						}
					],
					defaultValue: "static",
					disableConditions: [["tracers", false], ["playerESP", false]]
				});
				initModule({
					location: tp.tracersFolder,
					title: "RGB Color 1",
					storeAs: "tracersColor1Rainbow",
					tooltip: "rainbow. 🌈",
					defaultValue: false,
					disableConditions: [["tracers", false], ["playerESP", false]]
				});
				initModule({
					location: tp.tracersFolder,
					title: "Color 1",
					storeAs: "tracersColor1",
					tooltip: "Static: Just stays this colour.\nProximity: Very close colour\nVisibility: Not visible.",
					defaultValue: "#ff0000",
					disableConditions: [["tracers", false], ["playerESP", false]],
					showConditions: [["tracersColor1Rainbow", false]]
				});
				initModule({
					location: tp.tracersFolder,
					title: "Color 2",
					storeAs: "tracersColor2",
					tooltip: "Static: (Unused)\nProximity: Moderately close colour\nVisibility: Visible.",
					defaultValue: "#00ff00",
					disableConditions: [["tracers", false], ["playerESP", false]],
					hideConditions: [["tracersType", "static"]]
				});
				initModule({
					location: tp.tracersFolder,
					title: "Color 3",
					storeAs: "tracersColor3",
					tooltip: "Static: (Unused)\nProximity: Furthest colour\nVisibility: (Unused)",
					defaultValue: "#ffffff",
					disableConditions: [["tracers", false], ["playerESP", false]],
					showConditions: [["tracersType", "proximity"]]
				});
				initModule({
					location: tp.tracersFolder,
					title: "Dist 1->2",
					storeAs: "tracersColor1to2",
					tooltip: "Proximity: Distance from which it fades from 1 to 2. Should be the smaller range.",
					slider: {
						min: 0,
						max: 30,
						step: .25
					},
					defaultValue: 5,
					showConditions: [["tracersType", "proximity"]],
					disableConditions: [["tracers", false], ["playerESP", false]]
				});
				initModule({
					location: tp.tracersFolder,
					title: "Dist 2->3",
					storeAs: "tracersColor2to3",
					tooltip: "Proximity: Distance from which it fades from 2 to 3. Should be the larger range.",
					slider: {
						min: 0,
						max: 30,
						step: .25
					},
					defaultValue: 15,
					showConditions: [["tracersType", "proximity"]],
					disableConditions: [["tracers", false], ["playerESP", false]]
				});
				tp.tracersFolder.addSeparator();
				initModule({
					location: tp.tracersFolder,
					title: "PredictionESPColor",
					storeAs: "predictionESPColor",
					tooltip: "Colour to use for the PredictionESP box",
					defaultValue: "#ff0000",
					disableConditions: [["predictionESP", false]]
				});
				initModule({
					location: tp.tracersFolder,
					title: "PredictionESPColorRainbow",
					storeAs: "predictionESPColorRainbow",
					tooltip: "Color to use for the PredictionESP box rainbow?",
					defaultValue: false,
					disableConditions: [["predictionESP", false]]
				});
				tp.renderTab.pages[0].addSeparator();
				initFolder({
					location: tp.renderTab.pages[0],
					title: "Ammo ESP/Tracers Options",
					storeAs: "tracersAmmoFolder"
				});
				initFolder({
					location: tp.tracersAmmoFolder,
					title: "Ammo",
					storeAs: "ammoFolder"
				});
				initModule({
					location: tp.ammoFolder,
					title: "AESP",
					storeAs: "ammoESP",
					tooltip: "Displays where ammo is on the map",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.ammoFolder,
					title: "ATracers",
					storeAs: "ammoTracers",
					tooltip: "No tooltip available",
					bindLocation: tp.renderTab.pages[1]
				});
				tp.ammoFolder.addSeparator();
				initModule({
					location: tp.ammoFolder,
					title: "ARegime",
					storeAs: "ammoESPRegime",
					tooltip: "No tooltip available",
					bindLocation: tp.renderTab.pages[1],
					dropdown: [
						{
							text: "When Depleted",
							value: "whendepleted"
						},
						{
							text: "When Low",
							value: "whenlow"
						},
						{
							text: "Below Max",
							value: "belowmax"
						},
						{
							text: "Always On",
							value: "alwayson"
						}
					],
					defaultValue: "whendepleted",
					disableConditions: [["ammoESP", false], ["ammoTracers", false]]
				});
				initModule({
					location: tp.ammoFolder,
					title: "AColor",
					storeAs: "ammoESPColor",
					tooltip: "No tooltip available",
					defaultValue: "#ffff00",
					disableConditions: [["ammoESP", false], ["ammoTracers", false]]
				});
				initFolder({
					location: tp.tracersAmmoFolder,
					title: "Grenades",
					storeAs: "grenadesFolder"
				});
				initModule({
					location: tp.grenadesFolder,
					title: "GESP",
					storeAs: "grenadeESP",
					tooltip: "Displays where grenade pickupables is on the map",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.grenadesFolder,
					title: "GTracers",
					storeAs: "grenadeTracers",
					tooltip: "No tooltip available",
					bindLocation: tp.renderTab.pages[1]
				});
				tp.grenadesFolder.addSeparator();
				initModule({
					location: tp.grenadesFolder,
					title: "GRegime",
					storeAs: "grenadeESPRegime",
					tooltip: "No tooltip available",
					bindLocation: tp.renderTab.pages[1],
					dropdown: [
						{
							text: "When Depleted",
							value: "whendepleted"
						},
						{
							text: "When Low",
							value: "whenlow"
						},
						{
							text: "Below Max",
							value: "belowmax"
						},
						{
							text: "Always On",
							value: "alwayson"
						}
					],
					defaultValue: "whendepleted",
					disableConditions: [["grenadeESP", false], ["grenadeTracers", false]]
				});
				initModule({
					location: tp.grenadesFolder,
					title: "GColor",
					storeAs: "grenadeESPColor",
					tooltip: "No tooltip available",
					defaultValue: "#00ffff",
					disableConditions: [["grenadeESP", false], ["grenadeTracers", false]]
				});
				tp.renderTab.pages[0].addSeparator();
				initModule({
					location: tp.renderTab.pages[0],
					title: "Show Look Dir",
					storeAs: "lookTracers",
					tooltip: "Renders the looking direction of each player as a line",
					bindLocation: tp.renderTab.pages[1]
				});
				initFolder({
					location: tp.renderTab.pages[0],
					title: "Look Direction Options",
					storeAs: "lookTracersFolder"
				});
				initModule({
					location: tp.lookTracersFolder,
					title: "Render Above",
					storeAs: "lookTracersRGI1",
					tooltip: "Renders LookTracers above obstacles",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.lookTracersFolder,
					title: "LookTracerColor",
					storeAs: "lookTracersColor",
					tooltip: "Color of the LookTracers",
					defaultValue: "#00ffff"
				});
				tp.renderTab.pages[0].addSeparator();
				initModule({
					location: tp.renderTab.pages[0],
					title: "FOV",
					storeAs: "fov",
					tooltip: "Controls the FOV of the game",
					slider: {
						min: 0,
						max: 360,
						step: 3
					},
					defaultValue: 72
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Zoom FOV",
					storeAs: "zoom",
					tooltip: "Controls how zoomed in/out you are. Default keybind is C to zoom",
					slider: {
						min: 0,
						max: 72,
						step: 1
					},
					defaultValue: 15,
					bindLocation: tp.renderTab.pages[1],
					defaultBind: "C"
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "No Mini Egg",
					storeAs: "noMiniEgg",
					tooltip: "Makes the screen not squished when under the Mini Egg effect.",
					bindLocation: tp.renderTab.pages[1]
				});
				tp.renderTab.pages[0].addSeparator();
				initModule({
					location: tp.renderTab.pages[0],
					title: "Perspective",
					storeAs: "perspective",
					tooltip: "Allows you to switch between third and first person. Think Minecraft F5!",
					bindLocation: tp.renderTab.pages[1],
					dropdown: [
						{
							text: "1st Person (Default)",
							value: "firstPerson"
						},
						{
							text: "3rd Person",
							value: "thirdPerson"
						},
						{
							text: "3rd Person (Alt)",
							value: "thirdPersonAlt"
						}
					],
					defaultValue: "disabled",
					defaultBind: "Digit5"
				});
				initFolder({
					location: tp.renderTab.pages[0],
					title: "Perspective Options",
					storeAs: "perspectiveFolder"
				});
				initModule({
					location: tp.perspectiveFolder,
					title: "Y Offset",
					storeAs: "perspectiveY",
					tooltip: "Offset of the camera in y-direction (how far behind should it be?)",
					slider: {
						min: 0,
						max: 30,
						step: .25
					},
					defaultValue: .5
				});
				initModule({
					location: tp.perspectiveFolder,
					title: "Z Offset",
					storeAs: "perspectiveZ",
					tooltip: "Offset of the camera in z-direction (how far above should it be?)",
					slider: {
						min: 0,
						max: 30,
						step: .25
					},
					defaultValue: 2
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "CamWIP",
					storeAs: "freecam",
					tooltip: "Forever a WIP!!!",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Wireframe",
					storeAs: "wireframe",
					tooltip: "Outlines map objects to allow you to see directly though walls. Will leave rendering artifacts on the skybox, making the game basically unplayable",
					bindLocation: tp.renderTab.pages[1]
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Particle Speed",
					storeAs: "particleSpeedMultiplier",
					tooltip: "Adjusts speed of particles :D",
					slider: {
						min: .05,
						max: 5,
						step: .05
					},
					defaultValue: 1
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Egg Size",
					storeAs: "eggSize",
					tooltip: "Changes how big eggs are. This does not affect hitboxes and is client-side only",
					slider: {
						min: 0,
						max: 10,
						step: .25
					},
					defaultValue: 1
				});
				tp.renderTab.pages[0].addSeparator();
				initModule({
					location: tp.renderTab.pages[0],
					title: "Set Detail",
					storeAs: "setDetail",
					tooltip: "Changes quality of game graphics",
					bindLocation: tp.renderTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "Auto Detail",
							value: "autodetail"
						},
						{
							text: "No Details",
							value: "nodetails"
						},
						{
							text: "Shadows",
							value: "shadows"
						},
						{
							text: "High Res",
							value: "highres"
						},
						{
							text: "Shadows+High Res",
							value: "shadowshighres"
						}
					],
					defaultValue: "disabled"
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Textures",
					storeAs: "enableTextures",
					tooltip: "Disables some textures. primarily, the sky",
					bindLocation: tp.renderTab.pages[1],
					defaultValue: true
				});
				initModule({
					location: tp.renderTab.pages[0],
					title: "Render Delay",
					storeAs: "renderDelay",
					tooltip: "Basically, this adds extra FPS buffer",
					slider: {
						min: 0,
						max: 3e4,
						step: 10
					},
					defaultValue: 0
				});
				initFolder({
					location: tp.mainPanel,
					title: "HUD",
					storeAs: "hudFolder"
				});
				initTabs({
					location: tp.hudFolder,
					storeAs: "hudTab"
				}, [{
					title: "WIP",
					content: `Sorry! No guide yet!`
				}]);
				initModule({
					location: tp.hudTab.pages[0],
					title: "Show Bloom",
					storeAs: "revealBloom",
					tooltip: "Displays the next shot's bloom as a red dot onscreen",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "Show LOS",
					storeAs: "showLOS",
					tooltip: "Changes the crosshair's color if the player is in an enemy's line of sight",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "Show MinAngle",
					storeAs: "showMinAngle",
					tooltip: "Draws a circle representing the aimbot's minAngle to the hud",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					showConditions: [["disabledlmao", true]],
					location: tp.hudTab.pages[0],
					title: "Leaderboard",
					storeAs: "highlightLeaderboard",
					tooltip: "Sie wurden enterbt",
					bindLocation: tp.hudTab.pages[1],
					enableConditions: [["aimbot", true]]
				});
				tp.hudTab.pages[0].addSeparator();
				initModule({
					location: tp.hudTab.pages[0],
					title: "Co-ords",
					storeAs: "showCoordinates",
					tooltip: "Displays current position on the map",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "RadarWIP",
					storeAs: "radar",
					tooltip: "Work-in-progress module. You should leave this off if you are not a dev",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "HP Display",
					storeAs: "playerStats",
					tooltip: "Displays the health of your opponents",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "PlayerInfo",
					storeAs: "playerInfo",
					tooltip: "Displays added information about the player you're targeting",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "GameInfo",
					storeAs: "gameInfo",
					tooltip: "Displays extra game information",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "Performance",
					storeAs: "performanceInfo",
					tooltip: "Shows performance information like memory usage",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "ShowStream",
					storeAs: "showStreams",
					tooltip: "Detects & displays ongoing twitch streamers",
					bindLocation: tp.hudTab.pages[1]
				});
				tp.hudTab.pages[0].addSeparator();
				initModule({
					location: tp.hudTab.pages[0],
					title: "MiniMap",
					storeAs: "minimap",
					tooltip: "Displays a top down view of your game",
					bindLocation: tp.hudTab.pages[1]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "MiniMap Zoom",
					storeAs: "minimapZoom",
					tooltip: "How much the minimap camera should zoom in",
					slider: {
						min: .1,
						max: 20,
						step: .1
					},
					defaultValue: 5,
					showConditions: [["minimap", true]]
				});
				initModule({
					location: tp.hudTab.pages[0],
					title: "MiniMap Size",
					storeAs: "minimapSize",
					tooltip: "How big the minimap should be on the screen",
					slider: {
						min: .1,
						max: 5,
						step: .1
					},
					defaultValue: 1,
					showConditions: [["minimap", true]]
				});
				initFolder({
					location: tp.mainPanel,
					title: "Chat",
					storeAs: "chatFolder"
				});
				initTabs({
					location: tp.chatFolder,
					storeAs: "chatTab"
				}, [{
					title: "WIP",
					content: `Sorry! No guide yet!`
				}]);
				initModule({
					location: tp.chatTab.pages[0],
					title: "InfiniHistory",
					storeAs: "chatExtend",
					tooltip: "Disables the default limiting of message history",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.chatTab.pages[0],
					title: "HighlightTxt",
					storeAs: "chatHighlight",
					tooltip: "Allows you to highlight text from the chat to copy somewhere else",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.chatTab.pages[0],
					title: "Max Ingame",
					storeAs: "maxChat",
					tooltip: "The number of messages to show ingame (if unset, infinite history will cause issues)",
					slider: {
						min: 0,
						max: 30,
						step: 1
					},
					defaultValue: 5
				});
				initModule({
					location: tp.chatTab.pages[0],
					title: "ShowFiltered",
					storeAs: "disableChatFilter",
					tooltip: "View messages that are caught by the game filter in red",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.chatTab.pages[0],
					title: "UnfilterNames",
					storeAs: "unfilterNames",
					tooltip: "See filtered people's real names, highlighed in the leaderboard",
					bindLocation: tp.chatTab.pages[1]
				});
				tp.chatTab.pages[0].addSeparator();
				initModule({
					location: tp.chatTab.pages[0],
					title: "BypassFilter",
					storeAs: "chatFilterBypass",
					tooltip: "Bypass naughty word game message filter!!!!1111 :D",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.chatTab.pages[0],
					title: "Tall Chat",
					storeAs: "tallChat",
					tooltip: "Makes the chat text taller, appends a character to all sent messages",
					bindLocation: tp.chatTab.pages[1]
				});
				tp.chatTab.pages[0].addSeparator();
				initFolder({
					location: tp.chatTab.pages[0],
					title: "FakeMessage",
					storeAs: "fakeMessageFolder"
				});
				let listOfIDs = [];
				if (unsafeWindow.extern && unsafeWindow.extern.inGame && ss && ss.PLAYERS) ss.PLAYERS.forEach((player) => {
					listOfIDs.push({
						text: player.name,
						value: String(player.id)
					});
					log({
						text: player.name,
						value: player.id
					});
				});
				initModule({
					location: tp.fakeMessageFolder,
					title: "Send As",
					storeAs: "fakeMessageID",
					tooltip: "Who to send fake message as",
					bindLocation: tp.chatTab.pages[1],
					dropdown: [
						...listOfIDs,
						{
							text: "MOD",
							value: "254"
						},
						{
							text: "SERVER",
							value: "255"
						}
					],
					defaultValue: "255"
				});
				initModule({
					location: tp.fakeMessageFolder,
					title: "(Refresh List)",
					storeAs: "fakeMessageRefresh",
					button: "REFRESH",
					tooltip: "Refreshes list",
					bindLocation: tp.chatTab.pages[1],
					clickFunction: function() {
						updateMenu = true;
					}
				});
				initModule({
					location: tp.fakeMessageFolder,
					title: "Content",
					storeAs: "fakeMessageText",
					tooltip: "The content of the fake message",
					defaultValue: "ЅtateFarm Client On Top! "
				});
				initModule({
					location: tp.fakeMessageFolder,
					title: "Bold Text",
					storeAs: "fakeMessageBold",
					tooltip: "Bold text",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.fakeMessageFolder,
					title: "SEND",
					storeAs: "fakeMessageSend",
					button: "SEND MESSAGE",
					tooltip: "Allows sending messages as MOD or SERVER (client sided only)",
					bindLocation: tp.chatTab.pages[1],
					clickFunction: function() {
						if (ss.addChat && unsafeWindow.extern.inGame) try {
							if (ss.isBadWord(extract("fakeMessageText"))) createPopup("Message would be filtered.", "error");
							ss.addChat(extract("fakeMessageText"), !!extract("fakeMessageBold"), Number(extract("fakeMessageID")));
						} catch (error) {
							log("shit, sending a fake message failed. damn lmao.", error);
						}
					}
				});
				tp.chatTab.pages[0].addSeparator();
				initModule({
					location: tp.chatTab.pages[0],
					title: "Spammer",
					storeAs: "spamChat",
					tooltip: "Automatically send messages",
					bindLocation: tp.chatTab.pages[1]
				});
				initFolder({
					location: tp.chatTab.pages[0],
					title: "Spammer Options",
					storeAs: "spammerFolder"
				});
				initModule({
					location: tp.spammerFolder,
					title: "Delay (ms)",
					storeAs: "spamChatDelay",
					tooltip: "The interval to send messages",
					slider: {
						min: 250,
						max: 6e4,
						step: 10
					},
					defaultValue: 500,
					enableConditions: [["spamChat", true]]
				});
				initModule({
					location: tp.spammerFolder,
					title: "Spam Text",
					storeAs: "spamChatText",
					tooltip: "The message to spam",
					defaultValue: "ЅtateFarm Client On Top! "
				});
				tp.chatTab.pages[0].addSeparator();
				initFolder({
					location: tp.chatTab.pages[0],
					title: "Trolling",
					storeAs: "trollingFolder"
				});
				initModule({
					location: tp.trollingFolder,
					title: "Mock",
					storeAs: "mockMode",
					tooltip: "Rudely mocks people talking in chat",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.trollingFolder,
					title: "Mock no repeat",
					storeAs: "mockModeNoRePeat",
					tooltip: "Makes mock not respond if it doesn't have an answer, instead of copying the message",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.trollingFolder,
					title: "Announcer",
					storeAs: "announcer",
					tooltip: "Announces when you change GUI config",
					bindLocation: tp.chatTab.pages[1]
				});
				tp.trollingFolder.addSeparator();
				initModule({
					location: tp.trollingFolder,
					title: "AutoEZ",
					storeAs: "autoEZ",
					tooltip: "Gloats on people when you kill them",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.trollingFolder,
					title: "CheatAccuse",
					storeAs: "cheatAccuse",
					tooltip: "Accuses your killer of cheating",
					bindLocation: tp.chatTab.pages[1]
				});
				tp.chatTab.pages[0].addSeparator();
				initFolder({
					location: tp.chatTab.pages[0],
					title: "Join/Leave Msgs Options",
					storeAs: "joinLeaveFolder"
				});
				initModule({
					location: tp.joinLeaveFolder,
					title: "Join Msgs",
					storeAs: "joinMessages",
					tooltip: " Notify you when players join",
					bindLocation: tp.chatTab.pages[1]
				});
				initModule({
					location: tp.joinLeaveFolder,
					title: "Leave Msgs",
					storeAs: "leaveMessages",
					tooltip: "Notify you when players leave",
					bindLocation: tp.chatTab.pages[1]
				});
				tp.joinLeaveFolder.addSeparator();
				initModule({
					location: tp.joinLeaveFolder,
					title: "Send2Chat",
					storeAs: "publicBroadcast",
					tooltip: "Decides if these messages are shown to only you or everyone",
					bindLocation: tp.chatTab.pages[1],
					disableConditions: [["joinMessages", false], ["leaveMessages", false]]
				});
				initModule({
					location: tp.joinLeaveFolder,
					title: "[SFC]Added",
					storeAs: "joinLeaveBranding",
					tooltip: "If send2chat is enabled, this will add [SFC] to the beginning of the join/leave messages",
					bindLocation: tp.chatTab.pages[1],
					disableConditions: [["joinMessages", false], ["leaveMessages", false]]
				});
				initFolder({
					location: tp.mainPanel,
					title: "Lists",
					storeAs: "listsFolder"
				});
				initTabs({
					location: tp.listsFolder,
					storeAs: "listsTab"
				}, [{
					title: "WIP",
					content: `Sorry! No guide yet!`
				}]);
				initModule({
					location: tp.listsTab.pages[0],
					title: "Whitelist",
					storeAs: "whitelist",
					tooltip: "A list of names to use the below configuration. Separate with commas",
					defaultValue: "User-1, User-2"
				});
				initFolder({
					location: tp.listsTab.pages[0],
					title: "Whitelist (Target Only) Options",
					storeAs: "whitelistFolder"
				});
				initModule({
					location: tp.whitelistFolder,
					title: "WAimbot",
					storeAs: "enableWhitelistAimbot",
					tooltip: "Only will aimbot on the specified whitelist player(s). if the player(s) are all dead, you will target nothing",
					bindLocation: tp.listsTab.pages[1]
				});
				initModule({
					location: tp.whitelistFolder,
					title: "When None Visible",
					storeAs: "enableWhenNoneVisible",
					tooltip: "Still targets non-whitelisted players if no whitelisted player is a valid target",
					bindLocation: tp.listsTab.pages[1]
				});
				initModule({
					location: tp.whitelistFolder,
					title: "WESP",
					storeAs: "enableWhitelistTracers",
					tooltip: "A special behavior will appear to whitelisted ESP people",
					bindLocation: tp.listsTab.pages[1],
					disableConditions: [["tracers", false], ["playerESP", false]]
				});
				initModule({
					location: tp.whitelistFolder,
					title: "WESPType",
					storeAs: "whitelistESPType",
					tooltip: "Make their ESP line a special color, or exclude",
					bindLocation: tp.listsTab.pages[1],
					dropdown: [{
						text: "Only Include",
						value: "onlyinclude"
					}, {
						text: "Highlight",
						value: "highlight"
					}],
					defaultValue: "onlyinclude",
					disableConditions: [["tracers", false], ["playerESP", false]],
					showConditions: [["enableWhitelistTracers", true]]
				});
				initModule({
					location: tp.whitelistFolder,
					title: "WHighlight",
					storeAs: "whitelistColor",
					tooltip: "The color to highlight whitelisted players in",
					defaultValue: "#e80aac",
					disableConditions: [["tracers", false], ["playerESP", false]],
					showConditions: [["enableWhitelistTracers", true], ["whitelistESPType", "highlight"]]
				});
				tp.listsTab.pages[0].addSeparator();
				initModule({
					location: tp.listsTab.pages[0],
					title: "Blacklist",
					storeAs: "blacklist",
					tooltip: "A list of names to use the below configuration. Separate with commas",
					defaultValue: "User-1, User-2"
				});
				initFolder({
					location: tp.listsTab.pages[0],
					title: "Blacklist (Exclude) Options",
					storeAs: "blacklistFolder"
				});
				initModule({
					location: tp.blacklistFolder,
					title: "BAimbot",
					storeAs: "enableBlacklistAimbot",
					tooltip: "Never will aimbot on the specified whitelist player(s)",
					bindLocation: tp.listsTab.pages[1]
				});
				initModule({
					location: tp.blacklistFolder,
					title: "BESP",
					storeAs: "enableBlacklistTracers",
					tooltip: "A special behavior will appear to blacklisted ESP people",
					bindLocation: tp.listsTab.pages[1],
					disableConditions: [["tracers", false], ["playerESP", false]]
				});
				initModule({
					location: tp.blacklistFolder,
					title: "BESPType",
					storeAs: "blacklistESPType",
					tooltip: "what",
					bindLocation: tp.listsTab.pages[1],
					dropdown: [{
						text: "Just Exclude",
						value: "justexclude"
					}, {
						text: "Highlight",
						value: "highlight"
					}],
					defaultValue: "justexclude",
					disableConditions: [["tracers", false], ["playerESP", false]],
					showConditions: [["enableBlacklistTracers", true]]
				});
				initModule({
					location: tp.blacklistFolder,
					title: "BHighlight",
					storeAs: "blacklistColor",
					tooltip: "Color to use for blacklisted highlighting",
					defaultValue: "#00ff00",
					disableConditions: [["tracers", false], ["playerESP", false]],
					showConditions: [["enableBlacklistTracers", true], ["blacklistESPType", "highlight"]]
				});
				initFolder({
					location: tp.mainPanel,
					title: "Automation",
					storeAs: "automationFolder"
				});
				initTabs({
					location: tp.automationFolder,
					storeAs: "automationTab"
				}, [{
					title: "WIP",
					content: `Sorry! No guide yet!`
				}]);
				initModule({
					location: tp.automationTab.pages[0],
					title: "Flood Report",
					storeAs: "floodReport",
					tooltip: "Mass reports everyone. o7, comrade",
					bindLocation: tp.automationTab.pages[1],
					button: "Spam Now!",
					clickFunction: function() {
						createPopup("Thank you for your efforts comrade! o7");
						spamReport();
					}
				});
				tp.automationTab.pages[0].addSeparator();
				initModule({
					location: tp.automationTab.pages[0],
					title: "Bunnyhop",
					storeAs: "bunnyhop",
					tooltip: "Makes you automatically bunnyhop when holding down the jump button",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Auto Walk",
					storeAs: "autoWalk",
					tooltip: "Walks forward automatically",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Auto Strafe",
					storeAs: "autoStrafe",
					tooltip: "Strafes automatically",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Auto Jump",
					storeAs: "autoJump",
					tooltip: "Jumps on the specified interval",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Jump Delay",
					storeAs: "autoJumpDelay",
					tooltip: "How often should AutoJump trigger",
					slider: {
						min: 1,
						max: 1e4,
						step: 1
					},
					defaultValue: 1,
					showConditions: [["autoJump", true]]
				});
				tp.automationTab.pages[0].addSeparator();
				initModule({
					location: tp.automationTab.pages[0],
					title: "AutoWeapon",
					storeAs: "autoWeapon",
					tooltip: "Automatically picks a weapon",
					bindLocation: tp.automationTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "EggK-47",
							value: "eggk47"
						},
						{
							text: "Scrambler",
							value: "scrambler"
						},
						{
							text: "Free Ranger",
							value: "freeranger"
						},
						{
							text: "RPEGG",
							value: "rpegg"
						},
						{
							text: "Whipper",
							value: "whipper"
						},
						{
							text: "Crackshot",
							value: "crackshot"
						},
						{
							text: "Tri-Hard",
							value: "trihard"
						},
						{
							text: "Randomised",
							value: "random"
						}
					],
					defaultValue: "disabled"
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "AutoGrenade",
					storeAs: "autoGrenade",
					tooltip: "Automatically grenades w/ a delay",
					bindLocation: tp.automationTab.pages[1]
				});
				tp.automationTab.pages[0].addSeparator();
				initFolder({
					location: tp.automationTab.pages[0],
					title: "Auto Join Options",
					storeAs: "autoJoinFolder"
				});
				initModule({
					location: tp.autoJoinFolder,
					title: "Auto Join",
					storeAs: "autoJoin",
					tooltip: "Automatically joins a game",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.autoJoinFolder,
					title: "Join Code",
					storeAs: "joinCode",
					tooltip: "The gamecode used by AutoJoin",
					defaultValue: "CODE",
					enableConditions: [["autoJoin", true]]
				});
				initModule({
					location: tp.autoJoinFolder,
					title: "Get Code",
					storeAs: "getCode",
					tooltip: "Get the current gamecode for the autoJoin code field, uses last code you were in if in menu",
					button: "Retrieve",
					clickFunction: function() {
						change("joinCode", GAMECODE);
					},
					enableConditions: [["autoJoin", true]]
				});
				initFolder({
					location: tp.automationTab.pages[0],
					title: "Auto Name Options",
					storeAs: "autoNamesFolder"
				});
				initModule({
					location: tp.autoNamesFolder,
					title: "Use Name",
					storeAs: "useCustomName",
					tooltip: "Automaticaly names yourself",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.autoNamesFolder,
					title: "New Name",
					storeAs: "usernameAutoJoin",
					tooltip: "The name used by useCustomName",
					defaultValue: "ЅtateFarmer",
					enableConditions: [["useCustomName", true]]
				});
				initModule({
					location: tp.autoNamesFolder,
					title: "Copy Name",
					storeAs: "copyName",
					button: "Steal Name",
					enableConditions: [["useCustomName", true]],
					tooltip: "Steals a random lobby player's name",
					bindLocation: tp.automationTab.pages[1],
					clickFunction: function() {
						const copiedName = retrieveCopiedName();
						log("Retrieved copied name:", copiedName);
						change("usernameAutoJoin", copiedName || "ЅtateFarmer");
					}
				});
				initModule({
					location: tp.autoNamesFolder,
					title: "Random Name",
					storeAs: "randomName",
					button: "Randomise Name",
					enableConditions: [["useCustomName", true]],
					tooltip: "Gets a random shell shockers default sounding name",
					bindLocation: tp.automationTab.pages[1],
					clickFunction: function() {
						change("usernameAutoJoin", unsafeWindow.extern.generateRandomName() || "ЅtateFarmer");
					}
				});
				tp.automationTab.pages[0].addSeparator();
				initModule({
					location: tp.automationTab.pages[0],
					title: "AutoRespawn",
					storeAs: "autoRespawn",
					tooltip: "Automatically respawn",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Auto Team",
					storeAs: "autoTeam",
					tooltip: "Automatically picks a team",
					bindLocation: tp.automationTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "Red Team",
							value: "red"
						},
						{
							text: "Blue Team",
							value: "blue"
						},
						{
							text: "Random Team",
							value: "random"
						}
					],
					defaultValue: "disabled"
				});
				tp.automationTab.pages[0].addSeparator();
				initFolder({
					location: tp.automationTab.pages[0],
					title: "Game Blacklist Settings",
					storeAs: "gameBlacklistFolder"
				});
				initModule({
					location: tp.gameBlacklistFolder,
					title: "Blacklist On",
					storeAs: "gameBlacklist",
					tooltip: "Prevents you from joining specific games",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.gameBlacklistFolder,
					title: "Codes:",
					storeAs: "gameBlacklistCodes",
					tooltip: "The game list used by GameBlacklist, seperated with commas",
					defaultValue: ""
				});
				initModule({
					location: tp.gameBlacklistFolder,
					title: "Get BL Code",
					storeAs: "getCodeBlacklist",
					button: "Retrieve",
					tooltip: "Get the current gamecode for the GameBlacklist code field, uses last code you were in if in menu",
					bindLocation: tp.automationTab.pages[1],
					clickFunction: function() {
						if (GAMECODE != void 0 && GAMECODE != null) {
							if (extract("gameBlacklistCodes") != "" && extract("gameBlacklistCodes") != void 0) {
								if (extract("gameBlacklistCodes").split(",").includes(GAMECODE)) {
									createPopup("Gamecode already in list!");
									return;
								}
							}
							extract("gameBlacklistCodes") != void 0 ? change("gameBlacklistCodes", extract("gameBlacklistCodes") + GAMECODE + ",") : change("gameBlacklistCodes", GAMECODE + ",");
						} else createPopup("Join a game first");
					}
				});
				initModule({
					location: tp.gameBlacklistFolder,
					title: "Clear BL Codes",
					storeAs: "clearCodeBlacklist",
					button: "Clear",
					tooltip: "Empties the GameBlacklist code list",
					bindLocation: tp.automationTab.pages[1],
					clickFunction: function() {
						if (extract("gameBlacklistCodes") != void 0) log("Clearing BL codes, cleared list: " + extract("gameBlacklistCodes"));
						change("gameBlacklistCodes", "");
					}
				});
				tp.automationTab.pages[0].addSeparator();
				initModule({
					location: tp.automationTab.pages[0],
					title: "LeaveGame",
					storeAs: "leaveGame",
					button: "Unjoin Game",
					tooltip: "Leave to the menu",
					bindLocation: tp.automationTab.pages[1],
					clickFunction: function() {
						unsafeWindow.vueApp.onLeaveGameConfirm();
					}
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "LeaveEmpty",
					storeAs: "leaveEmpty",
					tooltip: "Leaves empty games",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Auto Leave",
					storeAs: "autoLeave",
					tooltip: "Automatically leaves after a specified interval",
					bindLocation: tp.automationTab.pages[1]
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Delay (s)",
					storeAs: "autoLeaveDelay",
					tooltip: "The interval after which autoLeave evacuates to the lobby",
					slider: {
						min: 0,
						max: 3600,
						step: 1
					},
					defaultValue: 300,
					enableConditions: [["autoLeave", true]]
				});
				tp.automationTab.pages[0].addSeparator();
				initModule({
					location: tp.automationTab.pages[0],
					title: "Gamemode",
					storeAs: "autoGamemode",
					tooltip: "Picks a gamemode for autojoin",
					bindLocation: tp.automationTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "FFA",
							value: "ffa"
						},
						{
							text: "Teams",
							value: "teams"
						},
						{
							text: "Captula",
							value: "captula"
						},
						{
							text: "KotC",
							value: "kotc"
						},
						{
							text: "Randomised",
							value: "random"
						}
					],
					defaultValue: "disabled"
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Auto Region",
					storeAs: "autoRegion",
					tooltip: "Automatically selects a region to play in",
					bindLocation: tp.automationTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "Chile",
							value: "santiago"
						},
						{
							text: "Germany",
							value: "germany"
						},
						{
							text: "Singapore",
							value: "singapore"
						},
						{
							text: "Sydney",
							value: "sydney"
						},
						{
							text: "US Central",
							value: "uscentral"
						},
						{
							text: "US East",
							value: "useast"
						},
						{
							text: "US West",
							value: "uswest"
						},
						{
							text: "Randomised",
							value: "random"
						}
					],
					defaultValue: "disabled"
				});
				tp.automationTab.pages[0].addSeparator();
				initModule({
					location: tp.automationTab.pages[0],
					title: "Egg Color",
					storeAs: "eggColor",
					tooltip: "Picks the egg color automatically",
					bindLocation: tp.automationTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "White",
							value: "white"
						},
						{
							text: "Light Blue",
							value: "lightblue"
						},
						{
							text: "Light Eggshell",
							value: "lighteggshell"
						},
						{
							text: "Eggshell",
							value: "eggshell"
						},
						{
							text: "Dark Eggshell",
							value: "darkeggshell"
						},
						{
							text: "Darker Eggshell",
							value: "darkereggshell"
						},
						{
							text: "Darkest Eggshell",
							value: "darkesteggshell"
						},
						{
							text: "Red (VIP)",
							value: "red"
						},
						{
							text: "Purple (VIP)",
							value: "purple"
						},
						{
							text: "Pink (VIP)",
							value: "pink"
						},
						{
							text: "Yellow (VIP)",
							value: "yellow"
						},
						{
							text: "Blue (VIP)",
							value: "blue"
						},
						{
							text: "Green (VIP)",
							value: "green"
						},
						{
							text: "Lime (VIP)",
							value: "lime"
						}
					],
					defaultValue: "disabled"
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Auto Stamp",
					storeAs: "autoStamp",
					tooltip: "Picks the egg stamp automatically",
					bindLocation: tp.automationTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "Target Stamp",
							value: "target"
						},
						{
							text: "No Sign Stamp",
							value: "nosign"
						},
						{
							text: "Question Mark Stamp?",
							value: "question"
						},
						{
							text: "Peace Stamp",
							value: "peace"
						},
						{
							text: "Thumbs Up Stamp",
							value: "thumbsup"
						},
						{
							text: "Pablo Smile Stamp",
							value: "pablosmile"
						}
					],
					defaultValue: "disabled"
				});
				initModule({
					location: tp.automationTab.pages[0],
					title: "Auto Hat",
					storeAs: "autoHat",
					tooltip: "Picks the egg hat automatically",
					bindLocation: tp.automationTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "Ball Cap",
							value: "ballcap"
						},
						{
							text: "Boat Fedora",
							value: "boatfedora"
						},
						{
							text: "Top Hat",
							value: "tophat"
						},
						{
							text: "Derby Hat",
							value: "derbyhat"
						},
						{
							text: "Mountie Hat",
							value: "mountiehat"
						},
						{
							text: "Pablo Hat",
							value: "pablohat"
						}
					],
					defaultValue: "disabled"
				});
			}
			initFolder({
				location: tp.mainPanel,
				title: "Botting",
				storeAs: "bottingFolder"
			});
			initTabs({
				location: tp.bottingFolder,
				storeAs: "bottingTab"
			}, [{
				title: "WIP",
				content: `Sorry! No guide yet!
But check out the GitHub guide.`
			}]);
			initModule({
				location: tp.bottingTab.pages[0],
				title: "Show Panel",
				storeAs: "showBotPanel",
				tooltip: "Show the bot panel",
				bindLocation: tp.bottingTab.pages[1],
				button: "Show Panel",
				defaultBind: "J",
				clickFunction: () => {
					tp.botPanel.hidden = !tp.botPanel.hidden;
				}
			});
			tp.bottingTab.pages[0].addSeparator();
			initModule({
				location: tp.bottingTab.pages[0],
				title: "How To?",
				storeAs: "bottingGuide",
				tooltip: "Click for infos on how to get started and free candy",
				button: "Link",
				clickFunction: function() {
					GM_openInTab(bottingGuideURL, { active: true });
				}
			});
			if (allowAccess) {
				initFolder({
					location: tp.mainPanel,
					title: "Theming",
					storeAs: "themingFolder"
				});
				initTabs({
					location: tp.themingFolder,
					storeAs: "themingTab"
				}, [{
					title: "WIP",
					content: `Sorry! No guide yet!`
				}]);
				initModule({
					location: tp.themingTab.pages[0],
					title: "Skybox",
					storeAs: "skybox",
					tooltip: "Allows you to switch out Shell's default skybox",
					bindLocation: tp.themingTab.pages[1],
					dropdown: loadedSkyboxes,
					changeFunction: (newSkybox) => {
						if (!unsafeWindow[skyboxName]) return;
						unsafeWindow[skyboxName].material.reflectionTexture.coordinatesMode = 5;
					}
				});
				initModule({
					location: tp.themingTab.pages[0],
					title: "Randomize Skybox",
					storeAs: "randomSkyBox",
					tooltip: "Switches the skybox to a random one",
					bindLocation: tp.themingTab.pages[1]
				});
				initModule({
					location: tp.themingTab.pages[0],
					title: "Switch Interval",
					storeAs: "randomSkyBoxInterval",
					tooltip: "The interval after which the skybox is switched, given that randomSkyBox is enabled. In minutes",
					slider: {
						min: 1,
						max: 10,
						step: .1
					},
					defaultValue: 3
				});
				tp.themingTab.pages[0].addSeparator();
				initModule({
					location: tp.themingTab.pages[0],
					title: "Legacy Models",
					storeAs: "legacyModels",
					tooltip: "Switches to the old models",
					bindLocation: tp.themingTab.pages[1]
				});
				initModule({
					location: tp.themingTab.pages[0],
					title: "Game Filter",
					storeAs: "filter",
					tooltip: "Adds a color tint to the game",
					bindLocation: tp.themingTab.pages[1],
					dropdown: [
						{
							text: "Default",
							value: 2
						},
						{
							text: "Blue",
							value: 3
						},
						{
							text: "Mexico",
							value: 4
						}
					]
				});
				initModule({
					location: tp.themingTab.pages[0],
					title: "Gun Position",
					storeAs: "gunPosition",
					tooltip: "Changes the position of your player's gun",
					bindLocation: tp.themingTab.pages[1],
					dropdown: [
						{
							text: "Right",
							value: "right"
						},
						{
							text: "Left",
							value: "left"
						},
						{
							text: "Hidden",
							value: "hidden"
						}
					]
				});
				tp.themingTab.pages[0].addSeparator();
				initModule({
					location: tp.themingTab.pages[0],
					title: "Enable Bob Modifier",
					storeAs: "bobModifierEnabled",
					tooltip: "Enable/disable setting the bob effect",
					bindLocation: tp.themingTab.pages[1]
				});
				initFolder({
					location: tp.themingTab.pages[0],
					title: "Bob Modifier Settings",
					storeAs: "bobFolder"
				});
				initModule({
					location: tp.bobFolder,
					title: "Bobbing Value",
					storeAs: "bobModifier",
					tooltip: "Set to 0 to disable. Mess with other numbers for funny effects.",
					slider: {
						min: 0,
						max: 99,
						step: .01
					},
					defaultValue: 0
				});
				initModule({
					location: tp.bobFolder,
					title: "Only When Still",
					storeAs: "bobModifierWhenStill",
					tooltip: "Disables while you're still.",
					bindLocation: tp.themingTab.pages[1]
				});
				tp.themingTab.pages[0].addSeparator();
				initFolder({
					location: tp.themingTab.pages[0],
					title: "Audio Settings",
					storeAs: "audioFolder"
				});
				initModule({
					location: tp.audioFolder,
					title: "Mute Game",
					storeAs: "muteGame",
					tooltip: "Mute the game?",
					bindLocation: tp.themingTab.pages[1]
				});
				initModule({
					location: tp.audioFolder,
					title: "DistanMult",
					storeAs: "distanceMult",
					tooltip: "Makes the distance when playing sfx change",
					slider: {
						min: .01,
						max: 2,
						step: .01
					},
					defaultValue: 1
				});
				tp.audioFolder.addSeparator();
				initModule({
					location: tp.audioFolder,
					title: "CustomSFX (1st)",
					storeAs: "customSFX1",
					tooltip: "Select a custom sound pack. Changes in-game sounds. Three pack slots available at once",
					bindLocation: tp.themingTab.pages[1],
					enableConditions: [["muteGame", false]],
					dropdown: JSON.parse(JSON.stringify(retrievedSFX))
				});
				initModule({
					location: tp.audioFolder,
					title: "CustomSFX (2nd)",
					storeAs: "customSFX2",
					tooltip: "Select a custom sound pack. Changes in-game sounds. Three pack slots available at once",
					bindLocation: tp.themingTab.pages[1],
					enableConditions: [["muteGame", false]],
					dropdown: JSON.parse(JSON.stringify(retrievedSFX))
				});
				initModule({
					location: tp.audioFolder,
					title: "CustomSFX (3rd)",
					storeAs: "customSFX3",
					tooltip: "Select a custom sound pack. Changes in-game sounds. Three pack slots available at once",
					bindLocation: tp.themingTab.pages[1],
					enableConditions: [["muteGame", false]],
					dropdown: JSON.parse(JSON.stringify(retrievedSFX))
				});
				tp.themingTab.pages[0].addSeparator();
				initModule({
					location: tp.themingTab.pages[0],
					title: "Replace Logo",
					storeAs: "replaceLogo",
					tooltip: "Replaces shell shockers' BORING logo with the BEAUTIFUL StateFarm logo",
					bindLocation: tp.themingTab.pages[1]
				});
				initModule({
					location: tp.themingTab.pages[0],
					title: "Animate Title",
					storeAs: "titleAnimation",
					tooltip: "Makes the page title look cool",
					bindLocation: tp.themingTab.pages[1]
				});
				initModule({
					location: tp.themingTab.pages[0],
					title: "Client Theme",
					storeAs: "themeType",
					tooltip: "Controls the client's UI theme",
					bindLocation: tp.themingTab.pages[1],
					dropdown: [
						{
							text: "Default",
							value: "defaultTheme"
						},
						{
							text: "Iceberg",
							value: "icebergTheme"
						},
						{
							text: "Jet Black",
							value: "jetblackTheme"
						},
						{
							text: "Light",
							value: "lightTheme"
						},
						{
							text: "Retro",
							value: "retroTheme"
						},
						{
							text: "Translucent",
							value: "translucentTheme"
						},
						{
							text: "StateFarmer",
							value: "statefarmerTheme"
						},
						{
							text: "Blurple",
							value: "blurpleTheme"
						},
						{
							text: "ShellFarm",
							value: "shellFarmTheme"
						}
					],
					defaultValue: "defaultTheme",
					changeFunction: function(value) {
						applyTheme(value.value);
					}
				});
				tp.themingTab.pages[0].addSeparator();
				initModule({
					location: tp.themingTab.pages[0],
					title: "Enable Party Lights",
					storeAs: "partyLightsEnabled",
					tooltip: "🥳🥳 Let the party begin 🎉🎉",
					bindLocation: tp.themingTab.pages[1]
				});
				initModule({
					location: tp.themingTab.pages[0],
					title: "Party Lights Intensity",
					storeAs: "partyLightsIntensity",
					tooltip: "Intensity of the party 🥳",
					slider: {
						min: .01,
						max: 20,
						step: .01
					},
					defaultValue: .5
				});
				tp.themingTab.pages[0].addSeparator();
				initModule({
					location: tp.themingTab.pages[0],
					title: "World Flattening",
					storeAs: "worldFlattening",
					tooltip: "Make the world F-L-A-T",
					slider: {
						min: .05,
						max: 10,
						step: .05
					},
					defaultValue: 1
				});
				initFolder({
					location: tp.mainPanel,
					title: "Accounts",
					storeAs: "accountsFolder"
				});
				initTabs({
					location: tp.accountsFolder,
					storeAs: "accountsTab"
				}, [
					{
						title: "Basics",
						content: `This is the accounts tab. Here you will find
options relating to managing your thousands of
shell accounts and options that will enable you
to alt like a pro.`
					},
					{
						title: "Login DB",
						content: `The Login DB allows you to alt with ease. Put
simply, it is just a list of EmailPass combos.
It is simpler than AccountRecords, but one does
not replace the other. Login DB is stored
universally across all Shell proxies, and
has a queue system. Each time an account
from this list is logged into, it moves it
to the back of the list, allowing you to
have a steady stream of fresh accounts.

PRIVACY NOTE: This database will contain some
important information. All data is stored locally
and will never be requested by the StateFarm
development team, but can theoretically be stolen
via the use of other userscripts not authorised
by the StateFarm developers. This DB is not
exposed to the Shell Shockers game (unless you
have enabled debug mode).`
					},
					{
						title: "AccRecord",
						content: `The AccountRecords database is similar, but
different to the Login DB. Whilst the Login DB
serves to allow you to quickly switch to a new
account, AccountRecords saves information
related to accounts you've logged into. It saves
info such as your egg count, items in your
inventory and the value of your inventory.
This feature is even more advanced than the
Login DB, and is only recommended for use by
people who really know what they're doing. If
you just like aimbotting, you really don't need
to worry about this.

FYI: This will attempt to save info about any
account, but will only perform best when you
are using an account that you logged into using
StateFarm's login or account creation modules.
Other accounts will have limited info, such as
masked emails and no EmailPass combos.

PRIVACY NOTE: This database will contain some
important information. You can disable the
logging of this info in the settings. All data
is stored locally and will never be requested
by the StateFarm development team, but can
theoretically be stolen via the use of other
userscripts not authorised by the StateFarm
developers. This DB is not exposed to the
Shell Shockers game (unless you have enabled
debug mode).`
					}
				]);
				initFolder({
					location: tp.accountsTab.pages[0],
					title: "Account Login (Basic)",
					storeAs: "loginFolder"
				});
				initModule({
					location: tp.loginFolder,
					title: "Email:Pass",
					storeAs: "loginEmailPass",
					tooltip: "Field for loginLogin",
					defaultValue: "ex@gmail.com:passwd"
				});
				initModule({
					location: tp.loginFolder,
					title: "Login Account",
					storeAs: "loginLogin",
					tooltip: "Log into an account using email:pass without using shell's UI",
					button: "LOGIN",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						let emailPass = extract("loginEmailPass");
						if (emailPass.includes(":")) loginOrCreateWithEmailPass(emailPass);
						else {
							emailPass = prompt("Your email:pass isn't valid. Enter your combo below or input the correct one in the box.", "");
							if (emailPass.includes(":")) loginOrCreateWithEmailPass(emailPass);
						}
					}
				});
				tp.accountsTab.pages[0].addSeparator();
				initFolder({
					location: tp.accountsTab.pages[0],
					title: "Account Login (Login Database)",
					storeAs: "loginDatabaseFolder"
				});
				initModule({
					location: tp.loginDatabaseFolder,
					title: "Login Next Account",
					storeAs: "loginDatabaseLogin",
					button: "LOGIN",
					tooltip: "Tools for managing accounts in a Database",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						let loginDB = GM_getValue("StateFarm_LoginDB") || [];
						let loginDBlength = loginDB.length;
						if (loginDBlength > 0) {
							let index = extract("loginDatabaseSelection") == "inorder" ? 0 : Math.ceil(Math.random() * .75 * (loginDBlength - 1));
							log(`selecting index ${index}, this is out of ${loginDBlength} entries.`);
							let [emailPass] = loginDB.splice(index, 1);
							loginDB.push(emailPass);
							log(`deleted and reinserted ${emailPass} at the end.`);
							loginOrCreateWithEmailPass(emailPass);
							GM_setValue("StateFarm_LoginDB", loginDB);
							createPopup(`Logging in from index ${index}...`);
						} else createPopup("LoginDB is empty!", "error");
					}
				});
				initModule({
					location: tp.loginDatabaseFolder,
					title: "Selection Type",
					storeAs: "loginDatabaseSelection",
					tooltip: "Tools for managing accounts in a Database",
					bindLocation: tp.accountsTab.pages[1],
					dropdown: [{
						text: "In Order",
						value: "inorder"
					}, {
						text: "Random",
						value: "random"
					}],
					defaultValue: "inorder"
				});
				initModule({
					location: tp.loginDatabaseFolder,
					title: "Auto Login",
					storeAs: "autoLogin",
					tooltip: "Tools for managing accounts in a Database",
					bindLocation: tp.accountsTab.pages[1],
					dropdown: [
						{
							text: "Disabled",
							value: "disabled"
						},
						{
							text: "When No Account",
							value: "noaccount"
						},
						{
							text: "Always",
							value: "always"
						}
					],
					defaultValue: "disabled"
				});
				tp.loginDatabaseFolder.addSeparator();
				initModule({
					location: tp.loginDatabaseFolder,
					title: "Export DB(JSON)",
					storeAs: "loginDatabaseExport",
					tooltip: "Tools for managing accounts in a Database",
					button: "EXPORT (COPY)",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						GM_setClipboard(JSON.stringify(GM_getValue("StateFarm_LoginDB") || []), "text", () => log("Clipboard set!"));
						createPopup("Login DB copied to clipboard...");
					}
				});
				initModule({
					location: tp.loginDatabaseFolder,
					title: "Import Into LoginDB",
					storeAs: "loginDatabaseExport",
					tooltip: "Tools for managing accounts in a Database",
					button: "APPEND (PASTE)",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						let userInput = prompt(`Input data you would like to add to your LoginDB. This will NOT replace your current data. All data added here will be put at the end of the queue. Also make sure that this data goes here and not into the AccountRecords DB.`, "Reminder: JSON format!");
						try {
							let loginDB = GM_getValue("StateFarm_LoginDB") || [];
							JSON.parse(userInput).forEach((data) => {
								if (data && !loginDB.includes(data)) loginDB.push(data);
							});
							GM_setValue("StateFarm_LoginDB", loginDB);
							createPopup("Success! Data appended to LoginDB.", "success");
						} catch {
							createPopup("Failed! Check the formatting.", "error");
						}
					}
				});
				initModule({
					location: tp.loginDatabaseFolder,
					title: "ImportFromRecords",
					storeAs: "loginDatabaseImportRecords",
					tooltip: "Tools for managing accounts in a Database",
					button: "APPEND",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						if (prompt("This action will import any Email:Pass combos you have in AccountRecords. Make sure you want to do this, as this will potentially add a lot of new records. Type 'ok' to proceed. This cannot be reversed, export first to be safe. Note: all the new records are added to the end of the queue.") === "ok") {
							let accountRecords = GM_getValue("StateFarm_AccountRecords") || {};
							let loginDB = GM_getValue("StateFarm_LoginDB") || [];
							Object.entries(accountRecords).forEach(([key, account]) => {
								let emailPass = account.emailPass;
								if (emailPass && !loginDB.includes(emailPass)) loginDB.push(emailPass);
							});
							GM_setValue("StateFarm_LoginDB", loginDB);
							createPopup("Appended from AccountDetails!", "success");
						}
					}
				});
				initModule({
					location: tp.loginDatabaseFolder,
					title: "Delete LoginDB",
					storeAs: "loginDatabaseDelete",
					tooltip: "Tools for managing accounts in a Database",
					button: "DELETE!",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						if (prompt("WARNING! This is a destructive action! Type 'ok' if you are really sure you want to delete your LoginDB! This cannot be reversed, export first to be safe.") === "ok") GM_setValue("StateFarm_LoginDB", []);
					}
				});
				initModule({
					location: tp.loginDatabaseFolder,
					title: "LoginDB Info",
					storeAs: "loginDatabaseInfo",
					tooltip: "Tools for managing accounts in a Database",
					button: "INFO",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						let loginDB = GM_getValue("StateFarm_LoginDB") || [];
						alert(`You currently have ${loginDB.length} accounts in LoginDB. For info on what this is, check the guide tab.`);
					}
				});
				tp.accountsTab.pages[0].addSeparator();
				initFolder({
					location: tp.accountsTab.pages[0],
					title: "Account Generator (Basic)",
					storeAs: "generatorFolder"
				});
				initModule({
					location: tp.generatorFolder,
					title: "Gmail (before @)",
					storeAs: "accountGmail",
					tooltip: "The gmail prefix",
					defaultValue: "example (NO @gmail.com)"
				});
				initModule({
					location: tp.generatorFolder,
					title: "Password to use",
					storeAs: "accountPass",
					tooltip: "The account's password",
					defaultValue: "password69"
				});
				initModule({
					location: tp.generatorFolder,
					title: "Create (Basic)",
					storeAs: "accountCreate",
					tooltip: "Basic Gmail account creation",
					button: "CREATE",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						loginOrCreateWithEmailPass(extract("accountGmail") + "+" + getScrambled() + "@gmail.com:" + extract("accountPass"));
					}
				});
				tp.accountsTab.pages[0].addSeparator();
				initFolder({
					location: tp.accountsTab.pages[0],
					title: "Account Records Database",
					storeAs: "accountRecordsFolder"
				});
				initModule({
					location: tp.accountRecordsFolder,
					title: "Disable Logging",
					storeAs: "accountRecordsLogging",
					tooltip: "Account Records Database options. Only needed when dealing with a lot of accounts",
					bindLocation: tp.accountsTab.pages[1]
				});
				initModule({
					location: tp.accountRecordsFolder,
					title: "Export DB (JSON)",
					storeAs: "accountRecordsExport",
					tooltip: "Account Records Database options. Only needed when dealing with a lot of accounts",
					button: "EXPORT (COPY)",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						GM_setClipboard(JSON.stringify(GM_getValue("StateFarm_AccountRecords") || {}), "text", () => log("Clipboard set!"));
						createPopup("AccountRecords DB copied to clipboard...");
					}
				});
				initModule({
					location: tp.accountRecordsFolder,
					title: "Import Into DB",
					storeAs: "accountRecordsImport",
					tooltip: "Account Records Database options. Only needed when dealing with a lot of accounts",
					button: "APPEND (PASTE)",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						let userInput = prompt(`Input data you would like to add to your AccountRecords DB. This will NOT replace your current data. All data added here either be added or replace existing records. Also make sure that this data goes here and not into the LoginDB.`, "Reminder: JSON format!");
						try {
							let accountRecords = GM_getValue("StateFarm_AccountRecords") || {};
							let appendedData = JSON.parse(userInput);
							Object.entries(appendedData).forEach(([key, account]) => {
								if (account) accountRecords[key] = account;
							});
							GM_setValue("StateFarm_AccountRecords", accountRecords);
							createPopup("Success! Data appended to AccountRecords.", "success");
						} catch {
							createPopup("Failed! Check the formatting.", "error");
						}
					}
				});
				initModule({
					location: tp.accountRecordsFolder,
					title: "Delete DB",
					storeAs: "accountRecordsDelete",
					tooltip: "Account Records Database options. Only needed when dealing with a lot of accounts",
					button: "DELETE!",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						if (prompt("WARNING! This is a destructive action! Type 'ok' if you are really sure you want to delete your AccountRecords DB! This cannot be reversed, export first to be safe.") === "ok") GM_setValue("StateFarm_AccountRecords", {});
					}
				});
				initModule({
					location: tp.accountRecordsFolder,
					title: "View Info",
					storeAs: "accountRecordsInfo",
					tooltip: "Account Records Database options. Only needed when dealing with a lot of accounts",
					button: "INFO",
					bindLocation: tp.accountsTab.pages[1],
					clickFunction: function() {
						let userInput = prompt(`This will output some information relating to what information you have in your AccountRecords DB.\nParameters: Enter 1 to only print Email:Pass list of those with items, enter 2 for those with no items.`, "");
						let accountRecords = GM_getValue("StateFarm_AccountRecords") || {};
						let tierCache = GM_getValue("StateFarm_TierCache") || {};
						const itemCounts = {};
						const tierCounts = {};
						let emailPassList = [];
						let accountCount = 0;
						let accountWithItemsCount = 0;
						let itemCountTotal = 0;
						Object.entries(accountRecords).forEach(([key, account]) => {
							if (account) {
								let countedAccount = false;
								accountCount++;
								let inventoryList = [];
								account.inventory.forEach((item) => {
									inventoryList.push(item.name);
								});
								if (inventoryList) {
									for (let item of inventoryList) {
										if (!countedAccount) {
											countedAccount = true;
											accountWithItemsCount++;
										}
										if (tierCache[item]) item = `${item} [T${tierCache[item]}]`;
										let tier = item.match(/\[T([0-9])\]/);
										if (tier && tier[1]) if (tierCounts.hasOwnProperty(tier[1])) tierCounts[tier[1]]++;
										else tierCounts[tier[1]] = 1;
										itemCountTotal++;
										if (itemCounts.hasOwnProperty(item)) itemCounts[item]++;
										else itemCounts[item] = 1;
									}
									if (account.emailPass && !emailPassList.includes(account.emailPass)) {
										if (userInput == "1" && inventoryList.length > 0 || userInput == "2" && inventoryList.length < 1 || userInput !== "1" && userInput !== "2") emailPassList.push(account.emailPass);
									}
								}
							}
						});
						log("%c" + " ".repeat(500), "background: white; color: white; font-size: 50px;");
						log("%cAccountRecords Info", "color: red; font-size: 30px;");
						log("Full AccountRecords:");
						log(accountRecords);
						log(`itemCounts (Total items: ${itemCountTotal}):`);
						log(itemCounts);
						log(`tierCounts:`);
						log(tierCounts);
						log(`tierCache:`);
						log(tierCache);
						log(`emailPassList (Count: ${emailPassList.length}):`);
						log(JSON.stringify(emailPassList));
						log("%c" + " ".repeat(500), "background: white; color: white; font-size: 50px;");
						alert(`Results:\nAccounts Total: ${accountCount}; With Items: ${accountWithItemsCount}\nItem Count: ${itemCountTotal}\nOther info has been pasted into console.`);
					}
				});
				tp.accountsTab.pages[0].addSeparator();
				initFolder({
					location: tp.mainPanel,
					title: "Misc",
					storeAs: "miscFolder"
				});
				initTabs({
					location: tp.miscFolder,
					storeAs: "miscTab"
				}, [{
					title: "WIP",
					content: `Sorry! No guide yet!`
				}]);
				initFolder({
					location: tp.miscTab.pages[0],
					title: "Ban Evasion Options",
					storeAs: "banFolder"
				});
				initModule({
					location: tp.banFolder,
					title: "Unban",
					storeAs: "unban",
					tooltip: "Unbans you by signing out. You will lose skins if you're not signed in.",
					bindLocation: tp.miscTab.pages[1],
					button: "UNBAN NOW",
					clickFunction: function() {
						if (GM_getValue("StateFarm_Unbanned")) unban();
						else if (prompt("By proceeding, you will be signed out. If you don't have an account, your stats will be lost.\nEnter 'ok' to confirm this.\nThis popup will not be shown again for future unbans.") === "ok") {
							GM_setValue("StateFarm_Unbanned", "true");
							unban();
						} else alert("You did not entire \"ok\", so the unban was cancelled.");
					}
				});
				initModule({
					location: tp.banFolder,
					title: "Auto Unban",
					storeAs: "autoUnban",
					tooltip: "Automatically detects bans & unbans in above fashion",
					bindLocation: tp.miscTab.pages[1]
				});
				initModule({
					location: tp.banFolder,
					title: "New Proxy",
					storeAs: "newProxy",
					tooltip: "Switches to a new shell shockers link. SF config won't be transferred",
					bindLocation: tp.miscTab.pages[1],
					button: "NEW PROXY",
					clickFunction: function() {
						if (confirm("Switching to a proxy URL. By proceeding, you will enter another URL for Shell Shockers but your data doesn't get transferred.")) newProxy();
					}
				});
				initModule({
					location: tp.banFolder,
					title: "Reload Page",
					storeAs: "reload",
					tooltip: "Reloads the page",
					bindLocation: tp.miscTab.pages[1],
					button: "RELOAD NOW",
					clickFunction: function() {
						reloadPage();
					}
				});
				tp.miscTab.pages[0].addSeparator();
				initModule({
					location: tp.miscTab.pages[0],
					title: "AntiAFK",
					storeAs: "antiAFK",
					tooltip: "Bypasses AFK kicks",
					bindLocation: tp.miscTab.pages[1]
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "Quick Respawn",
					storeAs: "quickRespawn",
					tooltip: "Respawns quicker than usual",
					bindLocation: tp.miscTab.pages[1]
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "Sneaky Despawn",
					storeAs: "sneakyDespawn",
					tooltip: "Despawns, similar to the Esc key, but you can move while despawning, not that you cannot deal damage while sneaky despawning",
					bindLocation: tp.miscTab.pages[1],
					button: "Despawn... soon!",
					defaultBind: "Backquote",
					clickFunction: function() {
						if (!(unsafeWindow.extern.gamePaused || sneakyDespawning)) {
							sneakyDespawning = true;
							ss.PAUSE();
							createPopup("SneakyDespawn: 3 seconds.");
							setTimeout(() => {
								createPopup("SneakyDespawn: 2 seconds.");
							}, 1e3);
							setTimeout(() => {
								createPopup("SneakyDespawn: 1 second.");
							}, 2e3);
							setTimeout(() => {
								createPopup("SneakyDespawn: Now despawning!");
								document.exitPointerLock();
								document.onpointerlockchange();
								setTimeout(() => {
									sneakyDespawning = false;
								}, 200);
							}, 3e3);
						}
					}
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "InstantSpectate",
					storeAs: "instantSpectate",
					tooltip: "Don't wait around for the spectate button to appear",
					bindLocation: tp.miscTab.pages[1]
				});
				tp.miscTab.pages[0].addSeparator();
				initFolder({
					location: tp.miscTab.pages[0],
					title: "StateFarm UI Options",
					storeAs: "sfcUIFolder"
				});
				initModule({
					location: tp.sfcUIFolder,
					title: "StateFarm Updates",
					storeAs: "statefarmUpdates",
					tooltip: "Shows a element at the home screen about statefarm's update history, notifies you when update is available",
					bindLocation: tp.miscTab.pages[1],
					defaultValue: true
				});
				initModule({
					location: tp.sfcUIFolder,
					title: "Replace Feeds",
					storeAs: "replaceFeeds",
					tooltip: "Replaces the game menu's news and videos feed with content by the StateFarm dev team",
					bindLocation: tp.miscTab.pages[1],
					defaultValue: true
				});
				initModule({
					location: tp.sfcUIFolder,
					title: "Custom Badges",
					storeAs: "customBadges",
					tooltip: "Enables custom StateFarm badges",
					bindLocation: tp.miscTab.pages[1],
					defaultValue: true
				});
				tp.miscTab.pages[0].addSeparator();
				initModule({
					location: tp.miscTab.pages[0],
					title: "Unlock Skins (View Only)",
					storeAs: "unlockSkins",
					tooltip: "Unlocks all skins in locally (other players will not see these)",
					bindLocation: tp.miscTab.pages[1]
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "Unlock Bros Grenade",
					storeAs: "brosGrenade",
					tooltip: "Unlocks the real bros grenade skin to your account",
					bindLocation: tp.miscTab.pages[1],
					button: "Unlock, real.",
					clickFunction: function() {
						unsafeWindow.extern.giveBasketBrosReward();
					}
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "Admin Spoof",
					storeAs: "adminSpoof",
					tooltip: "Shows admin options such as BOOT and BAN in games. No ACTUAL functionality",
					bindLocation: tp.miscTab.pages[1]
				});
				tp.miscTab.pages[0].addSeparator();
				initModule({
					location: tp.miscTab.pages[0],
					title: "Switch Focus",
					storeAs: "unfocus",
					tooltip: "Controls the focus of the game. Allows for tabbing out without despawning",
					bindLocation: tp.miscTab.pages[1],
					button: "FOCUS/UNFOCUS",
					defaultBind: "P",
					clickFunction: function() {
						if (document.pointerLockElement !== null) {
							noPointerPause = true;
							unsafeWindow.document.exitPointerLock();
						} else if (noPointerPause) {
							noPointerPause = false;
							unsafeWindow.canvas.requestPointerLock();
						}
					}
				});
				tp.miscTab.pages[0].addSeparator();
				initFolder({
					location: tp.miscTab.pages[0],
					title: "Chicken Winner Options",
					storeAs: "chwFolder"
				});
				initModule({
					location: tp.chwFolder,
					title: "FastChickenWinner",
					storeAs: "chickenWinner",
					tooltip: "Instantly plays the chick'n winner minigame",
					bindLocation: tp.miscTab.pages[1],
					button: "Force Play",
					clickFunction: function() {
						unsafeWindow.extern.chwTryPlay();
						const eggElement = document.getElementById("eggOne");
						eggElement.click();
						eggElement.click();
						eggElement.click();
						eggElement.click();
						eggElement.click();
						eggElement.click();
						eggElement.click();
						eggElement.click();
						eggElement.click();
						let chicknWinnerElementLoaded = false;
						const checkInterval = setInterval(() => {
							const chicknWinnerElement = document.getElementById("chicknWinner");
							chicknWinnerElementLoaded = chicknWinnerElement?.style?.display == "";
							if (chicknWinnerElementLoaded) {
								const gotWinnerOkElement = document.getElementById("gotWinnerOk");
								if (gotWinnerOkElement) gotWinnerOkElement.click();
								if (chicknWinnerElement.style.display == "none") {
									log("ermm, found");
									clearInterval(checkInterval);
									updateAccountRecords();
									accountStatus = "chwDone";
								}
							}
						}, 100);
					}
				});
				initModule({
					location: tp.chwFolder,
					title: "AutoChickenWinner",
					storeAs: "autoChickenWinner",
					tooltip: "Automatically plays the chick'n winner minigame when cooldowns are over",
					bindLocation: tp.miscTab.pages[1]
				});
				initModule({
					location: tp.chwFolder,
					title: "Chw Info Notifications",
					storeAs: "chickenWinnerNotifs",
					tooltip: "Alerts you of the tier of what you just earned and other infos.",
					bindLocation: tp.miscTab.pages[1]
				});
				tp.miscTab.pages[0].addSeparator();
				initModule({
					location: tp.miscTab.pages[0],
					title: "Get Game History",
					storeAs: "getGameHistory",
					tooltip: "Displays a list of the last few lobbies you were in",
					bindLocation: tp.miscTab.pages[1],
					button: "get",
					clickFunction: function() {
						let games = GM_getValue("StateFarm_GameHistory");
						if (!games) {
							alert("no history!");
							return;
						}
						games = JSON.parse(games);
						let gString = "";
						games.forEach((g) => {
							gString += g.code;
							if (g.amount > 1) gString += ` (${g.amount})`;
							gString += ": ";
							gString += g.string;
							gString += ` (left at ${new Date(g.time).toLocaleString()} via ${g.closeCode} ${g.message})`;
							gString += "\n";
						});
						console.log(gString);
						gString += "\na copy of this list has been dumped into the console, if you wish to copy a code.";
						alert(gString);
					}
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "Clear Game History",
					storeAs: "clearGameHistory",
					tooltip: "Clear your stored game history",
					bindLocation: tp.miscTab.pages[1],
					button: "clear",
					clickFunction: function() {
						if (!GM_getValue("StateFarm_GameHistory")) return;
						log("deleting game history: " + GM_getValue("StateFarm_GameHistory"));
						GM_deleteValue("StateFarm_GameHistory");
						createPopup("game history deleted!");
					}
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "Custom Macro",
					storeAs: "customMacro",
					tooltip: "The JavaScript macro executed via executeMacro",
					defaultValue: "log('cool');"
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "Execute Macro",
					storeAs: "executeMacro",
					tooltip: "Allows for JS code to be executed from the client itself. Runs in userscript environment, so use unsafeWindow etc.",
					bindLocation: tp.miscTab.pages[1],
					button: "EXECUTE",
					clickFunction: function() {
						(async () => {
							try {
								log(extract("customMacro"));
								await eval(extract("customMacro"));
							} catch (error) {
								console.error("Error executing code:", error);
							}
						})();
					}
				});
				initModule({
					location: tp.miscTab.pages[0],
					title: "Do At Startup",
					storeAs: "autoMacro",
					tooltip: "Executes the entered macro at client startup",
					bindLocation: tp.miscTab.pages[1]
				});
				tp.miscTab.pages[0].addSeparator();
				initModule({
					location: tp.miscTab.pages[0],
					title: "[WIP]RandomPath",
					storeAs: "randomPath",
					tooltip: "Forces a new random path (pathfinding currently disabled)",
					bindLocation: tp.miscTab.pages[1],
					button: "Random Path",
					clickFunction: function() {}
				});
				findNewPath = false;
				tp.miscTab.pages[0].addSeparator();
				initModule({
					location: tp.miscTab.pages[0],
					title: "SilentRoll",
					storeAs: "silentRoll",
					tooltip: "Rolls around without showing it client sided",
					bindLocation: tp.miscTab.pages[1]
				});
				initFolder({
					location: tp.miscTab.pages[0],
					title: "Seizure Options",
					storeAs: "seizureFolder"
				});
				initModule({
					location: tp.seizureFolder,
					title: "SeizureX",
					storeAs: "enableSeizureX",
					tooltip: "Rotates the player by the specified amount around the y-axis (yaw)",
					bindLocation: tp.miscTab.pages[1]
				});
				initModule({
					location: tp.seizureFolder,
					title: "X Amount",
					storeAs: "amountSeizureX",
					tooltip: "Amount to roll",
					slider: {
						min: -6.283185307179586,
						max: 6.283185307179586,
						step: Math.PI / 280
					},
					defaultValue: 2
				});
				initModule({
					location: tp.seizureFolder,
					title: "SeizureY",
					storeAs: "enableSeizureY",
					tooltip: "Rotates the player by the specified amount around the x-axis (pitch)",
					bindLocation: tp.miscTab.pages[1]
				});
				initModule({
					location: tp.seizureFolder,
					title: "Y Amount",
					storeAs: "amountSeizureY",
					tooltip: "Amount to roll",
					slider: {
						min: -6.283185307179586,
						max: 6.283185307179586,
						step: Math.PI / 280
					},
					defaultValue: 2
				});
			}
			initFolder({
				location: tp.mainPanel,
				title: "Client & About",
				storeAs: "clientFolder"
			});
			initTabs({
				location: tp.clientFolder,
				storeAs: "clientTab"
			}, [{
				title: "WIP",
				content: `Sorry! No guide yet!`
			}]);
			initModule({
				location: tp.clientTab.pages[0],
				title: "VarData Fallback",
				storeAs: "vardataFallback",
				tooltip: "What to try if varData loading fails",
				bindLocation: tp.clientTab.pages[1],
				dropdown: [
					{
						text: "None",
						value: "none"
					},
					{
						text: "Load Latest (online)",
						value: "loadLatest"
					},
					{
						text: "Load Cached (current hash)",
						value: "loadCached"
					},
					{
						text: "Load Cached (latest cache)",
						value: "loadRecent"
					},
					{
						text: "Custom String",
						value: "loadCustom"
					}
				],
				defaultValue: "loadLatest"
			});
			initModule({
				location: tp.clientTab.pages[0],
				title: "Fallback Behavior",
				storeAs: "vardataType",
				tooltip: "When to use fallback",
				bindLocation: tp.clientTab.pages[1],
				dropdown: [
					{
						text: "Never",
						value: "never"
					},
					{
						text: "Just This Once",
						value: "justOnce"
					},
					{
						text: "Until Next Hash",
						value: "nextHash"
					},
					{
						text: "Always",
						value: "always"
					}
				],
				defaultValue: "always"
			});
			initModule({
				location: tp.clientTab.pages[0],
				title: "Custom VarData",
				storeAs: "vardataCustom",
				tooltip: "Uses the entered varData",
				defaultValue: "{}",
				enableConditions: [["vardataFallback", "loadCustom"]]
			});
			tp.clientTab.pages[0].addSeparator();
			initModule({
				location: tp.clientTab.pages[0],
				title: "Hide GUI",
				storeAs: "hide",
				tooltip: "Hides the big StateFarm menu. default key to do this is H",
				bindLocation: tp.clientTab.pages[1],
				button: "Hide!",
				clickFunction: function() {
					tp.mainPanel.hidden = !tp.mainPanel.hidden;
				},
				defaultBind: "H"
			});
			initModule({
				location: tp.clientTab.pages[0],
				title: "Hide at Startup",
				storeAs: "hideAtStartup",
				tooltip: "Hides the StateFarm menu by default",
				bindLocation: tp.clientTab.pages[1],
				defaultValue: false
			});
			initModule({
				location: tp.clientTab.pages[0],
				title: "No Console Logs",
				storeAs: "consoleLogs",
				tooltip: "Blocks the client frome sending messages to the browser console",
				bindLocation: tp.clientTab.pages[1],
				defaultValue: false
			});
			initModule({
				location: tp.clientTab.pages[0],
				title: "Pop-ups",
				storeAs: "popups",
				tooltip: "Disables/enables bottom-left corner popups of configs changed & notifications",
				bindLocation: tp.clientTab.pages[1],
				defaultValue: true
			});
			initModule({
				location: tp.clientTab.pages[0],
				title: "Tooltips",
				storeAs: "tooltips",
				tooltip: "Controls whether you want to see tooltips (the box displaying this very message!) (I'm just an innocent tooltip! I did nothing! Let me live! Don't disable me :( )",
				bindLocation: tp.clientTab.pages[1],
				defaultValue: true
			});
			tp.clientTab.pages[0].addSeparator();
			initModule({
				location: tp.clientTab.pages[0],
				title: "Panic",
				storeAs: "panic",
				tooltip: "Allows you to quickly exit to a set URL. great for hacking in class",
				bindLocation: tp.clientTab.pages[1],
				button: "EXIT!",
				clickFunction: function() {
					if (extract("enablePanic")) unsafeWindow.location.replace(extract("panicURL"));
				},
				defaultBind: "X",
				enableConditions: [["enablePanic", true]]
			});
			initFolder({
				location: tp.clientTab.pages[0],
				title: "Panic Options",
				storeAs: "panicFolder"
			});
			initModule({
				location: tp.panicFolder,
				title: "Enable",
				storeAs: "enablePanic",
				tooltip: "Enable evacuation",
				bindLocation: tp.clientTab.pages[1],
				defaultValue: false
			});
			initModule({
				location: tp.panicFolder,
				title: "Set URL",
				storeAs: "panicURL",
				tooltip: "What url to evacuate to",
				defaultValue: "https://classroom.google.com/",
				enableConditions: [["enablePanic", true]]
			});
			tp.clientTab.pages[0].addSeparator();
			let presetList = [];
			Object.entries(inbuiltPresets).forEach(([key, value]) => {
				let options = {};
				options.text = key;
				options.value = key;
				presetList.push(options);
			});
			initFolder({
				location: tp.clientTab.pages[0],
				title: "Presets",
				storeAs: "presetFolder"
			});
			initModule({
				location: tp.presetFolder,
				title: "Preset List",
				storeAs: "selectedPreset",
				tooltip: "A set of predefined configs made by the StateFarm developers",
				defaultValue: "onlypuppy7's Config",
				bindLocation: tp.clientTab.pages[1],
				dropdown: presetList
			});
			initModule({
				location: tp.presetFolder,
				title: "Apply",
				storeAs: "applyPreset",
				tooltip: "Apply the preset selected in the comboBox above",
				button: "Apply Preset",
				clickFunction: function() {
					if (confirm("Are you sure you want to continue? This will replace most of your current config.")) applySettings(inbuiltPresets[extract("selectedPreset")], true);
				}
			});
			tp.presetFolder.addSeparator();
			initModule({
				location: tp.presetFolder,
				title: "Save",
				storeAs: "savePreset",
				tooltip: "Saves your current settings as a preset",
				button: "Save As Preset",
				clickFunction: function() {
					let saveString = "";
					const addParam = function(module, setTo) {
						saveString = saveString + module + ">" + JSON.stringify(setTo) + "<";
					};
					Object.entries(configMain).forEach(([key, value]) => {
						log(key, value);
						if (typeof value == "string") try {
							value = extractAsDropdownInt(key);
						} catch (error) {}
						if (!presetIgnore.includes(key)) addParam(key, value);
					});
					saveString = saveString.substring(0, saveString.length - 1);
					let presetName = prompt("Name of preset:");
					if (presetName == "" || presetName == null) log("User cancelled save");
					else {
						let result = saveUserPreset(presetName, saveString);
						addUserPresets(loadUserPresets());
						log("Saved Preset: ", saveString);
						log("User Preset Result: ", result);
					}
					log("InbuiltPrests:");
					log(inbuiltPresets);
					initMenu(false);
				}
			});
			initModule({
				location: tp.presetFolder,
				title: "Delete",
				storeAs: "deletePreset",
				tooltip: "Deletes a preset",
				button: "Remove Preset",
				clickFunction: function() {
					let currUserPresets = loadUserPresets();
					delete currUserPresets[extract("selectedPreset")];
					delete inbuiltPresets[extract("selectedPreset")];
					save(presetStorageLocation, currUserPresets);
					log("Current User Presets: ", currUserPresets);
					initMenu(false);
				}
			});
			tp.presetFolder.addSeparator();
			initModule({
				location: tp.presetFolder,
				title: "Import",
				storeAs: "importPreset",
				tooltip: "Imports a custom preset",
				button: "Import Preset",
				clickFunction: function() {
					let preset = prompt("Paste preset here:");
					if (preset == "" || preset == null) log("User cancelled save");
					else {
						if (/([a-zA-Z]*>[^<]*<)+[a-zA-Z]*>[^<]*/.test(preset)) {
							let presetName = prompt("Name of preset:");
							if (presetName == "" || presetName == null) log("User cancelled save");
							else {
								let result = saveUserPreset(presetName, preset);
								addUserPresets(loadUserPresets());
								log("Saved Preset: ", preset);
								log("User Preset Result: ", result);
							}
						} else {
							alert("Not A Valid Preset!");
							log("Preset Not Valid");
						}
						initMenu(false);
					}
				}
			});
			initModule({
				location: tp.presetFolder,
				title: "Export",
				storeAs: "exportPreset",
				tooltip: "Copies your current preset to the clipboard",
				button: "Copy To Clipboard",
				clickFunction: function() {
					let saveString = "";
					const addParam = function(module, setTo) {
						saveString = saveString + module + ">" + JSON.stringify(setTo) + "<";
					};
					Object.entries(configMain).forEach(([key, value]) => {
						log(key, value);
						if (typeof value == "string") try {
							value = extractAsDropdownInt(key);
						} catch (error) {}
						if (!presetIgnore.includes(key)) addParam(key, value);
					});
					saveString = saveString.substring(0, saveString.length - 1);
					GM_setClipboard(saveString, "text", () => log("Clipboard set!"));
					createPopup("Preset copied to clipboard...");
				}
			});
			tp.clientTab.pages[0].addSeparator();
			initFolder({
				location: tp.clientTab.pages[0],
				title: "Creator's Links",
				storeAs: "linksFolder"
			});
			initModule({
				location: tp.linksFolder,
				title: "Discord",
				storeAs: "discord",
				tooltip: "The official StateFarm Client Discord server",
				button: "Link",
				clickFunction: () => GM_openInTab(discordURL, { active: true })
			});
			initModule({
				location: tp.linksFolder,
				title: "GitHub",
				storeAs: "github",
				tooltip: "The official StateFarm Client GitHub Repository! Check out the devs suffering here",
				button: "Link",
				clickFunction: () => GM_openInTab(baseURL, { active: true })
			});
			tp.clientTab.pages[0].addSeparator();
			initModule({
				location: tp.clientTab.pages[0],
				title: "Reset",
				storeAs: "clear",
				tooltip: "Powerwashes StateFarm completely",
				button: "DELETE",
				clickFunction: function() {
					if (confirm("Are you sure you want to continue? This will clear all stored module states and keybinds.")) {
						initMenu(true);
						alert("Reset to defaults.");
					}
				}
			});
			tp.clientTab.pages[0].addSeparator();
			initFolder({
				location: tp.clientTab.pages[0],
				title: "Developer Options",
				storeAs: "devFolder"
			});
			initModule({
				location: tp.devFolder,
				title: "Debug",
				storeAs: "debug",
				tooltip: "Converts SFC into a development tool.\nExposes globalSS to the window (allowing you to manipulate many game variables directly) and also enables some extra logs.",
				bindLocation: tp.clientTab.pages[1]
			});
			initModule({
				location: tp.devFolder,
				title: "Force Import",
				storeAs: "forceImport",
				tooltip: "Forces importing of Babylon instead of making fake babylon. Use only for testing or if fake babylon doesn't work.",
				bindLocation: tp.clientTab.pages[1]
			});
			tp.mainPanel.addSeparator();
			initModule({
				location: tp.mainPanel,
				title: "Update",
				storeAs: "update",
				tooltip: "Go to the client's update page",
				button: "Link",
				clickFunction: () => GM_openInTab(downloadURL, { active: true })
			});
			initModule({
				location: tp.mainPanel,
				title: "Guide",
				storeAs: "documentation",
				tooltip: "A guide with more in-depth information on modules",
				button: "Link",
				clickFunction: () => GM_openInTab(featuresGuideURL, { active: true })
			});
			tp.botPanel = new Tweakpane.Pane();
			tp.botPanel.title = "StateFarm Bot Control Panel";
			tp.botPanel.containerElem_.style.left = "15%";
			tp.botPanel.containerElem_.style.top = "25%";
			tp.botPanel.hidden = true;
			tp.botTabs = tp.botPanel.addTab({ pages: [
				{ title: "Deploy" },
				{ title: "Manage" },
				{ title: "Params" },
				{ title: "Info" }
			] });
			initModule({
				location: tp.botTabs.pages[0],
				title: "Bots Amount",
				storeAs: "numberBots",
				tooltip: "The number of bots/windows opened",
				slider: {
					min: 1,
					max: 18,
					step: 1
				},
				defaultValue: 1
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "Deploy",
				storeAs: "deployBots",
				tooltip: "Open the bot's windows. If only one opens, make sure you have popups allowed",
				button: "START BOTS!",
				bindLocation: tp.bottingTab.pages[1],
				clickFunction: function() {
					deployBots();
				}
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "Restart Bots",
				storeAs: "restartBots",
				tooltip: "Completely closes and restarts all bot instances",
				button: "RESTART BOTS",
				bindLocation: tp.bottingTab.pages[1],
				clickFunction: function() {
					broadcastToBots("kill");
					setTimeout(function() {
						deployBots();
					}, 1e3);
				}
			});
			tp.botTabs.pages[0].addSeparator();
			initModule({
				location: tp.botTabs.pages[0],
				title: "Window Width",
				storeAs: "botWindowWidth",
				tooltip: "Horizontal size of the bot's windows",
				slider: {
					min: 0,
					max: 1e4,
					step: 1
				},
				defaultValue: 450,
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "Window Height",
				storeAs: "botWindowHeight",
				tooltip: "Vertical size of the bot's windows",
				slider: {
					min: 0,
					max: 1e4,
					step: 1
				},
				defaultValue: 300,
				botParam: true
			});
			tp.botTabs.pages[0].addSeparator();
			initModule({
				location: tp.botTabs.pages[0],
				title: "Use Names",
				storeAs: "useCustomNameBots",
				tooltip: "Use special customized names",
				defaultValue: true,
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "Bot Name",
				storeAs: "botUsername",
				tooltip: "The names used by the bots",
				defaultValue: "ЅtateFarmer",
				enableConditions: [["useCustomNameBots", true]]
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "AntiDupe",
				storeAs: "botAntiDupe",
				tooltip: "Prevents duplication of names with a random letter at the end",
				enableConditions: [["useCustomNameBots", true]]
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "CopyNames",
				storeAs: "botCopyName",
				tooltip: "Copies names from other players in the lobby",
				enableConditions: [["useCustomNameBots", true]]
			});
			tp.botTabs.pages[0].addSeparator();
			initModule({
				location: tp.botTabs.pages[0],
				title: "Use Macro",
				storeAs: "useBotMacro",
				tooltip: "Execute a macro at bot startup",
				defaultValue: true,
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "Bot Macro",
				storeAs: "botMacro",
				tooltip: "The macro to be executed by the module above",
				defaultValue: "createPopup('success?');",
				botParam: true
			});
			tp.botTabs.pages[0].addSeparator();
			initModule({
				location: tp.botTabs.pages[0],
				title: "Proxy URL",
				storeAs: "proxyBots",
				tooltip: "Use random proxy urls for each bot instance",
				dropdown: [{
					text: "Randomised",
					value: "randomised"
				}, {
					text: "Static",
					value: "static"
				}],
				defaultValue: "darkesteggshell"
			});
			tp.botTabs.pages[0].addSeparator();
			initModule({
				location: tp.botTabs.pages[0],
				title: "Bot Color",
				storeAs: "eggColorBots",
				tooltip: "Sets the egg skin color of your bots",
				dropdown: [
					{
						text: "Disabled",
						value: "disabled"
					},
					{
						text: "White",
						value: "white"
					},
					{
						text: "Light Blue",
						value: "lightblue"
					},
					{
						text: "Light Eggshell",
						value: "lighteggshell"
					},
					{
						text: "Eggshell",
						value: "eggshell"
					},
					{
						text: "Dark Eggshell",
						value: "darkeggshell"
					},
					{
						text: "Darker Eggshell",
						value: "darkereggshell"
					},
					{
						text: "Darkest Eggshell",
						value: "darkesteggshell"
					},
					{
						text: "Red (VIP)",
						value: "red"
					},
					{
						text: "Purple (VIP)",
						value: "purple"
					},
					{
						text: "Pink (VIP)",
						value: "pink"
					},
					{
						text: "Yellow (VIP)",
						value: "yellow"
					},
					{
						text: "Blue (VIP)",
						value: "blue"
					},
					{
						text: "Green (VIP)",
						value: "green"
					},
					{
						text: "Lime (VIP)",
						value: "lime"
					},
					{
						text: "Randomised",
						value: "random"
					}
				],
				defaultValue: "darkesteggshell"
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "Bot Stamp",
				storeAs: "autoStampBots",
				tooltip: "Sets the stamp of your bots",
				dropdown: [
					{
						text: "Disabled",
						value: "disabled"
					},
					{
						text: "Target Stamp",
						value: "target"
					},
					{
						text: "No Sign Stamp",
						value: "nosign"
					},
					{
						text: "Question Mark Stamp?",
						value: "question"
					},
					{
						text: "Peace Stamp",
						value: "peace"
					},
					{
						text: "Thumbs Up Stamp",
						value: "thumbsup"
					},
					{
						text: "Pablo Smile Stamp",
						value: "pablosmile"
					},
					{
						text: "Randomised",
						value: "random"
					}
				],
				defaultValue: "pablosmile"
			});
			initModule({
				location: tp.botTabs.pages[0],
				title: "Bot Hat",
				storeAs: "autoHatBots",
				tooltip: "Sets the hat of your bots",
				dropdown: [
					{
						text: "Disabled",
						value: "disabled"
					},
					{
						text: "Ball Cap",
						value: "ballcap"
					},
					{
						text: "Boat Fedora",
						value: "boatfedora"
					},
					{
						text: "Top Hat",
						value: "tophat"
					},
					{
						text: "Derby Hat",
						value: "derbyhat"
					},
					{
						text: "Mountie Hat",
						value: "mountiehat"
					},
					{
						text: "Pablo Hat",
						value: "pablohat"
					},
					{
						text: "Randomised",
						value: "random"
					}
				],
				defaultValue: "pablohat"
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "Close Bots",
				storeAs: "killBots",
				tooltip: "Closes all bot tabs & kills all bots",
				button: "CLOSE TABS",
				clickFunction: function() {
					broadcastToBots("kill");
				}
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "Refresh Pages",
				storeAs: "refreshBots",
				tooltip: "Reloads all bot tabs",
				button: "REFRESH",
				clickFunction: function() {
					broadcastToBots("refresh");
				}
			});
			tp.botTabs.pages[1].addSeparator();
			initModule({
				location: tp.botTabs.pages[1],
				title: "New Proxies",
				storeAs: "newProxyBots",
				tooltip: "Moves bots to new proxies",
				button: "NEW PROXIES",
				clickFunction: function() {
					broadcastToBots("newproxy");
				}
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "Unban All",
				storeAs: "unbanBots",
				tooltip: "Unbans all bots",
				button: "UNBAN BOTS",
				clickFunction: function() {
					broadcastToBots("unban");
				}
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "AutoUnbanBot",
				storeAs: "botAutoUnban",
				tooltip: "Automatically unbans all bots when they're banned",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "AutoLoginBot",
				storeAs: "botAutoLogin",
				tooltip: "Automatically logs bots into accounts",
				dropdown: [
					{
						text: "Disabled",
						value: "disabled"
					},
					{
						text: "When No Account",
						value: "noaccount"
					},
					{
						text: "Always",
						value: "always"
					}
				],
				defaultValue: "disabled",
				botParam: true
			});
			tp.botTabs.pages[1].addSeparator();
			initModule({
				location: tp.botTabs.pages[1],
				title: "Don'tKillMe",
				storeAs: "botNoKillMe",
				tooltip: "Forces bots to ignore you",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "Don'tKillBot",
				storeAs: "botNoKillBots",
				tooltip: "Forces bots to ignore other bots",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "FollowMe",
				storeAs: "botFollowMe",
				tooltip: "semibroken",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "FollowBots",
				storeAs: "botFollowBots",
				tooltip: "semibroken",
				botParam: true
			});
			tp.botTabs.pages[1].addSeparator();
			initModule({
				location: tp.botTabs.pages[1],
				title: "Leave Games",
				storeAs: "leaveBots",
				tooltip: "Makes all bots leave their games",
				button: "LEAVE",
				clickFunction: function() {
					broadcastToBots("leave");
				}
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "Leave Empty",
				storeAs: "leaveEmptyBots",
				tooltip: "Makes bots leave empty games",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "AutoLeave",
				storeAs: "autoLeaveBots",
				tooltip: "Makes bots leave after the specified interval",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "Delay (s)",
				storeAs: "autoLeaveDelayBots",
				tooltip: "Interval to leave after",
				slider: {
					min: 0,
					max: 3600,
					step: 1
				},
				defaultValue: 300,
				enableConditions: [["autoLeaveBots", true]],
				botParam: true
			});
			tp.botTabs.pages[1].addSeparator();
			initModule({
				location: tp.botTabs.pages[1],
				title: "Spam Report",
				storeAs: "reportBots",
				tooltip: "Makes the bots report everyone in the lobby",
				button: "SPAM REPORT!",
				clickFunction: function() {
					broadcastToBots("report");
				}
			});
			tp.botTabs.pages[1].addSeparator();
			initModule({
				location: tp.botTabs.pages[1],
				title: "Join Game",
				storeAs: "botAutoJoin",
				tooltip: "Forces bots to join a game",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "Game Code",
				storeAs: "botJoinCode",
				tooltip: "The code of the game the bots will join. If not specified, they'll find a random game",
				defaultValue: "CODE",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "Get Code",
				storeAs: "getCodeBots",
				tooltip: "Get your current game as ID",
				button: "Retrieve",
				clickFunction: function() {
					change("botJoinCode", GAMECODE);
				},
				botParam: true
			});
			tp.botTabs.pages[1].addSeparator();
			initModule({
				location: tp.botTabs.pages[1],
				title: "GameType",
				storeAs: "autoGamemodeBots",
				tooltip: "The game type the bots join - ffa, kotc, etc. can be random or disabled",
				dropdown: [
					{
						text: "Disabled",
						value: "disabled"
					},
					{
						text: "FFA",
						value: "ffa"
					},
					{
						text: "Teams",
						value: "teams"
					},
					{
						text: "Captula",
						value: "captula"
					},
					{
						text: "KotC",
						value: "kotc"
					},
					{
						text: "Randomised",
						value: "random"
					}
				],
				defaultValue: "disabled",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[1],
				title: "AutoRegion",
				storeAs: "autoRegionBots",
				tooltip: "The region the bots join - use, usc, etc. can be random or disabled",
				dropdown: [
					{
						text: "Disabled",
						value: "disabled"
					},
					{
						text: "Chile",
						value: "santiago"
					},
					{
						text: "Germany",
						value: "germany"
					},
					{
						text: "Singapore",
						value: "singapore"
					},
					{
						text: "Sydney",
						value: "sydney"
					},
					{
						text: "US Central",
						value: "uscentral"
					},
					{
						text: "US East",
						value: "useast"
					},
					{
						text: "US West",
						value: "uswest"
					},
					{
						text: "Randomised",
						value: "random"
					}
				],
				defaultValue: "disabled",
				botParam: true
			});
			tp.botTabs.pages[1].addSeparator();
			initModule({
				location: tp.botTabs.pages[1],
				title: "Select Team",
				storeAs: "botTeam",
				tooltip: "Automatically picks the bots' teams",
				botParam: true,
				dropdown: [
					{
						text: "Disabled",
						value: "disabled"
					},
					{
						text: "Red Team",
						value: "red"
					},
					{
						text: "Blue Team",
						value: "blue"
					},
					{
						text: "Random Team",
						value: "random"
					}
				],
				defaultValue: "disabled"
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoPlay",
				storeAs: "botRespawn",
				tooltip: "Make the bots spawn",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "LowRes",
				storeAs: "botLowRes",
				tooltip: "Keeps resolution of the game low, reduces resources needed",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "RenderDelay",
				storeAs: "renderDelayBots",
				tooltip: "Adds a forced fps buffer, makes game laggier",
				slider: {
					min: 0,
					max: 3e4,
					step: 10
				},
				defaultValue: 0,
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "MuteGame",
				storeAs: "botMuteGame",
				tooltip: "Shuts the game up",
				botParam: true
			});
			tp.botTabs.pages[2].addSeparator();
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoSeizure",
				storeAs: "botSeizure",
				tooltip: "Will the bots enable seizure mode?",
				botParam: true,
				enableConditions: [["botRespawn", true]]
			});
			tp.botTabs.pages[2].addSeparator();
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoTallChat",
				storeAs: "botTallChat",
				tooltip: "Enables the Tall Chat module for bots",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoMock",
				storeAs: "botMock",
				tooltip: "Makes the bots mock chatting players",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoAutoEZ",
				storeAs: "botAutoEZ",
				tooltip: "Makes the bots gloat about their kills",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoChAccuse",
				storeAs: "botCheatAccuse",
				tooltip: "Makes the bots accuse their killers when dying",
				botParam: true
			});
			tp.botTabs.pages[2].addSeparator();
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoSpam",
				storeAs: "botSpam",
				tooltip: "Makes the bots spam",
				botParam: true
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "SpamText",
				storeAs: "spamChatTextBot",
				tooltip: "The message spammed by the bots",
				defaultValue: "ЅtateFarm Client On Top! ",
				botParam: true
			});
			tp.botTabs.pages[2].addSeparator();
			initModule({
				location: tp.botTabs.pages[2],
				title: "SelectWeapon",
				storeAs: "botWeapon",
				tooltip: "Makes the bots pick a weapon",
				dropdown: [
					{
						text: "EggK-47",
						value: "eggk47"
					},
					{
						text: "Scrambler",
						value: "scrambler"
					},
					{
						text: "Free Ranger",
						value: "freeranger"
					},
					{
						text: "RPEGG",
						value: "rpegg"
					},
					{
						text: "Whipper",
						value: "whipper"
					},
					{
						text: "Crackshot",
						value: "crackshot"
					},
					{
						text: "Tri-Hard",
						value: "trihard"
					},
					{
						text: "Randomised",
						value: "random"
					}
				],
				botParam: true,
				defaultValue: "eggk47",
				enableConditions: [["botRespawn", true]]
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoMove",
				storeAs: "botAutoMove",
				tooltip: "Makes the bots move around",
				botParam: true,
				enableConditions: [["botRespawn", true]]
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoShoot",
				storeAs: "botAutoShoot",
				tooltip: "Makes the bot autoshoot.",
				botParam: true,
				enableConditions: [["botRespawn", true]]
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "DoAimbot",
				storeAs: "botAimbot",
				tooltip: "Makes the bots have aimbot",
				botParam: true,
				enableConditions: [["botRespawn", true]]
			});
			initModule({
				location: tp.botTabs.pages[2],
				title: "UseMinAccuracy",
				storeAs: "botAccuracy",
				tooltip: "Makes the bots only fire if the spread is lower than the given value",
				slider: {
					min: 0,
					max: 1,
					step: .05
				},
				defaultValue: 0,
				botParam: true,
				enableConditions: [["botRespawn", true]]
			});
			initModule({
				location: tp.botTabs.pages[3],
				storeAs: "botOnline",
				tooltip: "Sex",
				monitor: 17.5,
				botParam: true
			});
			if (!AUTOMATED) try {
				if (!load("StateFarmConfigMainPanel") || reset === true) saveConfig();
				else {
					log("##############################################");
					tp.mainPanel.importPreset(load("StateFarmConfigMainPanel"));
					tp.botPanel.importPreset(load("StateFarmConfigBotPanel"));
					try {
						let specialItems = load("StateFarmConfigSpecialItems");
						if (specialItems) specialItems.forEach((item) => {
							change(item[0], item[1]);
							log(item[0], item[1]);
						});
					} catch (error) {}
				}
			} catch (error) {
				log("error in initmenu !AUTOMATED part thing, idk", error);
			}
			updateConfig();
			setTimeout(() => {
				if (AUTOMATED) tp.mainPanel.hidden = true;
				updateHiddenAndDisabled();
				let specialItems = load("StateFarmConfigSpecialItems");
				if (specialItems) specialItems.forEach((item) => {
					change(item[0], item[1]);
					log(item[0], item[1]);
				});
				unsafeWindow.document.querySelectorAll(".tp-lblv_l").forEach((label) => {
					label.addEventListener("mouseenter", () => {
						if (extract("tooltips")) {
							tooltipElement.innerText = tooltips[label.innerText] || "Tooltip parameter not found";
							tooltipElement.style.opacity = "1";
							const rect = label.getBoundingClientRect();
							tooltipElement.style.top = `${rect.top + window.scrollY - 12}px`;
							tooltipElement.style.left = `${rect.left + window.scrollX - tooltipElement.offsetWidth - 10}px`;
						}
					});
					label.addEventListener("mouseleave", () => {
						tooltipElement.style.opacity = "0";
					});
				});
			}, 500);
			menuInitiated = reset == "init" ? "init" : true;
			if (allowAccess) {
				const defaultSpamText = "dsc.gg/s𝖿network: " + menuTitle + " On Top! ";
				if (extract("spamChatText").includes("On Top!")) change("spamChatText", defaultSpamText);
				if (extract("spamChatTextBot").includes("On Top!")) change("spamChatTextBot", defaultSpamText);
				if (extract("fakeMessageText").includes("On Top!")) change("fakeMessageText", defaultSpamText);
				makeDraggable(tp.mainPanel.containerElem_);
				makeDraggable(tp.botPanel.containerElem_);
			}
		};
		const onContentLoaded = function() {
			log("StateFarm: initMenu()");
			initMenu("init");
			log("StateFarm: applyStylesAddElements()");
			applyStylesAddElements();
			const intervalId1 = setInterval(every15Seconds, 15e3);
			const intervalId2 = setInterval(everySecond, 1e3);
			const intervalId3 = setInterval(everyDecisecond, 100);
			applyStateFarmLogo();
			new MutationObserver(applyStateFarmLogo).observe(document.body, {
				subtree: true,
				childList: true
			});
		};
		const createPopup = function(text, type) {
			log("Creating Popup Type:", type, "With Text:", text);
			try {
				if (extract("popups")) {
					const messageContainer = document.getElementById("message-container");
					const messages = messageContainer.getElementsByClassName(scrambledMsgEl);
					if (messages.length > 5) messageContainer.removeChild(messages[0]);
					const clonedMsgElement = msgElement.cloneNode(true);
					clonedMsgElement.innerText = text;
					switch (type) {
						case "success":
							clonedMsgElement.style.border = "2px solid rgba(0, 255, 0, 0.5)";
							break;
						case "error":
							clonedMsgElement.style.border = "2px solid rgba(255, 0, 0, 0.5)";
							break;
					}
					clonedMsgElement.style.display = "none";
					const messageOffset = (messages.length + 1) * 50;
					clonedMsgElement.style.bottom = messageOffset + "px";
					clonedMsgElement.offsetWidth;
					clonedMsgElement.style.display = "";
					messageContainer.appendChild(clonedMsgElement);
					for (let i = messages.length - 1; i >= 0; i--) messages[i].style.bottom = (messages.length - i) * 50 - 40 + "px";
				}
			} catch (error) {
				console.error("An error occurred:", error);
				alert("Bollocks! If you're getting this message, injection probably failed. To solve this, perform CTRL+F5 - this performs a hard reload. If this does not work, contact the developers.");
			}
		};
		const createPrompt = function(text = "No text set", buttons = [], duration = 5e3) {
			unsafeWindow.BAWK.play("kotc_zonespawn");
			const promptElement = createStatefarmElement("div");
			promptElement.innerText = text;
			promptElement.setAttribute("style", `
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: #fff;
            background: rgba(0, 0, 0, 0.7);
            font-weight: normal;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            animation: msg 0.5s forwards, msg 0.5s reverse forwards ${duration / 1e3}s;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            font-family: 'Bahnschrift', sans-serif !important;
            font-size: 16px;
            z-index: 9999 !important;
            white-space: pre-wrap;
            width: 300px;
        `);
			const buttonContainer = createStatefarmElement("div");
			buttonContainer.setAttribute("style", "margin-top: 10px; pointer-events: auto; text-align: center;");
			const deleteButton = function() {
				try {
					document.body.removeChild(promptElement);
				} catch (error) {
					log("Error deleting prompt element:", error);
				}
			};
			buttons = [...buttons, [`Dismiss (${Math.ceil(duration / 1e3)}s)`, () => deleteButton()]];
			buttons.forEach(([buttonText, buttonFunction]) => {
				const button = createStatefarmElement("button");
				button.innerText = buttonText;
				button.setAttribute("style", `
                background: #6c757d;
                color: #fff;
                border: none;
                padding: 5px 10px;
                margin-right: 5px;
                border-radius: 3px;
                cursor: pointer;
                font-family: 'Bahnschrift', sans-serif !important;
            `);
				button.onclick = buttonFunction;
				buttonContainer.appendChild(button);
			});
			promptElement.appendChild(buttonContainer);
			document.body.appendChild(promptElement);
			setTimeout(() => {
				promptElement.style.opacity = "1";
			}, 100);
			setTimeout(() => {
				promptElement.style.opacity = "0";
				setTimeout(() => {
					deleteButton();
				}, 800);
			}, duration);
		};
		const createVarDataOverlay = function() {
			vardataOverlay = createStatefarmElement("div");
			vardataOverlay.style.position = "fixed";
			vardataOverlay.style.top = "0";
			vardataOverlay.style.left = "0";
			vardataOverlay.style.width = "100%";
			vardataOverlay.style.height = "100%";
			vardataOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
			vardataOverlay.style.zIndex = "9998";
			vardataOverlay.style.opacity = "0";
			vardataOverlay.style.transition = "opacity 0.4s ease-in-out";
			document.body.appendChild(vardataOverlay);
			setTimeout(() => {
				vardataOverlay.style.opacity = "1";
			}, 10);
		};
		const createVarDataPopup = function(vardataButtonsInfo) {
			closeVardataPopup = () => {
				vardataPopup.style.opacity = "0";
				vardataOverlay.style.opacity = "0";
				setTimeout(() => {
					document.body.removeChild(vardataPopup);
					document.body.removeChild(vardataOverlay);
					reloadPage();
				}, 400);
			};
			createVarDataOverlay();
			vardataPopup = createStatefarmElement("div");
			vardataPopup.style.position = "fixed";
			vardataPopup.style.left = "50%";
			vardataPopup.style.top = "50%";
			vardataPopup.style.width = "50em";
			vardataPopup.style.transform = "translate(-50%, -50%)";
			vardataPopup.style.color = "#fff";
			vardataPopup.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
			vardataPopup.style.padding = "15px";
			vardataPopup.style.borderRadius = "5px";
			vardataPopup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
			vardataPopup.style.border = "2px solid rgba(255, 255, 255, 0.5)";
			vardataPopup.style.pointerEvents = "auto";
			vardataPopup.style.opacity = "0";
			vardataPopup.style.transition = "opacity 0.4s ease-in-out";
			vardataPopup.style.fontFamily = "Nunito, sans-serif";
			vardataPopup.style.fontSize = "16px";
			vardataPopup.style.letterSpacing = "0.3px";
			vardataPopup.style.zIndex = "9999";
			vardataPopup.style.whiteSpace = "pre-wrap";
			vardataPopup.style.fontWeight = "bold";
			const title = "Valid VarData failed to load!";
			const message = `This is likely because you have two versions of StateFarm installed, or that your client needs to be updated.<br>
<strong>Steps to fix (go through until it works)</strong>
1. click the "load latest" button below (most likely fix)
2. confirm that you only have either Violentmonkey OR Tampermonkey with ONE version of StateFarm installed
3. update statefarm by clicking <a href="${GM_info.script.downloadURL}" target="_blank" style="color: #1944ff; text-decoration: underline; font-size: inherit;">here</a> and clicking the "Update" button
4. join our <a href="${discordURL}" target="_blank" style="color: #1944ff; text-decoration: underline; font-size: inherit;">Discord server</a> and opening a ticket in #sfc-support`;
			const image = `<img src='${itsOverURL}' style='width: 7%; height: 7%; margin-right: 15px; vertical-align: middle;'>`;
			vardataPopup.innerHTML = `${image}<strong style="font-size: 20px; margin-top: 5px;">${title}</strong><br><br>${message}<br><br>`;
			const vardataButtonContainer = createStatefarmElement("div");
			vardataButtonContainer.style.display = "flex";
			vardataButtonContainer.style.justifyContent = "space-between";
			vardataButtonContainer.style.marginTop = "10px";
			vardataButtonsInfo.forEach(({ id, text, isHighlighted, action }) => {
				const button = createStatefarmElement("button");
				button.id = id;
				button.innerHTML = text;
				button.style.padding = "7px 10px";
				button.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
				button.style.color = "#fff";
				button.style.border = "1px solid rgba(255, 255, 255, 0.5)";
				button.style.borderRadius = "5px";
				button.style.cursor = "pointer";
				button.style.transition = "background-color 0.2s";
				button.style.flex = "1";
				button.style.marginRight = "10px";
				button.style.fontSize = "14px";
				button.style.whiteSpace = "pre-wrap";
				button.style.fontFamily = vardataPopup.style.fontFamily;
				button.style.fontWeight = vardataPopup.style.fontWeight;
				button.addEventListener("click", action);
				button.addEventListener("mouseenter", () => button.style.backgroundColor = "rgba(255, 255, 255, 0.3)");
				button.addEventListener("mouseleave", () => button.style.backgroundColor = "rgba(255, 255, 255, 0.1)");
				if (isHighlighted) button.style.border = "3px solid lime";
				vardataButtonContainer.appendChild(button);
			});
			vardataPopup.appendChild(vardataButtonContainer);
			const setButtonState = function(buttonId, isEnabled) {
				const button = unsafeWindow.document.getElementById(buttonId);
				if (button) {
					button.disabled = !isEnabled;
					button.style.opacity = isEnabled ? "1" : "0.5";
					button.style.pointerEvents = isEnabled ? "auto" : "none";
				}
			};
			setTimeout(() => {
				vardataButtonsInfo.forEach(({ id, enabled }) => {
					setButtonState(id, enabled);
				});
			}, 200);
			const vardataCheckboxContainer = createStatefarmElement("div");
			vardataCheckboxContainer.style.display = "flex";
			vardataCheckboxContainer.style.justifyContent = "center";
			vardataCheckboxContainer.style.alignItems = "center";
			vardataCheckboxContainer.style.marginTop = "15px";
			vardataCheckboxContainer.style.fontSize = "16px";
			const checkbox = createStatefarmElement("input");
			checkbox.type = "checkbox";
			checkbox.id = "rememberCheckbox";
			checkbox.style.display = "none";
			const customCheckbox = createStatefarmElement("span");
			customCheckbox.style.width = "20px";
			customCheckbox.style.height = "20px";
			customCheckbox.style.display = "inline-block";
			customCheckbox.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
			customCheckbox.style.border = "1px solid rgba(255, 255, 255, 0.5)";
			customCheckbox.style.borderRadius = "5px";
			customCheckbox.style.marginRight = "8px";
			customCheckbox.style.cursor = "pointer";
			customCheckbox.addEventListener("click", () => {
				checkbox.checked = !checkbox.checked;
				change("vardataType", checkbox.checked ? 2 : 1);
				customCheckbox.style.backgroundColor = checkbox.checked ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.1)";
			});
			vardataCheckboxContainer.appendChild(customCheckbox);
			vardataCheckboxContainer.appendChild(checkbox);
			vardataCheckboxContainer.appendChild(document.createTextNode("Remember until next hash"));
			vardataPopup.appendChild(vardataCheckboxContainer);
			document.body.appendChild(vardataPopup);
			setTimeout(() => {
				vardataPopup.style.opacity = "1";
			}, 10);
		};
		const sfChatUsernameSet = function() {
			let tagAdded = `[Shell] ${extract("sfChatUsername")}`;
			if (sfChatUsername != tagAdded && sfChatIframe != void 0) {
				sfChatUsername = tagAdded;
				log(sfChatUsername);
				sfChatIframe.contentWindow.postMessage("SFCHAT-UPDATE" + JSON.stringify({ name: sfChatUsername }), "*");
			}
		};
		const startStateFarmChat = function(startHidden) {
			const makeChatDragable = function(element) {
				if (element.getAttribute("drag-true") != "true") {
					element.addEventListener("mousedown", function(e) {
						let offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
						let offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
						function mouseMoveHandler(e) {
							let newX = e.clientX - offsetX;
							let newY = e.clientY - offsetY;
							if (newX >= 0 && newX + element.getBoundingClientRect().width <= window.innerWidth) element.style.left = newX + "px";
							if (newY >= 0 && newY + element.getBoundingClientRect().height <= window.innerHeight) element.style.top = newY + "px";
						}
						function reset() {
							window.removeEventListener("mousemove", mouseMoveHandler);
							window.removeEventListener("mouseup", reset);
						}
						window.addEventListener("mousemove", mouseMoveHandler);
						window.addEventListener("mouseup", reset);
					});
					element.setAttribute("drag-true", "true");
				}
			};
			sfChatContainer = createStatefarmElement("div");
			sfChatContainer.style.padding = "1px";
			let title = createStatefarmElement("p");
			title.style.fontSize = "medium";
			title.style.color = "#D6D6D6";
			title.innerHTML = "StateFarm Chat";
			sfChatContainer.appendChild(title);
			sfChatContainer.style.backgroundColor = "#555";
			sfChatContainer.style.position = "absolute";
			sfChatContainer.style.borderRadius = "10px";
			sfChatContainer.style.textAlign = "center";
			sfChatContainer.style.top = "20px";
			sfChatContainer.style.left = "20px";
			sfChatContainer.style.zIndex = 1e8;
			if (startHidden) sfChatContainer.style.display = "none";
			const sendSettings = function() {
				let settings = GM_getValue("SFCHAT-SETTINGS");
				if (settings) sfChatIframe.contentWindow.postMessage("SFCHAT-SETTINGS" + settings, "*");
				else sfChatIframe.contentWindow.postMessage("SFCHAT-SETTINGS", "*");
			};
			makeChatDragable(sfChatContainer);
			sfChatIframe = createStatefarmElement("iframe");
			sfChatIframe.setAttribute("src", sfChatURL);
			sfChatIframe.id = "sfChat-iframe";
			sfChatIframe.setAttribute("style", "width: 600px; height:700px; z-index: 10000;");
			sfChatContainer.appendChild(sfChatIframe);
			document.getElementsByTagName("body")[0].appendChild(sfChatContainer);
			const startTimeout = setTimeout(function() {
				log("settings");
				sendSettings();
				let nameChange = setTimeout(function() {
					sfChatUsername = `[Shell] ${extract("sfChatUsername")}`;
					sfChatIframe.contentWindow.postMessage("SFCHAT-UPDATE" + JSON.stringify({ name: sfChatUsername }), "*");
				}, 500);
			}, 1e3);
			unsafeWindow.addEventListener("message", (e) => {
				if (typeof e.data == "string") {
					if (e.data.startsWith("SFCHAT-UPDATE")) GM_setValue("SFCHAT-SETTINGS", e.data.replace(/SFCHAT-UPDATE/gm, ""));
					if (e.data.startsWith("SFCHAT-REQUEST")) sendSettings();
					if (e.data.startsWith("SFCHAT-MESSAGE")) {
						let stringMessage = e.data.replace(/SFCHAT-MESSAGE/gm, "");
						let message = JSON.parse(stringMessage);
						if (extract("sfChatNotifications") && message.user && message.message && sfChatContainer.style.display == "none") {
							if (message.message.length <= 50) createPopup(message.user.name + ": " + message.message);
							else createPopup(message.user.name + ": " + message.message.substring(0, 50) + "...");
							if (extract("sfChatNotificationSound")) unsafeWindow.BAWK.play("grenade_cellphone");
						}
						if (extract("sfChatInvitations")) {
							let uppercaseMsg = message.message.toUpperCase();
							const findCode = (input) => {
								const allMatches = input.match(/(?:[A-Z]{4}-[A-Z]{4}-[A-Z]{4})/g);
								if (allMatches) {
									for (const match of allMatches) if (/[A-z]/.test(match)) return match;
								}
								return null;
							};
							let foundCode = findCode(uppercaseMsg);
							if (foundCode) createPrompt(`INVITE! User "${message.user.name}" has invited you to join game "${foundCode}"! (via SFChat)`, [["JOIN", () => {
								change("leaveGame");
								setTimeout(() => {
									vueApp.externPlayObject(2, vueApp.currentGameType, vueApp.playerName, "", foundCode);
								}, 500);
							}]], 1e4);
						}
					}
				}
			});
		};
		const applyStylesAddElements = function(themeToApply = "null") {
			const head = document.head || document.getElementsByTagName("head").pages[0];
			if (AUTOMATED) {
				automatedBorder = createStatefarmElement("div");
				automatedBorder.setAttribute("id", "automated-border");
				document.body.appendChild(automatedBorder);
				const automatedBorderStyle = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 5px solid rgba(255, 0, 0, 1);
                pointer-events: none;
                z-index: 999999999;
            `;
				automatedBorder.style.cssText = automatedBorderStyle;
			}
			const styleElement = createStatefarmElement("style");
			styleElement.textContent = `
            @font-face {
                font-family: "Bahnschrift";
                src: url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.eot");
                src: url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.eot?#iefix")format("embedded-opentype"),
                url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.woff2")format("woff2"),
                url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.woff")format("woff"),
                url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.ttf")format("truetype"),
                url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.svg#Bahnschrift")format("svg");
            }
            .tp-dfwv, .tp-sglv_i, .tp-rotv_t, .tp-fldv_t, .tp-ckbv_l, .tp-txtv_i, .tp-lblv_l, .tp-tbiv_t, .coords, .gameinfo, .playerstats, .playerinfo, .performanceinfo, .automated {
                font-family: 'Bahnschrift', sans-serif !important;
                font-size: 16px;
                z-index: 9999 !important;
            }
            .tp-rotv_m, .tp-fldv_m {
                display: none;
            }
            .tp-dfwv {
                min-width: 300px;
            }
            .tp-rotv_t {
                cursor: move;
                user-select: none;
            }
            .tp-tbiv_t {
                font-family: 'Bahnschrift';
                font-size: 13px;
            }
            .tp-lblv_v, .tp-lstv, .tp-btnv_b, .tp-btnv_t {
                font-family: 'Bahnschrift';
                font-size: 12px;
            }
            .tp-mllv {
                font-family: 'Bahnschrift';
                font-size: 12px;
                letter-spacing: -1px;
                width: 290px;
                margin-left: -130px !important;
            }
            .tp-mllv_i::-webkit-scrollbar-thumb {
                background-color: #888; /* Adjust the color as needed */
                border: 2px solid #555; /* Change the color of the border and adjust the width as needed */
            }
            .tp-mllv_i::-webkit-scrollbar-track {
                background-color: #000; /* Change the color as needed */
            }
            .tp-lblv_l {
                font-size: 14px;
                letter-spacing: -1px;
            }
            .tp-btnv {
                width: 100px;
                margin-left: 60px !important;
            }
            .tp-ckbv_w {
                margin-left: 4px !important;
            }
            .tp-dfwv, .tp-rotv, .tp-rotv_c, .tp-fldv, .tp-fldv_c, .tp-lblv, .tp-lstv, .tp-btnv, .tp-sldv {
                z-index: 99999 !important;
                white-space: nowrap !important;
            }
            @keyframes msg {
                from {
                    transform: translate(-120%, 0);
                    opacity: 0;
                }
                to {
                    transform: none;
                    opacity: 1;
                }
            }
        `;
			document.head.appendChild(styleElement);
			applyTheme();
			msgElement = createStatefarmElement("div");
			scrambledMsgEl = getScrambled();
			msgElement.classList.add(scrambledMsgEl);
			msgElement.setAttribute("style", `
            position: absolute;
            left: 10px;
            color: #fff;
            background: rgba(0, 0, 0, 0.7);
            font-weight: normal;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            animation: msg 0.5s forwards, msg 0.5s reverse forwards 3s;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            font-family: 'Bahnschrift', sans-serif !important;
            font-size: 16px;
            z-index: 9999 !important;
        `);
			document.body.appendChild(msgElement);
			msgElement.style.display = "none";
			const messageContainer = createStatefarmElement("div");
			messageContainer.id = "message-container";
			document.body.appendChild(messageContainer);
			tooltipElement = createStatefarmElement("div");
			tooltipElement.style.cssText = `
            position: absolute;
            color: #fff;
            background: rgba(0, 0, 0, 0.7);
            font-weight: normal;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            animation: fadeIn 0.5s forwards, fadeOut 0.5s reverse forwards 3s;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            font-family: 'Bahnschrift', sans-serif !important;
            font-size: 16px;
            z-index: 9999999 !important;
            max-width: 300px;
            word-wrap: break-word;
        `;
			document.body.appendChild(tooltipElement);
			coordElement = createStatefarmElement("div");
			coordElement.classList.add("coords");
			coordElement.setAttribute("style", `
            position: fixed;
            top: 0px;
            left: 0px;
            height: auto;
            max-height: 30px;
            min-height: 30px;
            text-wrap: nowrap;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            font-weight: bolder;
            padding: 2px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            z-index: 999999;
        `);
			document.body.appendChild(coordElement);
			coordElement.style.display = "none";
			gameInfoElement = createStatefarmElement("div");
			gameInfoElement.classList.add("gameinfo");
			gameInfoElement.setAttribute("style", `
            position: fixed;
            bottom: 0px;
            left: 0px;
            height: auto;
            max-height: 30px;
            min-height: 30px;
            text-wrap: nowrap;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            font-weight: bolder;
            padding: 2px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            z-index: 999999;
        `);
			document.body.appendChild(gameInfoElement);
			gameInfoElement.style.display = "none";
			playerstatsElement = createStatefarmElement("div");
			playerstatsElement.classList.add("playerstats");
			playerstatsElement.setAttribute("style", `
            position: absolute;
            top: 20px;
            left: 280px;
            height: auto;
            min-height: 30px;
            text-wrap: nowrap;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            font-weight: bolder;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            z-index: 999999;
        `);
			document.body.appendChild(playerstatsElement);
			playerstatsElement.style.display = "none";
			playerinfoElement = createStatefarmElement("div");
			playerinfoElement.classList.add("playerinfo");
			playerinfoElement.setAttribute("style", `
            position: absolute;
            top: 80%;
            left: 90%;
            height: auto;
            max-height: 102;
            text-wrap: nowrap;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            font-weight: bolder;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            z-index: 999999;
        `);
			document.body.appendChild(playerinfoElement);
			playerinfoElement.style.display = "none";
			performanceElement = createStatefarmElement("div");
			performanceElement.classList.add("performanceinfo");
			performanceElement.setAttribute("style", `
            position: absolute;
            top: 35%;
            left: 90%;
            height: auto;
            max-height: 102;
            text-wrap: nowrap;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            font-weight: bolder;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            z-index: 999999;
        `);
			document.body.appendChild(performanceElement);
			performanceElement.style.display = "none";
			firstUseElement = createStatefarmElement("div");
			firstUseElement.classList.add("firstuse");
			firstUseElement.setAttribute("style", `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 99999999;
            display: flex;
            justify-content: center;
            align-items: center;
        `);
			document.body.appendChild(firstUseElement);
			firstUseElement.style.display = "none";
			redCircle = createStatefarmElement("div");
			redCircle.style.position = "fixed";
			redCircle.style.width = "5px";
			redCircle.style.height = "5px";
			redCircle.style.borderRadius = "50%";
			redCircle.style.backgroundColor = "red";
			redCircle.style.transform = "translate(-50%, -50%)";
			document.body.appendChild(redCircle);
			minangleCircle = createStatefarmElement("div");
			minangleCircle.style.position = "fixed";
			minangleCircle.style.borderRadius = "100%";
			minangleCircle.style.border = "thin solid red";
			minangleCircle.style.transform = "translate(50%, 50%)";
			minangleCircle.style.pointerEvents = "none";
			document.body.appendChild(minangleCircle);
			try {
				hudElementPositions = load("HUD-Positions");
				coordElement.style.top = hudElementPositions.coordElement.top + "px";
				gameInfoElement.style.top = hudElementPositions.gameInfoElement.top + "px";
				playerstatsElement.style.top = hudElementPositions.playerstatsElement.top + "px";
				playerinfoElement.style.top = hudElementPositions.playerinfoElement.top + "px";
				performanceElement.style.top = hudElementPositions.performanceElement.top + "px";
				coordElement.style.left = hudElementPositions.coordElement.left + "px";
				gameInfoElement.style.left = hudElementPositions.gameInfoElement.left + "px";
				playerstatsElement.style.left = hudElementPositions.playerstatsElement.left + "px";
				playerinfoElement.style.left = hudElementPositions.playerinfoElement.left + "px";
				performanceElement.style.left = hudElementPositions.performanceElement.left + "px";
			} catch (error) {
				console.error(error);
				hudElementPositions = {};
				hudElementPositions.coordElement = {
					top: coordElement.getBoundingClientRect().top,
					left: coordElement.getBoundingClientRect().left
				};
				hudElementPositions.gameInfoElement = {
					top: gameInfoElement.getBoundingClientRect().top,
					left: gameInfoElement.getBoundingClientRect().left
				};
				hudElementPositions.playerstatsElement = {
					top: playerstatsElement.getBoundingClientRect().top,
					left: playerstatsElement.getBoundingClientRect().left
				};
				hudElementPositions.playerinfoElement = {
					top: playerinfoElement.getBoundingClientRect().top,
					left: playerinfoElement.getBoundingClientRect().left
				};
				hudElementPositions.performanceElement = {
					top: performanceElement.getBoundingClientRect().top,
					left: performanceElement.getBoundingClientRect().left
				};
				save("HUD-Positions", hudElementPositions);
			}
		};
		const makeDraggable = function(element, notMenu) {
			if (element) {
				let offsetX, offsetY;
				element.addEventListener("mousedown", function(e) {
					const dragElement = function(e) {
						const x = (e.clientX - offsetX) / unsafeWindow.innerWidth * 100;
						const y = (e.clientY - offsetY) / unsafeWindow.innerHeight * 100;
						const maxX = 100 - element.offsetWidth / unsafeWindow.innerWidth * 100;
						const maxY = 100 - element.offsetHeight / unsafeWindow.innerHeight * 100;
						element.style.left = `${Math.max(0, Math.min(x, maxX))}%`;
						element.style.top = `${Math.max(0, Math.min(y, maxY))}%`;
					};
					if (notMenu || e.target.classList.contains("tp-rotv_t")) {
						offsetX = e.clientX - element.getBoundingClientRect().left;
						offsetY = e.clientY - element.getBoundingClientRect().top;
						document.addEventListener("mousemove", dragElement);
						document.addEventListener("mouseup", function() {
							document.removeEventListener("mousemove", dragElement);
						});
						e.preventDefault();
					}
				});
			}
		};
		const makeHudElementDragable = function(element) {
			if (element.getAttribute("drag-true") != "true") {
				element.addEventListener("mousedown", function(e) {
					let offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
					let offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
					function mouseMoveHandler(e) {
						let newX = e.clientX - offsetX;
						let newY = e.clientY - offsetY;
						if (newX >= 0 && newX + element.getBoundingClientRect().width <= window.innerWidth) element.style.left = newX + "px";
						if (newY >= 0 && newY + element.getBoundingClientRect().height <= window.innerHeight) element.style.top = newY + "px";
					}
					function reset() {
						window.removeEventListener("mousemove", mouseMoveHandler);
						window.removeEventListener("mouseup", reset);
						hudElementPositions.coordElement = {
							"top": coordElement.getBoundingClientRect().top,
							"left": coordElement.getBoundingClientRect().left
						};
						hudElementPositions.gameInfoElement = {
							"top": gameInfoElement.getBoundingClientRect().top,
							"left": gameInfoElement.getBoundingClientRect().left
						};
						hudElementPositions.playerstatsElement = {
							"top": playerstatsElement.getBoundingClientRect().top,
							"left": playerstatsElement.getBoundingClientRect().left
						};
						hudElementPositions.playerinfoElement = {
							"top": playerinfoElement.getBoundingClientRect().top,
							"left": playerinfoElement.getBoundingClientRect().left
						};
						hudElementPositions.performanceElement = {
							"top": performanceElement.getBoundingClientRect().top,
							"left": performanceElement.getBoundingClientRect().left
						};
						save("HUD-Positions", hudElementPositions);
					}
					window.addEventListener("mousemove", mouseMoveHandler);
					window.addEventListener("mouseup", reset);
				});
				element.setAttribute("drag-true", "true");
			}
		};
		const applyTheme = function(setTheme) {
			setTheme = setTheme || extract("themeType") || "defaultTheme";
			let rootTheme;
			switch (setTheme) {
				case "defaultTheme":
					rootTheme = `
                --tp-base-background-color: hsla(230, 7%, 17%, 1.00);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);
                --tp-button-background-color: hsla(230, 7%, 70%, 1.00);
                --tp-button-background-color-active: hsla(230, 7%, 85%, 1.00);
                --tp-button-background-color-focus: hsla(230, 7%, 80%, 1.00);
                --tp-button-background-color-hover: hsla(230, 7%, 75%, 1.00);
                --tp-button-foreground-color: hsla(230, 7%, 17%, 1.00);
                --tp-container-background-color: hsla(230, 7%, 75%, 0.10);
                --tp-container-background-color-active: hsla(230, 7%, 75%, 0.25);
                --tp-container-background-color-focus: hsla(230, 7%, 75%, 0.20);
                --tp-container-background-color-hover: hsla(230, 7%, 75%, 0.15);
                --tp-container-foreground-color: hsla(230, 7%, 75%, 1.00);
                --tp-groove-foreground-color: hsla(230, 7%, 75%, 0.10);
                --tp-input-background-color: hsla(230, 7%, 75%, 0.10);
                --tp-input-background-color-active: hsla(230, 7%, 75%, 0.25);
                --tp-input-background-color-focus: hsla(230, 7%, 75%, 0.20);
                --tp-input-background-color-hover: hsla(230, 7%, 75%, 0.15);
                --tp-input-foreground-color: hsla(230, 7%, 75%, 1.00);
                --tp-label-foreground-color: hsla(230, 7%, 75%, 0.70);
                --tp-monitor-background-color: hsla(230, 7%, 0%, 0.20);
                --tp-monitor-foreground-color: hsla(230, 7%, 75%, 0.70);`;
					break;
				case "icebergTheme":
					rootTheme = `
                --tp-base-background-color: hsla(230, 20%, 11%, 1.00);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);
                --tp-button-background-color: hsla(230, 10%, 80%, 1.00);
                --tp-button-background-color-active: hsla(230, 10%, 95%, 1.00);
                --tp-button-background-color-focus: hsla(230, 10%, 90%, 1.00);
                --tp-button-background-color-hover: hsla(230, 10%, 85%, 1.00);
                --tp-button-foreground-color: hsla(230, 20%, 11%, 1);
                --tp-container-background-color: hsla(230, 25%, 16%, 1.00);
                --tp-container-background-color-active: hsla(230, 25%, 31%, 1.00);
                --tp-container-background-color-focus: hsla(230, 25%, 26%, 1.00);
                --tp-container-background-color-hover: hsla(230, 25%, 21%, 1.00);
                --tp-container-foreground-color: hsla(230, 10%, 80%, 1.00);
                --tp-groove-foreground-color: hsla(230, 20%, 8%, 1.00);
                --tp-input-background-color: hsla(230, 20%, 8%, 1.00);
                --tp-input-background-color-active: hsla(230, 28%, 23%, 1.00);
                --tp-input-background-color-focus: hsla(230, 28%, 18%, 1.00);
                --tp-input-background-color-hover: hsla(230, 20%, 13%, 1.00);
                --tp-input-foreground-color: hsla(230, 10%, 80%, 1.00);
                --tp-label-foreground-color: hsla(230, 12%, 48%, 1.00);
                --tp-monitor-background-color: hsla(230, 20%, 8%, 1.00);
                --tp-monitor-foreground-color: hsla(230, 12%, 48%, 1.00);`;
					break;
				case "jetblackTheme":
					rootTheme = `
                --tp-base-background-color: hsla(0, 0%, 0%, 1.00);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);
                --tp-button-background-color: hsla(0, 0%, 70%, 1.00);
                --tp-button-background-color-active: hsla(0, 0%, 85%, 1);
                --tp-button-background-color-focus: hsla(0, 0%, 80%, 1.00);
                --tp-button-background-color-hover: hsla(0, 0%, 75%, 1.00);
                --tp-button-foreground-color: hsla(0, 0%, 0%, 1.00);
                --tp-container-background-color: hsla(0, 0%, 10%, 1.00);
                --tp-container-background-color-active: hsla(0, 0%, 25%, 1.00);
                --tp-container-background-color-focus: hsla(0, 0%, 20%, 1.00);
                --tp-container-background-color-hover: hsla(0, 0%, 15%, 1.00);
                --tp-container-foreground-color: hsla(0, 0%, 50%, 1.00);
                --tp-groove-foreground-color: hsla(0, 0%, 10%, 1.00);
                --tp-input-background-color: hsla(0, 0%, 10%, 1.00);
                --tp-input-background-color-active: hsla(0, 0%, 25%, 1.00);
                --tp-input-background-color-focus: hsla(0, 0%, 20%, 1.00);
                --tp-input-background-color-hover: hsla(0, 0%, 15%, 1.00);
                --tp-input-foreground-color: hsla(0, 0%, 70%, 1.00);
                --tp-label-foreground-color: hsla(0, 0%, 50%, 1.00);
                --tp-monitor-background-color: hsla(0, 0%, 8%, 1.00);
                --tp-monitor-foreground-color: hsla(0, 0%, 48%, 1.00);`;
					break;
				case "lightTheme":
					rootTheme = `
                --tp-base-background-color: hsla(230, 5%, 90%, 1.00);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.10);
                --tp-button-background-color: hsla(230, 7%, 75%, 1.00);
                --tp-button-background-color-active: hsla(230, 7%, 60%, 1.00);
                --tp-button-background-color-focus: hsla(230, 7%, 65%, 1.00);
                --tp-button-background-color-hover: hsla(230, 7%, 70%, 1.00);
                --tp-button-foreground-color: hsla(230, 10%, 30%, 1.00);
                --tp-container-background-color: hsla(230, 15%, 30%, 0.20);
                --tp-container-background-color-active: hsla(230, 15%, 30%, 0.32);
                --tp-container-background-color-focus: hsla(230, 15%, 30%, 0.28);
                --tp-container-background-color-hover: hsla(230, 15%, 30%, 0.24);
                --tp-container-foreground-color: hsla(230, 10%, 30%, 1.00);
                --tp-groove-foreground-color: hsla(230, 15%, 30%, 0.10);
                --tp-input-background-color: hsla(230, 15%, 30%, 0.10);
                --tp-input-background-color-active: hsla(230, 15%, 30%, 0.22);
                --tp-input-background-color-focus: hsla(230, 15%, 30%, 0.18);
                --tp-input-background-color-hover: hsla(230, 15%, 30%, 0.14);
                --tp-input-foreground-color: hsla(230, 10%, 30%, 1.00);
                --tp-label-foreground-color: hsla(230, 10%, 30%, 0.70);
                --tp-monitor-background-color: hsla(230, 15%, 30%, 0.10);
                --tp-monitor-foreground-color: hsla(230, 10%, 30%, 0.50);`;
					break;
				case "retroTheme":
					rootTheme = `
                --tp-base-background-color: hsla(40, 3%, 90%, 1.00);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.30);
                --tp-button-background-color: hsla(40, 3%, 70%, 1.00);
                --tp-button-background-color-active: hsla(40, 3%, 55%, 1.00);
                --tp-button-background-color-focus: hsla(40, 3%, 60%, 1.00);
                --tp-button-background-color-hover: hsla(40, 3%, 65%, 1.00);
                --tp-button-foreground-color: hsla(40, 3%, 20%, 1.00);
                --tp-container-background-color: hsla(40, 3%, 70%, 1.00);
                --tp-container-background-color-active: hsla(40, 3%, 55%, 1.00);
                --tp-container-background-color-focus: hsla(40, 3%, 60%, 1.00);
                --tp-container-background-color-hover: hsla(40, 3%, 65%, 1.00);
                --tp-container-foreground-color: hsla(40, 3%, 20%, 1.00);
                --tp-groove-foreground-color: hsla(40, 3%, 40%, 1.00);
                --tp-input-background-color: hsla(120, 3%, 20%, 1.00);
                --tp-input-background-color-active: hsla(120, 3%, 35%, 1.00);
                --tp-input-background-color-focus: hsla(120, 3%, 30%, 1.00);
                --tp-input-background-color-hover: hsla(120, 3%, 25%, 1.00);
                --tp-input-foreground-color: hsla(120, 40%, 60%, 1.00);
                --tp-label-foreground-color: hsla(40, 3%, 50%, 1.00);
                --tp-monitor-background-color: hsla(120, 3%, 20%, 1.00);
                --tp-monitor-foreground-color: hsla(120, 40%, 60%, 0.80);`;
					break;
				case "translucentTheme":
					rootTheme = `
                --tp-base-background-color: hsla(0, 0%, 10%, 0.80);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.20);
                --tp-button-background-color: hsla(0, 0%, 80%, 1.00);
                --tp-button-background-color-active: hsla(0, 0%, 100%, 1.00);
                --tp-button-background-color-focus: hsla(0, 0%, 95%, 1.00);
                --tp-button-background-color-hover: hsla(0, 0%, 85%, 1.00);
                --tp-button-foreground-color: hsla(0, 0%, 0%, 0.80);
                --tp-container-background-color: hsla(0, 0%, 0%, 0.30);
                --tp-container-background-color-active: hsla(0, 0%, 0%, 0.60);
                --tp-container-background-color-focus: hsla(0, 0%, 0%, 0.50);
                --tp-container-background-color-hover: hsla(0, 0%, 0%, 0.40);
                --tp-container-foreground-color: hsla(0, 0%, 100%, 0.50);
                --tp-groove-foreground-color: hsla(0, 0%, 0%, 0.20);
                --tp-input-background-color: hsla(0, 0%, 0%, 0.30);
                --tp-input-background-color-active: hsla(0, 0%, 0%, 0.60);
                --tp-input-background-color-focus: hsla(0, 0%, 0%, 0.50);
                --tp-input-background-color-hover: hsla(0, 0%, 0%, 0.40);
                --tp-input-foreground-color: hsla(0, 0%, 100%, 0.50);
                --tp-label-foreground-color: hsla(0, 0%, 100%, 0.50);
                --tp-monitor-background-color: hsla(0, 0%, 0%, 0.30);
                --tp-monitor-foreground-color: hsla(0, 0%, 100%, 0.30);`;
					break;
				case "statefarmerTheme":
					rootTheme = `
                --tp-base-background-color: hsla(0, 80%, 40%, 1.00);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);
                --tp-button-background-color: hsla(0, 0%, 100%, 1.00);
                --tp-button-background-color-active: hsla(0, 0%, 85%, 1.00);
                --tp-button-background-color-focus: hsla(0, 0%, 90%, 1.00);
                --tp-button-background-color-hover: hsla(0, 0%, 95%, 1.00);
                --tp-button-foreground-color: hsla(230, 20%, 11%, 1.00);
                --tp-container-background-color: hsla(0, 0%, 0%, 0.20);
                --tp-container-background-color-active: hsla(0, 0%, 0%, 0.35);
                --tp-container-background-color-focus: hsla(0, 0%, 0%, 0.30);
                --tp-container-background-color-hover: hsla(0, 0%, 0%, 0.25);
                --tp-container-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-groove-foreground-color: hsla(0, 0%, 0%, 0.50);
                --tp-input-background-color: hsla(0, 0%, 0%, 0.50);
                --tp-input-background-color-active: hsla(0, 0%, 0%, 0.65);
                --tp-input-background-color-focus: hsla(0, 0%, 0%, 0.60);
                --tp-input-background-color-hover: hsla(0, 0%, 0%, 0.55);
                --tp-input-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-label-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-monitor-background-color: hsla(0, 0%, 0%, 0.50);
                --tp-monitor-foreground-color: hsla(0, 0%, 100%, 0.50);`;
					break;
				case "blurpleTheme":
					rootTheme = `
                --tp-base-background-color: hsla(255, 68%, 39%, 1.00);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);
                --tp-button-background-color: hsla(0, 0%, 100%, 1.00);
                --tp-button-background-color-active: hsla(0, 0%, 85%, 1.00);
                --tp-button-background-color-focus: hsla(0, 0%, 90%, 1.00);
                --tp-button-background-color-hover: hsla(0, 0%, 95%, 1.00);
                --tp-button-foreground-color: hsla(230, 20%, 11%, 1.00);
                --tp-container-background-color: hsla(0, 0%, 0%, 0.20);
                --tp-container-background-color-active: hsla(0, 0%, 0%, 0.35);
                --tp-container-background-color-focus: hsla(0, 0%, 0%, 0.30);
                --tp-container-background-color-hover: hsla(0, 0%, 0%, 0.25);
                --tp-container-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-groove-foreground-color: hsla(0, 0%, 0%, 0.50);
                --tp-input-background-color: hsla(0, 0%, 0%, 0.50);
                --tp-input-background-color-active: hsla(0, 0%, 0%, 0.65);
                --tp-input-background-color-focus: hsla(0, 0%, 0%, 0.60);
                --tp-input-background-color-hover: hsla(0, 0%, 0%, 0.55);
                --tp-input-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-label-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-monitor-background-color: hsla(0, 0%, 0%, 0.50);
                --tp-monitor-foreground-color: hsla(0, 0%, 100%, 0.50);`;
					break;
				case "shellFarmTheme":
					rootTheme = `
                --tp-base-background-color: hsla(198, 100%, 50%, 1.00);
                --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);
                --tp-button-background-color: hsla(0, 0%, 100%, 1.00);
                --tp-button-background-color-active: hsla(0, 0%, 85%, 1.00);
                --tp-button-background-color-focus: hsla(0, 0%, 90%, 1.00);
                --tp-button-background-color-hover: hsla(0, 0%, 95%, 1.00);
                --tp-button-foreground-color: hsla(230, 20%, 11%, 1.00);
                --tp-container-background-color: hsla(0, 0%, 0%, 0.20);
                --tp-container-background-color-active: hsla(0, 0%, 0%, 0.35);
                --tp-container-background-color-focus: hsla(0, 0%, 0%, 0.30);
                --tp-container-background-color-hover: hsla(0, 0%, 0%, 0.25);
                --tp-container-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-groove-foreground-color: hsla(0, 0%, 0%, 0.50);
                --tp-input-background-color: hsla(0, 0%, 0%, 0.50);
                --tp-input-background-color-active: hsla(0, 0%, 0%, 0.65);
                --tp-input-background-color-focus: hsla(0, 0%, 0%, 0.60);
                --tp-input-background-color-hover: hsla(0, 0%, 0%, 0.55);
                --tp-input-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-label-foreground-color: hsla(0, 0%, 100%, 0.90);
                --tp-monitor-background-color: hsla(0, 0%, 0%, 0.50);
                --tp-monitor-foreground-color: hsla(0, 0%, 100%, 0.50);`;
					break;
			}
			const styleElement = createStatefarmElement("style");
			styleElement.textContent = `
            :root { ${rootTheme} }
        `;
			document.head.appendChild(styleElement);
		};
		const temp = createStatefarmElement("div");
		temp.innerHTML = `
<style>
.notif {
    position: absolute;
    border: 5px solid lightblue;
    left: 70%;
    top: 85%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    font-weight: bolder;
    padding: 15px;
    z-index: 999999;
    border-radius: 2vw;
    overflow: auto;
    resize: both;
    backdrop-filter: blur(4px);
    overflow: hidden;
    min-width: 10vw;
    min-height: 4vh;
    pointer-events: none;
}
.MiniMap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height:1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    background: rgba(0, 0, 0, 0);
    font-weight: bolder;
    padding: 15px;
    z-index: 999999;
    border-radius: 2vw;
    overflow: auto;
    overflow: hidden;
    pointer-events: none;
}
.playerDot {
position: absolute;
width: 0;
height: 0;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 20px solid green;
color: white;
transform: translate(-50%, -50%);
z-index: 999999;
}
</style>
<div id = "minimap" class="MiniMap"></div>
<div id = "playerDot" class="playerDot">playerdot</div>
`;
		const mapEl = temp.querySelector(".MiniMap");
		let myPlayerDot = temp.querySelector(".playerDot");
		const playerDotsMap = new Map();
		window.addEventListener("DOMContentLoaded", async function() {
			while (temp.children.length > 0) document.body.appendChild(temp.children[0]);
		});
		function updateRadar(player, myPlayer) {
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;
			let xPosition = player[H.x] / 100 * windowWidth;
			xPosition += (windowWidth + xPosition) / 2;
			let yPosition = player[H.z] / 100 * windowHeight;
			yPosition += (windowHeight + yPosition) / 2;
			if (!player[H.playing] || !player) {
				if (playerDotsMap.has(player[H.uniqueId])) {
					const playerDotToRemove = playerDotsMap.get(player[H.uniqueId]);
					mapEl.removeChild(playerDotToRemove);
					playerDotsMap.delete(player[H.uniqueId]);
				}
			} else if (player === myPlayer) {
				myPlayerDot.style.left = `${xPosition}px`;
				myPlayerDot.style.top = `${yPosition}px`;
				myPlayerDot.textContent = myPlayer.name;
				myPlayerDot.style.transform = "translate(-50%, -50%) rotate(" + yawToDeg(player[H.yaw]) + "deg)";
			} else if (playerDotsMap.has(player[H.uniqueId])) {
				const existingPlayerDot = playerDotsMap.get(player[H.uniqueId]);
				existingPlayerDot.style.left = `${xPosition}px`;
				existingPlayerDot.style.top = `${yPosition}px`;
			} else {
				const newPlayerDot = createStatefarmElement("div");
				newPlayerDot.className = "playerDot";
				newPlayerDot.style.border = player.team === 1 ? "5px solid blue" : "5px solid red";
				newPlayerDot.style.left = `${xPosition}px`;
				newPlayerDot.style.top = `${yPosition}px`;
				newPlayerDot.textContent = player.name;
				mapEl.appendChild(newPlayerDot);
				playerDotsMap.set(player[H.uniqueId], newPlayerDot);
			}
		}
		function yawToDeg(yaw) {
			let yaw_degrees = yaw * 180 / Math.PI;
			if (yaw_degrees < 0) yaw_degrees += 360;
			return yaw_degrees;
		}
		const hslToRgb = function(h, s, l) {
			var r, g, b;
			if (s === 0) r = g = b = l;
			else {
				function hue2rgb(p, q, t) {
					if (t < 0) t += 1;
					if (t > 1) t -= 1;
					if (t < 1 / 6) return p + (q - p) * 6 * t;
					if (t < 1 / 2) return q;
					if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
					return p;
				}
				var q = l < .5 ? l * (1 + s) : l + s - l * s;
				var p = 2 * l - q;
				r = hue2rgb(p, q, h + 1 / 3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1 / 3);
			}
			return new L.BABYLON.Color3(r, g, b);
		};
		const getColor = function(colorSelectName, isRainbowName) {
			if (!extract(isRainbowName)) return extract(colorSelectName);
			const time = Date.now();
			const r = time % 1e3 / 1e3;
			const g = time % 2e3 / 2e3;
			const b = time % 3e3 / 3e3;
			const rS = time % 2e3 < 1e3 ? 1 - r : r;
			const gS = time % 4e3 < 2e3 ? 1 - g : g;
			const bS = time % 6e3 < 3e3 ? 1 - b : b;
			const rF = Math.round(rS * 255);
			const gF = Math.round(gS * 255);
			const bF = Math.round(bS * 255);
			const componentToHex = (c) => {
				var hex = c.toString(16);
				return hex.length == 1 ? "0" + hex : hex;
			};
			const rgbToHex = (r, g, b) => {
				return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
			};
			return rgbToHex(rF, gF, bF);
		};
		const applyStateFarmLogo = function() {
			if (extract("replaceLogo")) {
				const images = document.getElementsByTagName("img");
				let imgURL = replacementLogoURL;
				const month = new Date().getMonth();
				if (replacementLogoHalloweenURL && replacementLogoHalloweenURL !== "" && month == 9) imgURL = replacementLogoHalloweenURL;
				if (replacementLogoChristmasURL && replacementLogoChristmasURL !== "" && month == 11) imgURL = replacementLogoChristmasURL;
				if (replacementLogoNewYearsURL && replacementLogoNewYearsURL !== "" && month == 0) imgURL = replacementLogoNewYearsURL;
				for (let i = 0; i < images.length; i++) {
					const src = images[i].getAttribute("src");
					if (src && src.includes("img/logo.svg")) images[i].setAttribute("src", imgURL);
				}
				const logoDiv = document.getElementById("logo");
				if (logoDiv) {
					const logoImg = logoDiv.querySelector("img");
					if (logoImg) {
						logoImg.setAttribute("src", imgURL);
						logoImg.setAttribute("width", 300);
						logoImg.setAttribute("height", 104);
					}
				}
			}
		};
		const getSearchParam = function(param) {
			return new URLSearchParams(unsafeWindow.location.search).get(param);
		};
		const fetchTextContent = function(url) {
			try {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", url, false);
				xhr.send();
				if (xhr.status === 200) return xhr.responseText;
				else {
					console.error("Error fetching " + url);
					return null;
				}
			} catch (err) {
				return null;
			}
		};
		const findKeyByValue = function(obj, value) {
			for (const key in obj) if (obj[key] === value) return key;
			return null;
		};
		const newProxy = function() {
			unsafeWindow.location.replace(unsafeWindow.location.href.replace(unsafeWindow.location.hostname, proxyList[3]));
		};
		const unban = function() {
			log("STATEFARM UNBANNING...");
			updateAccountRecords();
			unsafeWindow.extern.signOut();
			accountStatus = "logged out";
			setTimeout(() => {
				const banPopup = document.getElementById("bannedPopup");
				if (banPopup) banPopup.style.display = "none";
			}, 1e4);
		};
		const reloadPage = function() {
			if (!__DEBUG__$1.avoidReload) unsafeWindow.location.reload(true);
		};
		const spamReport = function() {
			(async function() {
				const sleep = function(ms) {
					return new Promise((resolve) => setTimeout(resolve, ms));
				};
				let playerList = document.getElementById("playerList").children;
				for (let i = 0; i < playerList.length; i++) {
					playerList[i].click();
					await sleep(400);
					document.getElementsByClassName("ss_button btn_medium btn_red bevel_red")[0].click();
					await sleep(400);
					document.getElementsByClassName("ss_checkbox label")[randomInt(0, 3)].click();
					await sleep(400);
					document.getElementsByClassName("ss_button btn_medium btn_green bevel_green")[0].click();
					await sleep(400);
					document.getElementById("genericPopup").children[2].children[1].click();
				}
			})();
		};
		const broadcastToBots = function(command) {
			const commandTime = Date.now();
			log("StateFarm: sending command to bots:", command, "| at time:", commandTime);
			GM_setValue("StateFarm_Command", command);
			GM_setValue("StateFarm_CommandTime", commandTime);
		};
		const hexToRgb = function(hex) {
			hex = hex.replace(/^#/, "");
			const bigint = parseInt(hex, 16);
			const r = bigint >> 16 & 255;
			const g = bigint >> 8 & 255;
			const b = bigint & 255;
			return [
				r / 255,
				g / 255,
				b / 255
			];
		};
		const fadeBetweenColors = function(color1, color2, progress) {
			const rgb1 = hexToRgb(color1);
			const rgb2 = hexToRgb(color2);
			return [
				rgb1[0] + (rgb2[0] - rgb1[0]) * progress,
				rgb1[1] + (rgb2[1] - rgb1[1]) * progress,
				rgb1[2] + (rgb2[2] - rgb1[2]) * progress
			];
		};
		const distancePlayers = function(player, yMultiplier) {
			if (player && player[H.actor] && player[H.actor][H.mesh]) {
				yMultiplier = yMultiplier || 1;
				let vector = getDirectionVectorFacingTarget(player);
				return Math.hypot(vector.x, vector.y * yMultiplier, vector.z);
			} else log("fuck2", player);
			return 0;
		};
		const lerp = function(start, end, alpha) {
			return (1 - alpha) * start + alpha * end;
		};
		const setPrecision = function(value) {
			return Math.round(value * 8192) / 8192;
		};
		const calculateYaw = function(pos) {
			return setPrecision(Math.mod(Math.atan2(pos.x, pos.z), Math.PI2));
		};
		const calculatePitch = function(pos) {
			return setPrecision(-Math.atan2(pos.y, Math.hypot(pos.x, pos.z)) % 1.5);
		};
		const getAngularDifference = function(obj1, obj2) {
			return Math.abs(obj1[H.yaw] - obj2.yawReal) + Math.abs(obj1[H.pitch] - obj2.pitchReal);
		};
		const getDirectionVectorFacingTarget = function(target, vectorPassed, offsetY) {
			if (vectorPassed || target && target[H.actor] && target[H.actor][H.mesh]) {
				target = vectorPassed ? target : target[H.actor][H.mesh].position;
				offsetY = offsetY || 0;
				return {
					x: -(target.x - ss.MYPLAYER[H.actor][H.mesh].position.x),
					y: -(target.y - ss.MYPLAYER[H.actor][H.mesh].position.y + offsetY),
					z: -(target.z - ss.MYPLAYER[H.actor][H.mesh].position.z)
				};
			} else {
				log("fuck");
				return {
					x: 0,
					y: 0,
					z: 0
				};
			}
		};
		const deg2rad = function(deg) {
			return deg * (Math.PI / 180);
		};
		const reverseString = function(str) {
			return str.split("").reverse().join("");
		};
		const isPartialMatch = function(array, searchString) {
			return array.some((item) => item !== "" && searchString.toLowerCase().includes(item.toLowerCase()));
		};
		const findBadgesForUsername = function(username) {
			let found = [];
			if (badgeList && username) {
				username = username.toLowerCase().replaceAll("_", "").replaceAll(" ", "");
				for (const [key, userList] of Object.entries(badgeList)) for (const user of userList) if (username.includes(user.toLowerCase())) found.push(key);
			}
			return found;
		};
		const playAudio = function(name, panner, contextName) {
			contextName = findStringInLists(divertContexts, name) || "OTHER" + randomInt(1, 9);
			let audioContext;
			audioContext = audioContexts[contextName];
			let source = audioContext.createBufferSource();
			source.buffer = soundsSFC[name];
			const newPanner = audioContext.createPanner();
			audioContext.listener.setPosition(0, 0, 0);
			if (panner) {
				newPanner.context.listener.setPosition(panner.context.listener.positionX.value, panner.context.listener.positionY.value, panner.context.listener.positionZ.value);
				newPanner.setPosition(panner.context.listener.positionX.value - (panner.context.listener.positionX.value - panner.positionX.value) * extract("distanceMult"), panner.context.listener.positionY.value - (panner.context.listener.positionY.value - panner.positionY.value) * extract("distanceMult"), panner.context.listener.positionZ.value - (panner.context.listener.positionZ.value - panner.positionZ.value) * extract("distanceMult"));
				newPanner.setOrientation(panner.orientationX.value, panner.orientationY.value, panner.orientationZ.value);
				newPanner.refDistance = panner.refDistance;
				newPanner.maxDistance = panner.maxDistance;
				newPanner.rolloffFactor = panner.rolloffFactor;
				newPanner.coneInnerAngle = panner.coneInnerAngle;
				newPanner.coneOuterAngle = panner.coneOuterAngle;
				newPanner.coneOuterGain = panner.coneOuterGain;
			}
			if (audioContext.state === "suspended") audioContext.resume();
			source.connect(newPanner);
			newPanner.connect(audioContext.destination);
			source.start();
		};
		const playerMatchesList = function(array, player) {
			let nameMatched = isPartialMatch(array, player.name);
			let idMatched = isPartialMatch(array, player[H.uniqueId]);
			return nameMatched || idMatched;
		};
		const randomInt = function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};
		clientID = getScrambled() + "noID";
		const createAnonFunction = function(name, func) {
			const funcName = getScrambled();
			unsafeWindow[funcName] = func;
			unsafeWindow[funcName] = function() {
				try {
					return func.apply(this, arguments);
				} catch (error) {
					log("Error in anonymous function:", error);
				}
			};
			F[name] = unsafeWindow[funcName];
			functionNames[name] = funcName;
		};
		const processChatItem = function(text, playerName, playerTeam, highlightColor) {
			let chatItem = createStatefarmElement("div");
			let playerNameSpan = createStatefarmElement("span");
			let playerInfoContainer = createStatefarmElement("div");
			let serverIcon = createStatefarmElement("i");
			chatItem.classList.add("chat-item");
			playerInfoContainer.style.display = "inline-block";
			playerNameSpan.classList.add("chat-player-name", "ss_marginright_xs");
			playerNameSpan.textContent = playerName + " ";
			playerInfoContainer.style.color = ss.teamColors.text[playerTeam];
			playerInfoContainer.appendChild(serverIcon);
			playerInfoContainer.appendChild(playerNameSpan);
			let messageSpan = createStatefarmElement("span");
			messageSpan.innerHTML = text;
			chatItem.style.fontStyle = "italic";
			messageSpan.style.backgroundColor = highlightColor;
			playerInfoContainer.style.backgroundColor = highlightColor;
			chatItem.appendChild(playerInfoContainer);
			chatItem.appendChild(messageSpan);
			document.getElementById("chatOut").appendChild(chatItem);
			if (document.querySelector(".chat-container")) document.querySelector(".chat-container").scrollTop = document.querySelector(".chat-container").scrollHeight;
		};
		var vertexVector1, vertexVector2, vertexVector3, vertexVector4, vertexVector5, vertexVector6, vertexVector7, vertexVector8;
		const updateOrCreateLinesESP = function(object, type, color) {
			let newPosition, newScene, newParent;
			if (type == "playerESP") {
				newPosition = object[H.actor][H.mesh].position;
				newScene = object[H.actor].scene;
				newParent = object[H.actor][H.mesh];
			} else if (type == "pPredESP") {
				newPosition = object.getAbsolutePosition();
				newScene = object.getScene();
				newParent = object;
			} else {
				newPosition = object.position;
				newScene = object._scene;
				newParent = object;
			}
			if (!object.generatedESP) {
				const tracerLines = L.BABYLON.MeshBuilder.CreateLines("tracerLines", { points: [newPosition, crosshairsPosition] }, newScene);
				tracerLines.color = new L.BABYLON.Color3(1, 1, 1);
				tracerLines[H.renderingGroupId] = 1;
				object.tracerLines = tracerLines;
				const boxSize = {
					playerESP: {
						width: .5,
						height: .75,
						depth: .5
					},
					pPredESP: {
						width: .5,
						height: .75,
						depth: .5
					},
					ammoESP: {
						width: .25,
						height: .35,
						depth: .25
					}
				};
				const boxOffset = {
					playerESP: 0,
					pPredESP: 0,
					ammoESP: -.05
				};
				vertexVector1 = vertexVector1 || new L.BABYLON.Vector3(0, 0, 0);
				vertexVector1.x = -boxSize[type].width / 2;
				vertexVector1.y = boxOffset[type];
				vertexVector1.z = -boxSize[type].depth / 2;
				vertexVector2 = vertexVector2 || new L.BABYLON.Vector3(0, 0, 0);
				vertexVector2.x = boxSize[type].width / 2;
				vertexVector2.y = boxOffset[type];
				vertexVector2.z = -boxSize[type].depth / 2;
				vertexVector3 = vertexVector3 || new L.BABYLON.Vector3(0, 0, 0);
				vertexVector3.x = boxSize[type].width / 2;
				vertexVector3.y = boxOffset[type] + boxSize[type].height;
				vertexVector3.z = -boxSize[type].depth / 2;
				vertexVector4 = vertexVector4 || new L.BABYLON.Vector3(0, 0, 0);
				vertexVector4.x = -boxSize[type].width / 2;
				vertexVector4.y = boxOffset[type] + boxSize[type].height;
				vertexVector4.z = -boxSize[type].depth / 2;
				vertexVector5 = vertexVector5 || new L.BABYLON.Vector3(0, 0, 0);
				vertexVector5.x = -boxSize[type].width / 2;
				vertexVector5.y = boxOffset[type];
				vertexVector5.z = boxSize[type].depth / 2;
				vertexVector6 = vertexVector6 || new L.BABYLON.Vector3(0, 0, 0);
				vertexVector6.x = boxSize[type].width / 2;
				vertexVector6.y = boxOffset[type];
				vertexVector6.z = boxSize[type].depth / 2;
				vertexVector7 = vertexVector7 || new L.BABYLON.Vector3(0, 0, 0);
				vertexVector7.x = boxSize[type].width / 2;
				vertexVector7.y = boxOffset[type] + boxSize[type].height;
				vertexVector7.z = boxSize[type].depth / 2;
				vertexVector8 = vertexVector8 || new L.BABYLON.Vector3(0, 0, 0);
				vertexVector8.x = -boxSize[type].width / 2;
				vertexVector8.y = boxOffset[type] + boxSize[type].height;
				vertexVector8.z = boxSize[type].depth / 2;
				const vertices = [
					vertexVector1,
					vertexVector2,
					vertexVector3,
					vertexVector4,
					vertexVector5,
					vertexVector6,
					vertexVector7,
					vertexVector8
				];
				const lines = [];
				for (let i = 0; i < 4; i++) {
					lines.push([vertices[i], vertices[(i + 1) % 4]]);
					lines.push([vertices[i + 4], vertices[(i + 1) % 4 + 4]]);
					lines.push([vertices[i], vertices[i + 4]]);
				}
				const box = L.BABYLON.MeshBuilder.CreateLineSystem(getScrambled(), { lines }, newScene);
				box.color = new L.BABYLON.Color3(1, 1, 1);
				box.position.y = boxOffset[type];
				box[H.renderingGroupId] = 1;
				box.parent = newParent;
				object.box = box;
				if (type == "playerESP") object.lookDirLine = L.BABYLON.MeshBuilder.CreateLines(getScrambled(), { points: [new L.BABYLON.Vector3(0, 0, 0), new L.BABYLON.Vector3(0, 0, 0)] }, newScene);
				object.generatedESP = true;
				ESPArray.push([
					object,
					tracerLines,
					box,
					object.lookDirLine
				]);
			}
			if (object.lookDirLine && (extract("lookTracers") || extract("aimbotTargetMode") === "aimingAt")) {
				const TRACE_LENGTH_MULTIPLIER = 75;
				const playerEye = object[H.actor].eye;
				let conclusion = playerEye.forward.clone();
				conclusion = conclusion.scale(TRACE_LENGTH_MULTIPLIER);
				conclusion = conclusion.add(playerEye.absolutePosition);
				const rayToGround = ss.RAYS[H.rayCollidesWithMap](object[H.actor].eye.absolutePosition, conclusion, ss.RAYS.grenadeCollidesWithCell);
				const g = playerEye.absolutePosition;
				if (rayToGround) object.lookDirLine.setVerticesData(L.BABYLON.VertexBuffer.PositionKind, [
					g.x,
					g.y,
					g.z,
					rayToGround.pick.pickedPoint.x,
					rayToGround.pick.pickedPoint.y,
					rayToGround.pick.pickedPoint.z
				]);
				if (!rayToGround) {
					const f = conclusion;
					object.lookDirLine.setVerticesData(L.BABYLON.VertexBuffer.PositionKind, [
						g.x,
						g.y,
						g.z,
						f.x,
						f.y,
						f.z
					]);
				}
				if (object && object !== ss.MYPLAYER && object[H.playing] && object[H.hp] > 0 && (!ss.MYPLAYER.team || object.team !== ss.MYPLAYER.team)) object.lookLineData = object.lookDirLine.getVerticesData(L.BABYLON.VertexBuffer.PositionKind);
				object.lookDirLine.color = new L.BABYLON.Color3(...hexToRgb(extract("lookTracersColor")));
				object.lookDirLine[H.renderingGroupId] = extract("lookTracersRGI1") ? 1 : 0;
			}
			object.tracerLines.setVerticesData(L.BABYLON.VertexBuffer.PositionKind, [
				crosshairsPosition.x,
				crosshairsPosition.y,
				crosshairsPosition.z,
				newPosition.x,
				newPosition.y,
				newPosition.z
			]);
			object.tracerLines.color = new L.BABYLON.Color3(...color);
			object.box.color = new L.BABYLON.Color3(...color);
		};
		const obfuscateEmail = function(email) {
			const parts = email.split("@");
			return parts[0].substring(0, 1) + parts[0].substring(1, parts[0].length - 1).replace(/./g, "*") + parts[0].substring(parts[0].length - 1) + "@" + parts[1];
		};
		const updateAccountRecords = function(key, value) {
			let currentEmail = load("MostRecentEmail");
			let maskedEmail = unsafeWindow.extern.account.maskedEmail;
			if (currentEmail && obfuscateEmail(currentEmail) == maskedEmail) log("no change in email");
			else {
				log("not using obfuscated email (sadly)");
				currentEmail = maskedEmail;
			}
			log("the email is:", currentEmail);
			let accountRecords = GM_getValue("StateFarm_AccountRecords") || {};
			let tierCache = GM_getValue("StateFarm_TierCache") || {};
			let accountDetails = accountRecords[currentEmail] || {};
			accountDetails.inventory = JSON.parse(JSON.stringify(unsafeWindow.extern.account.inventory));
			accountDetails.eggCount = unsafeWindow.extern.account.currentBalance;
			delete accountDetails.inventoryWorth;
			accountDetails.dateCreated = unsafeWindow.extern.account.dateCreated;
			accountDetails.eggsSpent = unsafeWindow.extern.account.eggsSpent;
			accountDetails.totalWorth = accountDetails.eggCount + accountDetails.eggsSpent;
			accountDetails.inventoryList = [];
			accountDetails.inventory.forEach((item) => {
				let itemName = item.name;
				if (tierCache[itemName] !== void 0) itemName = itemName + " [T" + tierCache[itemName] + "]";
				accountDetails.inventoryList.push(itemName);
			});
			if (key && value) accountDetails[key] = value;
			accountRecords[currentEmail] = accountDetails;
			GM_setValue("StateFarm_AccountRecords", accountRecords);
		};
		const getRoomAsString = function() {
			return findKeyByValue(unsafeWindow.extern.GameType, unsafeWindow.vueApp.game.gameType) + ", " + unsafeWindow.vueData.currentRegionId + ", " + unsafeWindow.vueApp.game.mapName + ", team" + unsafeWindow.vueApp.game.team;
		};
		const every15Seconds = function() {
			if (extract("antiAFK") && unsafeWindow.extern.inGame && document.getElementById("spectate").style.display == "none" && ss && ss.MYPLAYER && ss.MYPLAYER.ws && !ss.MYPLAYER[H.playing]) {
				if (extract("debug")) log("lets'r try'r to keep alive'r");
				let out = ss.commOut.getBuffer();
				out.packInt8(C.keepAlive);
				out.send(ss.MYPLAYER.ws);
			}
		};
		const everySecond = function() {
			let oldMonitorObjects = JSON.parse(JSON.stringify(monitorObjects));
			if (extract("debug")) {
				unsafeWindow.globalSS = {
					ss,
					H,
					F,
					L,
					C,
					tp,
					initMenu,
					extractAsDropdownInt,
					extract,
					extractDropdownList,
					save,
					load,
					GM_listValues,
					GM_getValue,
					GM_setValue,
					createPopup,
					createPrompt,
					remove,
					change,
					unban,
					GM_info: typeof GM_info !== "undefined" ? GM_info : void 0,
					GM: typeof GM !== "undefined" ? GM : void 0,
					getScrambled,
					soundsSFC,
					accountStatus,
					cachedRealData,
					retrievedSFX,
					findBadgesForUsername,
					badgeList,
					crosshairsPosition,
					predictGrenade: newPredictGrenade,
					miniCamera,
					configMain,
					configBots,
					predictBloom,
					verification,
					createVarDataPopup,
					log
				};
				unsafeWindow.globalSS.ss = ss;
				unsafeWindow.globalSS.H = H;
				unsafeWindow.globalSS.F = F;
				unsafeWindow.globalSS.L = L;
				unsafeWindow.globalSS.C = C;
				unsafeWindow.globalSS.tp = tp;
				unsafeWindow.globalSS.initMenu = initMenu;
				unsafeWindow.globalSS.extractAsDropdownInt = extractAsDropdownInt;
				unsafeWindow.globalSS.extract = extract;
				unsafeWindow.globalSS.extractDropdownList = extractDropdownList;
				unsafeWindow.globalSS.save = save;
				unsafeWindow.globalSS.load = load;
				unsafeWindow.globalSS.GM_listValues = GM_listValues;
				unsafeWindow.globalSS.GM_getValue = GM_getValue;
				unsafeWindow.globalSS.GM_setValue = GM_setValue;
				unsafeWindow.globalSS.crackedShell = crackedShell;
				unsafeWindow.globalSS.createPopup = createPopup;
				unsafeWindow.globalSS.createPrompt = createPrompt;
				unsafeWindow.globalSS.remove = remove;
				unsafeWindow.globalSS.change = change;
				unsafeWindow.globalSS.unban = unban;
				if (typeof GM_info !== "undefined") unsafeWindow.globalSS.GM_info = GM_info;
				if (typeof GM !== "undefined") unsafeWindow.globalSS.GM = GM;
				unsafeWindow.globalSS.getScrambled = getScrambled;
				unsafeWindow.globalSS.soundsSFC = soundsSFC;
				unsafeWindow.globalSS.accountStatus = accountStatus;
				unsafeWindow.globalSS.cachedRealData = cachedRealData;
				unsafeWindow.globalSS.retrievedSFX = retrievedSFX;
				unsafeWindow.globalSS.findBadgesForUsername = findBadgesForUsername;
				unsafeWindow.globalSS.badgeList = badgeList;
				unsafeWindow.globalSS.crosshairsPosition = crosshairsPosition;
				unsafeWindow.globalSS.predictGrenade = newPredictGrenade;
				unsafeWindow.globalSS.miniCamera = miniCamera;
				unsafeWindow.globalSS.configMain = configMain;
				unsafeWindow.globalSS.configBots = configBots;
				unsafeWindow.globalSS.predictBloom = predictBloom;
				unsafeWindow.globalSS.verification = verification;
				unsafeWindow.globalSS.createVarDataPopup = createVarDataPopup;
			} else delete unsafeWindow.globalSS;
			save("DisableLogs", extract("consoleLogs"));
			if (extract("sfChatAutoStart") && !sfChatContainer) startStateFarmChat(true);
			startUpComplete = !document.getElementById("progressBar");
			if (startUpComplete) verification.beginVerificationCheck();
			let botsDict = GM_getValue("StateFarm_BotStatus");
			sfChatUsernameSet();
			if (!botsDict) botsDict = {};
			if (AUTOMATED) {
				if (clientID) {
					const autoLeave = extract("autoLeave") ? " AL: " + Math.round((timeJoinedGame + 1e3 * extract("autoLeaveDelay") - Date.now()) / 100) / 10 : "";
					const newArray = {
						noConfig: botsDict[clientID] && configNotSet ? botsDict[clientID].noConfig > Date.now() ? botsDict[clientID].noConfig : Date.now() : 0,
						username: ss && ss.MYPLAYER && ss.MYPLAYER.name || unsafeWindow.vueApp.playerName,
						uniqueId: ss && ss.MYPLAYER && ss.MYPLAYER[H.uniqueId] || "value_undefined",
						startTime,
						timecode: Date.now(),
						status: isBanned && "banned" || unsafeWindow.extern.inGame && (ss.MYPLAYER && ss.MYPLAYER[H.playing] ? "playing " : unsafeWindow.vueApp.game.respawnTime + "s cooldown ") + GAMECODE + autoLeave + " (" + getRoomAsString() + ")" || errorString || "idle"
					};
					delete botsDict[clientID];
					clientID = unsafeWindow.vueData.firebaseId || clientID;
					botsDict[clientID] = newArray;
				}
				if (attemptedInjection && automatedBorder && automatedBorder.style && automatedBorder.style.borderColor == "rgb(255, 0, 0)") automatedBorder.style.borderColor = "rgba(0, 255, 0, 1)";
			} else {
				let oldBlacklist = botBlacklist;
				botBlacklist = "";
				let oldWhitelist = botWhitelist;
				botWhitelist = "";
				if (extract("botNoKillMe")) botBlacklist += botBlacklist + (ss && ss.MYPLAYER && ss.MYPLAYER[H.uniqueId] || "value_undefined") + ",";
				if (extract("botFollowMe")) botWhitelist += botWhitelist + (ss && ss.MYPLAYER && ss.MYPLAYER[H.uniqueId] || "value_undefined") + ",";
				monitorObjects.botOnline = "";
				amountOnline = 0;
				const botsArray = Object.keys(botsDict).sort();
				for (let i in botsArray) if (i !== "shallowClone") {
					i = Number(i);
					const botID = botsArray[i];
					const data = botsDict[botID];
					if (data.noConfig) {
						updateBotParams();
						botsDict[botID].noConfig = Date.now() + 5e3;
					}
					if (extract("botNoKillBots") && data.uniqueId !== "value_undefined") botBlacklist += data.uniqueId + ",";
					if (extract("botFollowBots") && data.uniqueId !== "value_undefined") botWhitelist += data.uniqueId + ",";
					if (data.timecode + 1e4 < Date.now()) delete botsDict[botID];
					else if (data.timecode + 4e3 < Date.now()) botsDict[botID].status = "not responding " + (Date.now() - data.timecode) + "ms elapsed";
					amountOnline += 1;
					monitorObjects.botOnline = monitorObjects.botOnline + "\n" + data.username + " [..." + botID.slice(-4) + "]: " + data.status;
				}
				if (oldBlacklist !== botBlacklist) {
					log("old:", oldBlacklist, "new:", botBlacklist);
					updateBotParams();
				}
				if (oldWhitelist !== botWhitelist) {
					log("old:", oldWhitelist, "new:", botWhitelist);
					updateBotParams();
				}
				monitorObjects.botOnline = amountOnline + " bots online." + monitorObjects.botOnline;
			}
			GM_setValue("StateFarm_BotStatus", botsDict);
			allFolders.forEach(function(name) {
				save(name, tp[name].expanded);
			});
			coordElement.style.display = "none";
			gameInfoElement.style.display = "none";
			playerstatsElement.style.display = "none";
			playerinfoElement.style.display = "none";
			redCircle.style.display = "none";
			performanceElement.style.display = "none";
			firstUseElement.style.display = "none";
			makeHudElementDragable(coordElement);
			makeHudElementDragable(gameInfoElement);
			makeHudElementDragable(playerstatsElement);
			makeHudElementDragable(playerinfoElement);
			makeHudElementDragable(performanceElement);
			if (extract("gameBlacklistCodes") != "" && extract("gameBlacklistCodes") != void 0) {
				let input = extract("gameBlacklistCodes");
				input = input.split(",");
				input.forEach(function(code) {
					if (code != "" && code.length == 14) blacklistedGameCodes.push(code);
				});
			}
			if (extract("noAnnoyances") && !annoyancesRemoved) {
				const styleElement = createStatefarmElement("style");
				styleElement.textContent = `
            /* remove ads because annoying stop adding spyware yarg */
                .house-small,
                #big-house-ad,
                .house-ad-wrapper,
                .display-ad-container,
                .respawn-one,
                .respawn-two,
                #ShellShockers_LoadingScreen_HouseAds,
                #display-ad-header-home,
                .display-ad-header-home,
                #display-ad-header-equip,
                #shellshockers_respawn_banner_3_ad {
                    display: none;
                }
            `;
				document.head.appendChild(styleElement);
				annoyancesRemoved = true;
			}
			async function unzip(arrayBuffer) {
				const dataView = new DataView(arrayBuffer);
				let offset = 0;
				const files = {};
				while (offset < dataView.byteLength) {
					if (dataView.getUint32(offset, true) !== 67324752) {
						log("ZIP header not found at offset (ZIP has likely ended):", offset);
						break;
					}
					const fileNameLength = dataView.getUint16(offset + 26, true);
					const fileName = new TextDecoder().decode(new Uint8Array(arrayBuffer, offset + 30, fileNameLength));
					const compressedSize = dataView.getUint32(offset + 18, true);
					const compressionMethod = dataView.getUint16(offset + 8, true);
					offset += 30 + fileNameLength;
					const compressedData = new Uint8Array(arrayBuffer, offset, compressedSize);
					if (compressionMethod === 0) files[fileName] = compressedData;
					else if (compressionMethod === 8) try {
						const stream = new Response(compressedData).body.pipeThrough(new DecompressionStream("deflate-raw"));
						files[fileName] = await new Response(stream).arrayBuffer();
					} catch (error) {
						console.error("Decompression failed:", error);
					}
					else console.warn("Unsupported compression method:", compressionMethod);
					offset += compressedSize;
				}
				log("finished unzipping :v");
				return files;
			}
			const fetchAndProcessAudioFromZip = async function(zipURL) {
				try {
					const response = await fetch(zipURL);
					if (!response.ok) throw new Error("Failed to fetch ZIP:", response.statusText);
					const files = await unzip(await response.arrayBuffer());
					log("finished files", files);
					const mp3Files = Object.keys(files).filter((f) => f.endsWith(".mp3"));
					const jsonFiles = Object.keys(files).filter((f) => f.endsWith(".json"));
					let config = {};
					if (jsonFiles.length > 0) config = JSON.parse(new TextDecoder().decode(files[jsonFiles[0]]));
					let loadedCount = 0;
					const totalRequests = mp3Files.length + jsonFiles.length;
					for (const fileName of mp3Files) {
						const fileData = files[fileName];
						const audioBuffer = await audioContexts.SOUNDS.decodeAudioData(fileData);
						const key = fileName.replace(".mp3", "");
						audioBuffer.disablePanning = !!config.disablePanning;
						soundsSFC[key] = audioBuffer;
						loadedCount++;
						if (loadedCount === totalRequests) {
							createPopup("Loaded Custom SFX!", "success");
							log("LOADED CUSTOM SFX!");
						}
					}
				} catch (error) {
					console.error("Error fetching/decoding audio from ZIP:", error);
				}
			};
			let customSFXConfig = `${extract("customSFX1")}+${extract("customSFX2")}+${extract("customSFX3")}`;
			if (initialisedCustomSFX !== customSFXConfig) {
				initialisedCustomSFX = customSFXConfig;
				log("STARTING TO LOAD CUSTOM SFX...", initialisedCustomSFX);
				soundsSFC = {};
				if (extract("customSFX3") !== true && extract("customSFX3") !== "default") {
					createPopup("Loading Custom SFX...");
					fetchAndProcessAudioFromZip(atob(extract("customSFX3")));
				}
				if (extract("customSFX2") !== true && extract("customSFX2") !== "default") {
					createPopup("Loading Custom SFX...");
					fetchAndProcessAudioFromZip(atob(extract("customSFX2")));
				}
				if (extract("customSFX1") !== true && extract("customSFX1") !== "default") {
					createPopup("Loading Custom SFX...");
					fetchAndProcessAudioFromZip(atob(extract("customSFX1")));
				}
			}
			if (startUpComplete && ss && ss.MYPLAYER && unsafeWindow.extern.inGame) {
				if (extract("mockMode")) {
					let textAfterLastColon = document.getElementById("chatOut").children[document.getElementById("chatOut").children.length - 1].children[1].textContent;
					let chatName = document.getElementById("chatOut").children[document.getElementById("chatOut").children.length - 1].children[0].textContent.slice(0, -2);
					if (chatName && chatName !== username && textAfterLastColon !== "joined." && textAfterLastColon !== "left." && !handleChat(textAfterLastColon) && !extract("mockModeNoRePeat")) sendChatMessage(textAfterLastColon);
				}
				if (extract("gameInfo")) {
					let gameInfoText = GAMECODE + " | " + playersInGame + "/18 | " + (18 - playersInGame) + " slots remaining. | Server: " + unsafeWindow.vueData.currentRegionId + " | Gamemode: " + findKeyByValue(unsafeWindow.extern.GameType, unsafeWindow.vueApp.game.gameType) + " | Map: " + unsafeWindow.vueApp.game.mapName + " | Time in game: " + Math.floor((Date.now() - timeJoinedGame) / 1e3) + "s" + (extract("autoLeave") ? " | AutoLeave: " + Math.ceil((timeJoinedGame + 1e3 * extract("autoLeaveDelay") - Date.now()) / 1e3) + "s" : "");
					gameInfoElement.innerText = gameInfoText;
					gameInfoElement.offsetWidth;
					gameInfoElement.style.display = "";
				}
				if (extract("leaveEmpty")) {
					if (playersInGame == 1 || playersInGame == 2) {
						createPopup("Left empty game. [LeaveEmpty]");
						change("leaveGame");
						playersInGame = 0;
					}
				}
				if (extract("autoLeave")) {
					const remaining = (timeJoinedGame + 1e3 * extract("autoLeaveDelay") - Date.now()) / 1e3;
					if (remaining <= 0) {
						createPopup("AutoLeave: Leaving now...");
						change("leaveGame");
					} else if (autoLeaveReminder > 5 && remaining <= 5) createPopup("AutoLeave: 5 seconds remaining!");
					else if (autoLeaveReminder > 10 && remaining <= 10) createPopup("AutoLeave: 10 seconds remaining");
					autoLeaveReminder = remaining;
				}
				if (extract("autoTeam") !== "disabled" && ss.MYPLAYER.team !== 0) {
					if (extract("autoTeam") == "random" || extract("autoTeam") == "red" && ss.MYPLAYER.team == 1 || extract("autoTeam") == "blue" && ss.MYPLAYER.team == 2) unsafeWindow.extern.switchTeam();
				}
				if (!ss.MYPLAYER[H.playing]) {
					GAMECODE = unsafeWindow.vueApp.game.shareLinkPopup.url.slice(-14);
					if (extract("autoRespawn")) {
						var button = document.querySelector(".ss_button.btn_big.btn-dark-bevel.btn-respawn.ss_button.btn_green.bevel_green");
						if (button) button.click();
					}
				}
				Array.from(document.getElementById("playerList").children).forEach((playerListItem) => {
					const playerSlotNameElement = playerListItem.children[0];
					if (playerSlotNameElement) {
						let highlightSpan = playerSlotNameElement.querySelector("span");
						if (!highlightSpan) {
							highlightSpan = createStatefarmElement("span");
							highlightSpan.textContent = playerSlotNameElement.textContent;
							playerSlotNameElement.textContent = "";
							playerSlotNameElement.appendChild(highlightSpan);
						}
						if (extract("unfilterNames") && ss.isBadWord(playerListItem.textContent)) {
							highlightSpan.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
							highlightSpan.style.color = "red";
						} else {
							highlightSpan.style.backgroundColor = "";
							highlightSpan.style.color = "";
						}
					}
				});
				const pausedGameUI = document.querySelector(".paused-game-ui");
				const hasZIndex1 = pausedGameUI.classList.contains("z-index-1");
				const hasZIndex10000 = pausedGameUI.classList.contains("z-index-10000");
				if (extract("restoreScroll") && (hasZIndex1 || !hasZIndex10000)) {
					pausedGameUI.classList.remove("z-index-1", "z-index-10000");
					pausedGameUI.classList.add("z-index-10000");
				} else if (!extract("restoreScroll") && (hasZIndex10000 || !hasZIndex1)) {
					pausedGameUI.classList.remove("z-index-1", "z-index-10000");
					pausedGameUI.classList.add("z-index-1");
				}
				if (extract("minimap")) {
					if (!miniCamera) {
						var camPos = new L.BABYLON.Vector3(0, -20, 0);
						miniCamera = new L.BABYLON.ArcRotateCamera("minimapCamera", -1.5707963267948966, 0, 30, camPos, ss.SCENE);
						miniCamera.mode = 1;
						ss.SCENE.activeCameras.push(miniCamera);
						miniCamera.parent = ss.MYPLAYER[H.actor][H.mesh];
					}
					miniCamera._skipRendering = false;
					let cameraScale = extract("minimapZoom");
					miniCamera.orthoLeft = -cameraScale;
					miniCamera.orthoRight = cameraScale;
					miniCamera.orthoBottom = -cameraScale;
					miniCamera.orthoTop = cameraScale;
					let mapScale = extract("minimapSize");
					var relativeWidth = 200 / window.innerWidth;
					var relativeHeight = 200 / window.innerHeight;
					miniCamera.viewport = new L.BABYLON.Viewport(.2, .2, relativeWidth * mapScale, relativeHeight * mapScale);
				} else if (miniCamera) miniCamera._skipRendering = true;
				if (extract("instantSpectate")) {
					if (document.getElementsByClassName("pause-container centered")[0].style.display == "") {
						document.getElementsByClassName("pause-screen-btn-spectate")[0].style.display = "";
						document.getElementsByClassName("pause-screen-btn-spectate")[0].disabled = null;
					}
				}
			} else {
				if (!document.getElementById("progressBar")) {
					if (extract("autoJoin") && (extract("autoLogin") == "disabled" || unsafeWindow.vueApp.accountCreated !== null)) unsafeWindow.vueApp.externPlayObject(extract("joinCode").length === 14 ? 2 : 0, unsafeWindow.vueApp.currentGameType, unsafeWindow.vueApp.playerName, "", extract("joinCode").length === 14 ? extract("joinCode") : "");
				}
				if (extract("autoRegion") !== "disabled") {
					const region = extract("autoRegion") == "random" ? extractDropdownList("autoRegion")[randomInt(1, 7)].value : extract("autoRegion");
					unsafeWindow.vueData.currentRegionId = region;
				}
				if (extract("autoGamemode") !== "disabled") {
					const gamemode = extract("autoGamemode") == "random" ? randomInt(0, 3) : extractAsDropdownInt("autoGamemode") - 1;
					unsafeWindow.vueApp.onGameTypeChanged(gamemode);
				}
			}
			if (startUpComplete) {
				if (GM_getValue("StateFarm_firstRun") !== 1) firstExecution = true;
				if (extract("legacyModels") !== previousLegacyModels) [
					3e3,
					3100,
					3400,
					3600,
					3800,
					4e3,
					4200
				].forEach((ID) => {
					let item = unsafeWindow.extern.catalog.findItemById(ID);
					item.item_data.meshName.replaceAll("_Legacy", "");
					if (extract("legacyModels")) item.item_data.meshName = `${item.item_data.meshName}_Legacy`;
				});
				previousLegacyModels = extract("legacyModels");
				if (extract("setDetail") !== previousDetail && extract("setDetail") !== "disabled") {
					unsafeWindow.vueApp.settingsUi.togglers.misc[3].value = false;
					if (extract("setDetail") == "autodetail") unsafeWindow.vueApp.settingsUi.togglers.misc[3].value = true;
					else if (extract("setDetail") == "nodetails") {
						unsafeWindow.vueApp.settingsUi.togglers.misc[4].value = false;
						unsafeWindow.vueApp.settingsUi.togglers.misc[5].value = false;
					} else if (extract("setDetail") == "shadows") {
						unsafeWindow.vueApp.settingsUi.togglers.misc[4].value = true;
						unsafeWindow.vueApp.settingsUi.togglers.misc[5].value = false;
					} else if (extract("setDetail") == "highres") {
						unsafeWindow.vueApp.settingsUi.togglers.misc[4].value = false;
						unsafeWindow.vueApp.settingsUi.togglers.misc[5].value = true;
					} else if (extract("setDetail") == "shadowshighres") {
						unsafeWindow.vueApp.settingsUi.togglers.misc[4].value = true;
						unsafeWindow.vueApp.settingsUi.togglers.misc[5].value = true;
					}
					unsafeWindow.extern.applyUiSettings(unsafeWindow.vueApp.settingsUi);
				}
				previousDetail = extract("setDetail");
				if (previousTitleAnimation !== extract("titleAnimation")) {
					document.querySelectorAll("link[rel*='icon']").forEach(function(favicon) {
						favicon.parentNode.removeChild(favicon);
					});
					let favicon = createStatefarmElement("link");
					favicon.type = "image/x-icon";
					favicon.rel = "shortcut icon";
					if (extract("titleAnimation")) favicon.href = GM_info?.script?.icon || iconURL;
					else favicon.href = "https://www.google.com/s2/favicons?domain=shellshock.io";
					document.getElementsByTagName("head")[0].appendChild(favicon);
					previousTitleAnimation = extract("titleAnimation");
				}
			}
			const banPopup = document.getElementById("bannedPopup");
			if (attemptedInjection && banPopup && unsafeWindow.vueApp?.bannedPopup?.expire && unsafeWindow.vueApp.bannedPopup.expire !== "") isBanned = true;
			if (isBanned && extract("autoUnban") && !attemptedAutoUnban && unsafeWindow.vueApp?.bannedPopup) {
				log("eep!");
				banPopup.textContent = "StateFarm AutoUnban:\nYou now have a new database\nID for unban. Enjoy! :)\nBan message will be automatically removed from screen in 15 seconds.";
				unban();
				attemptedAutoUnban = true;
				createPopup("AutoUnban: Attempting to Unban...");
				setTimeout(() => {
					createPopup("AutoUnban: Removed ban message.");
					banPopup.style.display = "none";
					attemptedAutoUnban = false;
					isBanned = false;
					unsafeWindow.vueApp.bannedPopup.expire = "";
				}, 15e3);
			}
			if (extract("eggColor") !== "disabled" && ss?.USERDATA) {
				const color = extract("eggColor") == "random" ? randomInt(0, 6) : extractAsDropdownInt("eggColor") - 1;
				if (color !== ss.USERDATA.playerAccount.colorIdx) {
					unsafeWindow.extern.setShellColor(color);
					unsafeWindow.vueApp.onBackClick();
				}
			}
			if (extract("autoStamp") !== "disabled" && ss?.USERDATA) {
				const stampID = 2e3 + (extract("autoStamp") == "random" ? randomInt(1, 6) : extractAsDropdownInt("autoStamp"));
				if (ss.USERDATA && ss.USERDATA.playerAccount) {
					if (stampID !== (ss.USERDATA.playerAccount.stampItem && ss.USERDATA.playerAccount.stampItem?.id || -1)) {
						ss.USERDATA.playerAccount.stampItem = unsafeWindow.extern.catalog.findItemById(stampID);
						unsafeWindow.vueApp.onBackClick();
					}
				}
			}
			if (extract("autoHat") !== "disabled" && ss?.USERDATA) {
				const hatID = 1e3 + (extract("autoHat") == "random" ? randomInt(1, 6) : extractAsDropdownInt("autoHat"));
				if (ss.USERDATA && ss.USERDATA.playerAccount) {
					if (hatID !== (ss.USERDATA.playerAccount.hatItem && ss.USERDATA.playerAccount.hatItem?.id || -1)) {
						ss.USERDATA.playerAccount.hatItem = unsafeWindow.extern.catalog.findItemById(hatID);
						unsafeWindow.vueApp.onBackClick();
					}
				}
			}
			if (extract("useCustomName")) unsafeWindow.vueApp?.setPlayerName(extract("usernameAutoJoin"));
			if (!ranEverySecond && startUpComplete) {
				if (extract("autoChickenWinner")) {
					log("automatically do chw");
					change("chickenWinner");
				}
				updateAccountRecords();
				if (extract("autoMacro")) {
					log("automatically do your macro");
					change("executeMacro");
				}
				log("swapping out google analytics...");
				ranEverySecond = true;
			}
			localStorage.timesPlayed = 0;
			for (let storeAs of Object.keys(monitorObjects)) {
				let object = monitorObjects[storeAs];
				if (monitorObjects[object] !== oldMonitorObjects[object]) {
					log(object, monitorObjects[object]);
					tp[storeAs + "Button"].refresh();
				}
			}
		};
		const everyDecisecond = function() {
			deciSecondsPassed++;
			if (extract("titleAnimation")) {
				if (deciSecondsPassed % 3 == 0) {
					unsafeWindow.document.title = titleAnimationFrames[currentFrameIndex];
					currentFrameIndex = (currentFrameIndex + 1) % titleAnimationFrames.length;
				}
			} else if (unsafeWindow.document.title != "Shell Shockers 🍳 Multiplayer io game") unsafeWindow.document.title = "Shell Shockers 🍳 Multiplayer io game";
			if (startUpComplete && !unsafeWindow.extern.inGame && extract("autoLogin") !== "disabled" && (extract("autoLogin") == "always" || extract("autoLogin") == "noaccount" && unsafeWindow.vueApp.accountCreated == null)) {
				if (previousLogin + 5e3 < Date.now()) {
					unban();
					change("loginDatabaseLogin");
					previousLogin = Date.now();
				}
			}
			if (ss && ss?.MYPLAYER && unsafeWindow?.extern?.inGame) {
				if (extract("playerStats")) {
					let playerStates = "";
					ss.PLAYERS.forEach((player) => {
						if (player && player !== ss.MYPLAYER && player[H.hp] > 0 && (!ss.MYPLAYER.team || player.team !== ss.MYPLAYER.team)) playerStates = playerStates + player.name + ": " + Math.round(player[H.hp]) + " HP\n";
					});
					if (playerStates == "") playerStates = "No Enemy Players";
					playerstatsElement.innerText = playerStates;
					playerstatsElement.offsetWidth;
					playerstatsElement.style.display = "";
				}
				if (extract("playerInfo")) {
					let playerInfoString = "";
					const player = currentlyTargeting || playerLookingAt || void 0;
					if (player && player.distance && player[H.playing]) {
						playerInfoString = playerInfoString + player.name + "\n";
						playerInfoString = playerInfoString + "HP: " + Math.round(player[H.hp]) + "\n";
						playerInfoString = playerInfoString + "Distance: " + player.distance.toFixed(3) + "\n";
						playerInfoString = playerInfoString + "AngleDiff: " + player.angleDiff.toFixed(3) + "\n";
					}
					if (playerInfoString == "") playerInfoString = "Not Looking At Player";
					playerinfoElement.innerText = playerInfoString;
					playerinfoElement.offsetWidth;
					playerinfoElement.style.display = "";
				}
				if (ss.MYPLAYER && ss.MYPLAYER[H.actor] && ss.MYPLAYER[H.actor][H.mesh] && extract("showCoordinates")) {
					const personalCoordinate = `XYZ: ${Number(ss.MYPLAYER[H.actor][H.mesh].position.x.toFixed(3))}, ${Number(ss.MYPLAYER[H.actor][H.mesh].position.y.toFixed(3))}, ${Number(ss.MYPLAYER[H.actor][H.mesh].position.z.toFixed(3))} Rot: ${Number(ss.MYPLAYER[H.yaw].toFixed(3))}, ${Number(ss.MYPLAYER[H.pitch].toFixed(3))} Acc: ${Number(accuracyPercentage).toFixed(3)}`;
					coordElement.innerText = personalCoordinate;
					coordElement.offsetWidth;
					coordElement.style.display = "";
				}
				if (ss.MYPLAYER && ss.MYPLAYER[H.actor] && ss.MYPLAYER[H.actor][H.mesh] && extract("performanceInfo")) {
					if (performance.memory) {
						const memoryUsage = performance.memory;
						const jsHeapSizeLimit = (memoryUsage.jsHeapSizeLimit / 1024 / 1024).toFixed(2);
						const totalJSHeapSize = (memoryUsage.totalJSHeapSize / 1024 / 1024).toFixed(2);
						const usedJSHeapSize = (memoryUsage.usedJSHeapSize / 1024 / 1024).toFixed(2);
						performanceElement.textContent = `
                        Memory Usage:
                        ${usedJSHeapSize} MB / ${jsHeapSizeLimit} MB
                    `.trim();
					} else performanceElement.textContent = "Performance.memory API is not supported in this browser.";
					performanceElement.style.display = "";
				}
				if (firstExecution == true) {
					firstUseElement.innerHTML = `
            <style>
            @font-face {
                font-family: "Bahnschrift";
                src: url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.eot");
                src: url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.eot?#iefix")format("embedded-opentype"),
                url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.woff2")format("woff2"),
                url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.woff")format("woff"),
                url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.ttf")format("truetype"),
                url("https://db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.svg#Bahnschrift")format("svg");
            }
            .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                z-index: 9999;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 1;
            }
            .overlay-content {
                text-align: center;
                color: white;
            }
            h100 {
                color: white;
                font-weight: bold;
                font-family: Bahnschrift;
                font-size: 36px;
            }
            a {
                text-decoration: none;
                font-family: Bahnschrift;
                font-size: 24px;
            }
            p {
                text-decoration: none;
                font-family: Bahnschrift;
                font-size: 15px;
            }
        </style>
        </head>
        <body>

            <div class="overlay">
                <div class="overlay-content">
                    <h100>Welcome to StateFarm Client V3</h100>
                    <br>
                    <br>
                    <a href="${discordURL}">Discord&emsp;</a>
                    <a href="${baseURL}">Github&emsp;</a>
                    <a href="${greasyforkURL}">Greasyfork&emsp;</a>
                    <a href="${youtubeURL}">YouTube</a>
                    <br>
                    <br>
                    <p>Press 'Escape' to close</p>
                </div>
            </div>
        </body>
            `;
					firstUseElement.style.display = "";
					document.addEventListener("keydown", function(event) {
						if (event.keyCode === 27) {
							firstUseElement.style.opacity = "0";
							firstUseElement.style.display = "none";
							setTimeout(function() {
								firstUseElement.parentNode.removeChild(firstUseElement);
							}, 1e3);
						}
						GM_setValue("StateFarm_firstRun", 1);
					});
				}
			}
			if (AUTOMATED) {
				if (GM_getValue("StateFarm_CommandTime") > cachedCommandTime) {
					cachedCommand = GM_getValue("StateFarm_Command");
					cachedCommandTime = GM_getValue("StateFarm_CommandTime");
					log("Command received:", cachedCommand);
					handleCommand(cachedCommand);
				}
			}
		};
		const handleCommand = function(command) {
			let args = command.split(" ");
			switch (args[0]) {
				case "setconfig":
					let receivedConfig = decodeURIComponent(unsafeWindow.escape(window.atob(args[1])));
					if (URLParams !== "") receivedConfig = URLParams + "<" + receivedConfig;
					log("StateFarm: Change in Bot Panel detected.", receivedConfig);
					applySettings(receivedConfig);
					configNotSet = false;
					break;
				case "ping":
					createPopup("Pong! " + (Date.now() - cachedCommandTime) + "ms", "success");
					break;
				case "kill":
					unsafeWindow.close();
					break;
				case "leave":
					change("leaveGame");
					break;
				case "unban":
					unban();
					break;
				case "newproxy":
					newProxy();
					break;
				case "refresh":
					reloadPage();
					break;
				case "report":
					spamReport();
					break;
				case "join":
					if (args[1]) unsafeWindow.vueApp.externPlayObject(0, 0, unsafeWindow.vueApp.playerName, -1, args[1]);
					else alert("Invalid code");
					break;
				case "repeat":
					if (args[1]) sendChatMessage(args.slice(1).join(" "));
					else sendChatMessage("Invalid repeat message");
					break;
			}
		};
		const onOptionChanged = function(module, value) {
			if (!configMain || !configBots) updateConfig();
			if (configBots[module.storeAs] !== void 0) configBots[module.storeAs] = value.value;
			else configMain[module.storeAs] = value.value;
		};
		const updateConfig = function() {
			configMain = tp.mainPanel.exportPreset();
			configBots = tp.botPanel.exportPreset();
		};
		const updateHiddenAndDisabledHelper = function(array) {
			let conditionMet = false;
			array.forEach((condition) => {
				if ((extract(condition[0]) ? extract(condition[0]) : false) !== condition[1]) {
					conditionMet = true;
					return;
				}
			});
			return conditionMet;
		};
		const updateHiddenAndDisabled = function() {
			if (menuInitiated) allModules.forEach((module) => {
				const tiedModules = tp[module + "TiedModules"];
				if (tiedModules) {
					if (tiedModules.showConditions) tp[module + "Button"].hidden = updateHiddenAndDisabledHelper(tiedModules.showConditions);
					if (tiedModules.hideConditions) tp[module + "Button"].hidden = !updateHiddenAndDisabledHelper(tiedModules.hideConditions);
					if (tiedModules.enableConditions) tp[module + "Button"].disabled = updateHiddenAndDisabledHelper(tiedModules.enableConditions);
					if (tiedModules.disableConditions) tp[module + "Button"].disabled = !updateHiddenAndDisabledHelper(tiedModules.disableConditions);
				}
			});
		};
		const loginOrCreateWithEmailPass = function(emailPass) {
			let email, pass;
			[email, pass] = emailPass.split(":");
			log("gonna create/login an account that will send/has email to", email, "with the password", pass);
			save("MostRecentEmail", email);
			unsafeWindow.firebase.auth().createUserWithEmailAndPassword(email, pass).then((response) => {
				log("success?!?!?!? created account");
				setTimeout(function() {
					updateAccountRecords("emailPass", emailPass);
					accountStatus = "created account";
				}, 2e3);
			}).catch(() => {});
			unsafeWindow.firebase.auth().signInWithEmailAndPassword(email, pass).then((response) => {
				log("success?!?!?!? signed in");
				setTimeout(function() {
					updateAccountRecords("emailPass", emailPass);
					accountStatus = "created account";
				}, 2e3);
				accountStatus = "signed in";
			}).catch(() => {});
		};
		const saveConfig = function() {
			if (verification.checkVerification()) {
				if (menuInitiated !== "init") {
					if (retrievedSFX && retrievedSFX.length > 1) save("StateFarmConfigSpecialItems", [
						["customSFX1", extractAsDropdownInt("customSFX1") || 0],
						["customSFX2", extractAsDropdownInt("customSFX2") || 0],
						["customSFX3", extractAsDropdownInt("customSFX3") || 0],
						["skybox", extractAsDropdownInt("skybox") || 0],
						["filter", extractAsDropdownInt("filter") || 0]
					]);
				}
				save("StateFarmConfigMainPanel", tp.mainPanel.exportPreset());
				save("StateFarmConfigBotPanel", tp.botPanel.exportPreset());
			}
		};
		const save = function(key, value) {
			if (AUTOMATED) return;
			if (JSON.parse(localStorage.getItem(key)) !== void 0) localStorage.removeItem(key);
			GM_setValue(storageKey + key, value);
		};
		const load = function(key) {
			if (AUTOMATED) key = getScrambled();
			return GM_getValue(storageKey + key) || JSON.parse(localStorage.getItem(key));
		};
		const remove = function(key) {
			if (AUTOMATED) return;
			GM_deleteValue(storageKey + key);
			if (JSON.parse(localStorage.getItem(key)) !== void 0) localStorage.removeItem(key);
		};
		const addUserPresets = function(presets) {
			if (presets != null) Object.entries(presets).forEach(([key, value]) => {
				inbuiltPresets[key] = value;
			});
		};
		const loadUserPresets = function() {
			log("Loaded StateFarmUserPresets: ", load(presetStorageLocation));
			return load(presetStorageLocation);
		};
		const saveUserPreset = function(presetName, preset) {
			let currentPresets = loadUserPresets();
			if (currentPresets == null) {
				let presets = {};
				presets[presetName] = preset;
				save(presetStorageLocation, presets);
				return presets;
			} else {
				currentPresets[presetName] = preset;
				save(presetStorageLocation, currentPresets);
				return currentPresets;
			}
		};
		addUserPresets(loadUserPresets());
		const sendChatMessage = function(text) {
			let chatThing = document.getElementById("chatIn");
			if (chatThing.value.includes("unlock")) {
				createPopup("Message send failed: Account too new! (try Factory or LoginDB)", "error");
				return false;
			} else if (ss.MYPLAYER.chatLines > 2) {
				createPopup("Chat Cooldown: " + (ss.MYPLAYER.chatLines - 2) + " remaining.", "error");
				return false;
			} else try {
				lastSentMessage = text;
				if (chatThing && unsafeWindow.extern.startChat) {
					unsafeWindow.extern.startChat();
					chatThing.value = text;
					chatThing.dispatchEvent(new KeyboardEvent("keydown", {
						key: "Enter",
						code: "Enter",
						keyCode: 13,
						which: 13,
						bubbles: true,
						cancelable: true
					}));
					return true;
				} else return false;
			} catch (error) {
				return false;
			}
		};
		const addStreamsToInGameUI = function() {
			let inGameUIElement = document.getElementById("inGameUI");
			let streams = document.getElementById("stream_scroll").children;
			if (inGameUIElement && streams.length > 0) for (let i = 0; i < streams.length; i++) {
				let hrefValue = streams[i].querySelector("a").href;
				let nameValue = streams[i].querySelector(".stream_name").textContent;
				const streamElement = inGameUIElement.querySelector("div[data-name=\"" + nameValue + "\"]");
				if (extract("showStreams") && !streamElement) {
					let containerDiv = createStatefarmElement("div");
					let nameDiv = createStatefarmElement("div");
					nameDiv.textContent = nameValue;
					nameDiv.setAttribute("data-href", hrefValue);
					nameDiv.style.color = "white";
					nameDiv.style.cursor = "pointer";
					nameDiv.style.textDecoration = "none";
					nameDiv.addEventListener("mouseover", function() {
						nameDiv.style.textDecoration = "underline";
						nameDiv.style.color = "blue";
					});
					nameDiv.addEventListener("mouseout", function() {
						nameDiv.style.textDecoration = "none";
						nameDiv.style.color = "white";
					});
					nameDiv.addEventListener("click", () => GM_openInTab(hrefValue, { active: true }));
					containerDiv.setAttribute("data-name", nameValue);
					containerDiv.appendChild(nameDiv);
					containerDiv.appendChild(nameDiv);
					inGameUIElement.appendChild(containerDiv);
				} else if (!extract("showStreams") && streamElement) inGameUIElement.removeChild(streamElement);
			}
		};
		const highlightTargetOnLeaderboard = function(target, aimbot) {
			let playerArray = [];
			ss.PLAYERS.forEach((player) => {
				if (player && target !== ss.MYPLAYER && player[H.playing] && player[H.hp] > 0 && (!ss.MYPLAYER.team || player.team !== ss.MYPLAYER.team)) {
					const uniqueId = player[H.uniqueId];
					const name = player.name;
					const hp = player[H.hp];
					playerArray.push({
						player,
						uniqueId,
						name,
						hp
					});
				}
			});
			Array.from(document.getElementById("playerList").children).forEach((playerListItem) => {
				if (aimbot && target?.name && target[H.playing] === playerListItem.textContent.slice(0, -3)) playerListItem.style.backgroundColor = "blue";
				else playerListItem.style.backgroundColor = "";
			});
		};
		const highlightCrossHairReticleDot = function(bool) {
			let dot = document.getElementById("reticleDot");
			let crosshair = document.getElementById("crosshairContainer");
			let setTo = "";
			if (bool === true) setTo = "green";
			else if (bool === false) setTo = "red";
			dot.style.backgroundColor = setTo;
			Array.from(crosshair.children).forEach((part) => {
				part.style.backgroundColor = setTo;
			});
		};
		const handleChat = function(textAfterLastColon) {
			const responses = {
				"report": "report me? pffft. i'm not even human",
				"aimbot": "what aimboot?",
				"bot": "you're a booooT",
				"stop": "u stop",
				"cheater": "Ho Ho Ho! Santa's Here! And I'm gonna give you a present! A ban! <AdminSpoof enabled>",
				"cheat": "oh youre gonna cheat accuse? keep yapping",
				"hack": "oh youre gonna cheat accuse? keep yapping",
				"hax": "oh youre gonna cheat accuse? keep yapping",
				"nice": "its not that good.",
				"copy": "ERROR: maximum number of loops reached",
				"stupid": "as an AI, i am much smarter than you.",
				"dumb": "you cant calculate the square root of 967 as fast as i can",
				"moron": "lets see you perform a billion operations a second",
				"idiot": "to be fair, i cant talk as much as you",
				"mod": "you can't defeat me?",
				"admin": "you cant block irl",
				"eggfor": "imagine ur in an argument irl and u try to call the mods",
				"bro": "brooooo what",
				"spam": "me, spamming? im just chatting",
				"mute": "you dont want to listen to me talk? how weak hahaha",
				"ban": "ban me? no free speech these days",
				"message": "bleep bloop. are you a robot?",
				"lol": "lolzedong",
				"dude": "dudeinator3000: what is your request",
				"what": "dude what",
				"annoy": "im not that bad",
				"mock": "im not doing anything wrong",
				"wtf": "watch your profanity",
				"bad": "ur not just bad at that",
				"suck": "pretty sure you cant say that??",
				"i'm": "yes you are",
				"im": "yes you are",
				"i am": "yes you are",
				"u r": "no im not. proof?",
				"you r": "no im not. proof?",
				"you are": "no im not. proof?",
				"you're": "no im not. proof?",
				"do you": "truthfully, no i dont.",
				"do u": "honestly, yes i do.",
				"imagine": "imagine who asked",
				"f u": "funny uncleburger",
				"gg": "good grief",
				"shut up": "B͇͈͉͍͎̽̾̿̀́͂̓̈́͆͊͋͌͗ͅ͏͎͗͏͇͇̽̾̿̀́̽̿̀̀́̽̀͆̓̈́̓͋͌ͅ͏͌͏͎͉͗͗͌̓̓̓̓̓́̿",
				"shush": "cant be bothered to be quiet",
				"nuh": "uh huh",
				"proof": "after looking at this proof, i can confidently say its 100% fake.",
				"real": "pretty sure its fake. you have no proof.",
				"fake": "pretty sure its real. you have enough proof.",
				"true": "its false. everyone knows this. why dont you?",
				"false": "its true. everyone knows this. why dont you?",
				"test": "testing me? do it on rats instead.",
				"gift": "\"not everything in life is free\" - me, today",
				"free": "\"not everything in life is free\" - me, today",
				"toxic": "thats really rude",
				"level": "[Your rank is: Subpar Human]",
				"rank": "[Your rank is: Subpar Human]",
				"clan": "[Your clan is: The Gay Nobodies]",
				"smart": "well, i mean, i am quite clever..",
				"clever": "well, i mean, i am quite clever..",
				"hello": "i dont need your stupid greetings.",
				"bye": "wa wa wa you'll see everyone later anyway",
				"thank": "why are you so thankful? grow up!!",
				"please": "you: \"please, please pleeease??\", why dont you PLEASE GET THE POINT",
				"sorry": "why are you sorry all the time? just live your life.",
				"help": "help yourself",
				"kill": "more like kill everyone with the new godmode exploit",
				"kys": "more like kill everyone with the new godmode exploit",
				"kek": ":trol_4k:",
				"bwd": "cool company. i have coffees with wizups every day",
				"wiz": "E X H A U S T P I P E",
				"stroke": "im just stroking",
				"flip": "please dont say that my parents are watching",
				"frick": "please dont say that im streaming rn",
				"harri": "yeah i beat him in a 1v1, 10:1, very easy",
				"chill": "you think i can just CALM DOWN?!?",
				"stfu": "just reported u for swearing",
				"look": "im looking but im not seeing",
				"watch": "are you quite alright up there? i dont have EYES",
				"yap": "i dont yap 😭",
				"yip": "i dont yip 😢",
				"bark": "i dont bark 💀",
				"nigg": "WHOA we cant have racism in our egg game! tone it down yo",
				"fuck": "phrase that more elegantly before talking to me",
				"shit": "yea i ѕhit on ur grave. and ur friends' ones too.",
				"piss": "ima be pisѕing on ur grave icl",
				"dick": "i refuse to comment",
				"sex": "i refuse to comment",
				"pussy": "i refuse to comment",
				"loser": "ive been speccing u, cheater",
				"code": "A1BXDQ is the code",
				"rip": "rest in small pieces",
				"aight": "aight has a lot of letters for one syllable. think about it.",
				"alright": "alright, pack it up boys",
				"omg": "oh my GAWWWD!",
				"npc": "literally you rn:",
				"ayo": "ur an npc",
				"yes": "no, what do you mean? elaborate you npc",
				"bruh": "did you just say bruh? that is a racist remark",
				"noob": "1v1 me you bot",
				"lmfao": "who is this LMFAO, and is he working with LMBAO?",
				"zert": "we're just better",
				"huh": "huh, are u bot?",
				"your mom": "Yo mama's so poor, she can't even afford to pay attention",
				"your mum": "Yo mama's so poor, she can't even afford to pay attention",
				"shut": "you shaddup you lil' twerrrrrrp",
				"dang": "ching chong bing bong wing wong",
				"damn": "damns are for the fishies",
				"care": "yes you do you bot",
				"go away": "no, you go away u bot",
				"...": "an ellipsis wooow you're so fancy i bet youre sooo smart",
				"literally": "can you literally just be quiet",
				"hah": "its not that funny, take a seat",
				"leave": "i'll leave if you leave",
				"hey": "hey is for horses",
				"mess": "you might not want to mess with me",
				"statefarm": "i am not using StateFarm, definitely not on greasyfork",
				"client": "i am not using ЅtateFarm, definitely not on greasyfork",
				"script": "i am not using ЅtateFarm, definitely not on greasyfork",
				"troll": "yea i sometimes do trolling. but its not that funny",
				"well done": "thanks g",
				"patch": "the patch is coming soon..! sooner..!! soonest..!!!",
				"phrase": "sorry if i have a somewhat \"mechanical\" manner of speech",
				"response": "sorry if i have a somewhat \"mechanical\" manner of speech",
				"commu": "404. response not found.",
				"that was": "was it though?",
				"that is": "is it though?",
				"how": "i want to know too",
				"shell": "thats what we're playing",
				"weird": "ur odd",
				"lag": "get better internet pooron lol",
				"wth": "watch your heckin profanity",
				"kid": "hi im chris hansen. why dont you take a seat for me?",
				"pedo": "hi im chris hansen. why dont you take a seat for me?",
				"minor": "hi im chris hansen. why dont you take a seat for me?",
				"boy": "OH GOD YOU SAID BOY IM REPORTING YOU FOR SEXISM",
				"girl": "OH GOD YOU SAID GIRL IM REPORTING YOU FOR SEXISM",
				"monkey": "get outta ur rainforest",
				"trash": "nah ur father took the recycling with him when he left",
				"father": "look in a mirror for a lack of father figure",
				"dad": "look in a mirror for a lack of father figure",
				"mad": "imagine getting mad over an egg game",
				"deathlylove": "he has a deathly love for men",
				"better": "that's me",
				"angry": "imagine getting angry over an egg game",
				"sad": "imagine getting sad over an egg game",
				"happy": "imagine getting happy over an egg game",
				"love": "imagine feeling love in an egg game",
				"hate": "imagine feeling hatred in an egg game",
				"buck": "bucks arent even rare",
				"flame": "ive got so many flames, i give them away",
				"albino": "albinos are way too common. i just dont know what to do with them!",
				"server": "the server is down",
				"perfect": "i cant say i agree",
				"think": "i cant say i agree",
				"4k": "sorry, maximum resolution is 360p. upgrade to ЅtateFarm Pro for 480p!",
				"gen": "sorry, this requires an active ЅtateFarm Pro subscription",
				"tf": "toasted fries",
				"1v1": "no ew go away",
				"doescolder": "doescolder is a cutie",
				"puppy": "who?",
				"seq": "seq is a cutie",
				"black": "im not programmed to be racis- oops, no im not a bot",
				"esp": "you think people can see thru walls? thats absurd",
				"why": "why are you asking me? are you lonely?",
				"?": "ask a better question",
				"oh": "ohhhhhh yeahh!!!",
				"no": "ohhhhhh yeeesss",
				"@": "very clever lmaoo",
				"ssh": "Enter statefarm_bot@192.168.0.18's password:",
				"pass": "\\*grins, leans back into chair\\* We're in."
			};
			const foundKeywords = Object.keys(responses).filter((keyword) => textAfterLastColon.toLowerCase().includes(keyword.toLowerCase()));
			if (foundKeywords.length > 0) {
				const firstKeyword = foundKeywords[0];
				sendChatMessage(responses[firstKeyword]);
				return true;
			}
			return false;
		};
		const constructChatPacket = function(str) {
			if (str.length > 255) {
				log("%c UH OH UR PACKET IS TOO LONG!!!!");
				str.length = 255;
			}
			var arr = new Uint8Array(2 * str.length + 2);
			arr[0] = C.chat;
			arr[1] = str.length;
			for (var i = 0; i < str.length; i++) {
				arr[2 * i + 2] = str[i].charCodeAt(0) & 255;
				arr[2 * i + 3] = str[i].charCodeAt(0) >> 8 & 255;
			}
			return arr;
		};
		const extractChatPacket = function(packet) {
			var pack_arr;
			if (!(packet instanceof ArrayBuffer)) pack_arr = new Uint8Array(packet);
			else pack_arr = packet;
			var str = "";
			for (var i = 0; i < pack_arr[1]; i++) str += String.fromCharCode(pack_arr[2 * i + 2] + (pack_arr[2 * i + 3] << 8));
			return str;
		};
		const chatPacketHandler = function(packet) {
			let string = extractChatPacket(packet);
			return packet;
		};
		const yawpitch = {
			magicValue: .0025,
			listener: null,
			movementsToApply: {
				x: 0,
				y: 0,
				reset: () => {
					yawpitch.movementsToApply.x = 0;
					yawpitch.movementsToApply.y = 0;
				}
			},
			listenerHook: (event, originalListener) => {
				originalListener.call(this, event);
			},
			movePointer: (movementX = 0, movementY = 0) => {
				yawpitch.setMouseParams();
				yawpitch.listener({
					movementX: Math.round(movementX),
					movementY: Math.round(movementY),
					x: 1,
					isTrusted: true
				});
			},
			getAndSetYawPitch: (viaWasm = true) => {
				if (viaWasm) {
					const result = unsafeWindow.get_yaw_pitch();
					ss.MYPLAYER[H.yaw] = result.yaw;
					ss.MYPLAYER[H.pitch] = result.pitch;
					ss.MYPLAYER[H.coords] = result.coords;
					return result;
				} else return {
					yaw: ss.MYPLAYER[H.yaw],
					pitch: ss.MYPLAYER[H.pitch],
					coords: ss.MYPLAYER[H.coords]
				};
			},
			setMouseParams: (mouseSpeed = 50, mouseInvert = 0, scopeFov = .9, scope = false, uniqueId = ss.MYPLAYER[H.uniqueId]) => {
				unsafeWindow.set_mouse_params(mouseSpeed, mouseInvert, scopeFov, scope, uniqueId);
			},
			changeByMovement: (x = 0, y = 0) => {
				let effectiveMouseSpeed = (ss.SETTINGS.mouseSpeed ? Number(ss.SETTINGS.mouseSpeed) : 50) * (ss.SETTINGS.mouseInvert ? Number(ss.SETTINGS.mouseInvert) : 0) / 50;
				yawpitch.movePointer(x * effectiveMouseSpeed, y * effectiveMouseSpeed);
			},
			changeByYawPitchDiff: (yaw = 0, pitch = 0) => {
				yawpitch.changeByMovement(yaw / yawpitch.magicValue, pitch / yawpitch.magicValue);
			},
			radianAngleDiff: (angle1 = 0, angle2 = 0) => {
				const fullCircle = 2 * Math.PI;
				angle1 = (angle1 % fullCircle + fullCircle) % fullCircle;
				angle2 = (angle2 % fullCircle + fullCircle) % fullCircle;
				let diff = Math.abs(angle1 - angle2);
				diff = Math.min(diff, fullCircle - diff);
				if ((angle1 - angle2 + fullCircle) % fullCircle > Math.PI) return -diff;
				else return diff;
			},
			setToYawPitch: (yaw = 0, pitch = 0) => {
				const yawDiff = yawpitch.radianAngleDiff(ss.MYPLAYER[H.yaw], yaw);
				const pitchDiff = yawpitch.radianAngleDiff(ss.MYPLAYER[H.pitch], pitch);
				yawpitch.changeByYawPitchDiff(yawDiff, pitchDiff);
			},
			getCoordsForYawPitch: (yaw = 0, pitch = 0) => {
				const starting = yawpitch.getAndSetYawPitch(false);
				yawpitch.setToYawPitch(yaw, pitch);
				const atDesired = yawpitch.getAndSetYawPitch(false);
				yawpitch.setToYawPitch(starting.yaw, starting.pitch);
				return atDesired;
			}
		};
		const predictBloom = function(yaw, pitch, amountToGenerate = ss.MYPLAYER[H.weapon].constructor.standardMeshName !== "dozenGauge" ? 1 : 20) {
			let seed = ss.MYPLAYER[H.randomGen].seed;
			const accuracy = ss.MYPLAYER[H.weapon].accuracy;
			const range = ss.MYPLAYER[H.weapon].constructor.range;
			const generateSeed = () => {
				let numbers = [];
				for (var i = 0; i < 3; i++) {
					seed = (seed * 9301 + 49297) % 233280;
					numbers.push((seed / 233280 - .5) * accuracy);
				}
				const playerRotationMatrix = L.BABYLON.Matrix.RotationYawPitchRoll(yaw, pitch, 0);
				const playerAndRangeMatrix = L.BABYLON.Matrix.Translation(0, 0, range).multiply(playerRotationMatrix);
				const bloomMatrix = L.BABYLON.Matrix.RotationYawPitchRoll(numbers[0], numbers[1], numbers[2]);
				const finalBulletTranslation = playerAndRangeMatrix.multiply(bloomMatrix).getTranslation();
				const bulletYaw = calculateYaw(finalBulletTranslation);
				const bulletPitch = calculatePitch(finalBulletTranslation);
				return [yawpitch.radianAngleDiff(yaw, bulletYaw), yawpitch.radianAngleDiff(pitch, bulletPitch)];
			};
			const values = [];
			for (var i = 0; i < amountToGenerate; i++) values.push(generateSeed());
			let bulletYawDiff = 0;
			let bulletPitchDiff = 0;
			for (var i = 0; i < amountToGenerate; i++) {
				bulletYawDiff += values[i][0];
				bulletPitchDiff += values[i][1];
			}
			bulletYawDiff /= amountToGenerate;
			bulletPitchDiff /= amountToGenerate;
			return [bulletYawDiff, bulletPitchDiff];
		};
		const applyBloom = function(dir, multiplier) {
			const bloomValues = predictBloom(dir.yawReal, dir.pitchReal);
			return {
				yawReal: dir.yawReal + bloomValues[0] * multiplier,
				pitchReal: dir.pitchReal + bloomValues[1] * multiplier
			};
		};
		var velocityVector, newPos, cappedVector, rayVector;
		const predictPosition = function(player) {
			velocityVector = velocityVector || new L.BABYLON.Vector3(0, 0, 0);
			velocityVector.x = player.dx;
			velocityVector.y = player.dy;
			velocityVector.z = player[H.dz];
			const bulletSpeed = ss.MYPLAYER[H.weapon].constructor.velocity;
			const timeDiff = distancePlayers(player, 1) / bulletSpeed + 1;
			newPos = newPos || new L.BABYLON.Vector3(0, 0, 0);
			newPos.x = player[H.x], newPos.y = player[H.y], newPos.z = player[H.z], newPos = newPos.add(velocityVector.scale(timeDiff));
			newPos.y = player[H.y];
			cappedVector = cappedVector || new L.BABYLON.Vector3(0, 0, 0);
			cappedVector.x = velocityVector.x, cappedVector.y = .29, cappedVector.z = velocityVector.z;
			Math.capVector3(cappedVector);
			const terminalVelocity = -cappedVector.y;
			const timeAccelerating = Math.min(timeDiff, (terminalVelocity - velocityVector.y) / -.012);
			if (player.onGround == 0) {
				const predictedY = velocityVector.y * timeAccelerating + timeAccelerating * timeAccelerating * -.012 / 2 + newPos.y + terminalVelocity * Math.max(timeDiff - timeAccelerating, 0);
				rayVector = rayVector || new L.BABYLON.Vector3(0, 0, 0);
				rayVector.x = 0, rayVector.y = predictedY - newPos.y, rayVector.z = 0;
				const rayToGround = ss.RAYS[H.rayCollidesWithMap](newPos, rayVector, ss.RAYS.grenadeCollidesWithCell);
				newPos.y = Math.max(rayToGround ? rayToGround.pick.pickedPoint.y : 0, predictedY) - .072;
			}
			return newPos;
		};
		const getLineOfSight = function(target, usePrediction) {
			if (target && target[H.actor] && target[H.actor][H.bodyMesh] && target[H.actor][H.bodyMesh].renderOverlay && target[H.actor][H.bodyMesh].overlayColor.g == 1) return;
			let myPlayerPosition = ss.MYPLAYER[H.actor][H.mesh].position;
			let targetPosition = extract("prediction") ? predictPosition(target) : target[H.actor][H.mesh].position;
			let directionVector = getDirectionVectorFacingTarget(targetPosition, true);
			directionVector.x = -directionVector.x;
			directionVector.y = -directionVector.y;
			directionVector.z = -directionVector.z;
			let rotationMatrix = L.BABYLON.Matrix.RotationYawPitchRoll(calculateYaw(directionVector), calculatePitch(directionVector), 0);
			directionVector = L.BABYLON.Matrix.Translation(0, 0, ss.MYPLAYER[H.weapon].constructor.range).multiply(rotationMatrix).getTranslation();
			let position = L.BABYLON.Matrix.Translation(0, .1, 0).multiply(rotationMatrix).add(L.BABYLON.Matrix.Translation(myPlayerPosition.x, myPlayerPosition.y + .3, myPlayerPosition.z)).getTranslation();
			let rayCollidesWithMap = ss.RAYS[H.rayCollidesWithMap](position, directionVector, ss.RAYS.projectileCollidesWithCell);
			let distanceToMap = rayCollidesWithMap ? L.BABYLON.Vector3.DistanceSquared(position, rayCollidesWithMap.pick.pickedPoint) : Infinity;
			return L.BABYLON.Vector3.DistanceSquared(position, targetPosition) < distanceToMap;
		};
		const getAimbot = function(target, viaWasm) {
			let directionVector = getDirectionVectorFacingTarget(extract("prediction") ? predictPosition(target) : target[H.actor][H.mesh].position, true, -.05);
			let direction = {
				yawReal: calculateYaw(directionVector),
				pitchReal: calculatePitch(directionVector)
			};
			if (extract("antiBloom")) direction = applyBloom(direction, 1);
			const wasmResult = viaWasm && yawpitch.getCoordsForYawPitch(direction.yawReal, direction.pitchReal);
			return {
				yaw: viaWasm ? wasmResult.yaw : direction.yawReal,
				pitch: viaWasm ? wasmResult.pitch : direction.pitchReal,
				coords: viaWasm ? wasmResult.coords : null
			};
		};
		const newPredictGrenade = (player = ss.MYPLAYER, grenadeThrowPower = 0) => {
			const ssGrenade = new ss.Grenade(null, true);
			var rotMat = L.BABYLON.Matrix.RotationYawPitchRoll(player[H.yaw], -player[H.pitch], 0);
			var vec = L.BABYLON.Matrix.Translation(0, .1, 1).multiply(rotMat).getTranslation();
			var posMat = L.BABYLON.Matrix.Translation(0, -.1, -.1);
			var pos = (posMat = (posMat = posMat.multiply(rotMat)).add(L.BABYLON.Matrix.Translation(player[H.x], player[H.y] + .3, player[H.z]))).getTranslation();
			var speed = .13 * grenadeThrowPower + .08;
			vec.x *= speed;
			vec.y *= speed;
			vec.z *= speed;
			pos.x = Math.floor(256 * pos.x) / 256;
			pos.y = Math.floor(256 * pos.y) / 256;
			pos.z = Math.floor(256 * pos.z) / 256;
			vec.x = Math.floor(256 * vec.x) / 256;
			vec.y = Math.floor(256 * vec.y) / 256;
			vec.z = Math.floor(256 * vec.z) / 256;
			var x = pos.x;
			var y = pos.y;
			var z = pos.z;
			var dx = -vec.x * 2;
			var dy = vec.y * 2;
			var dz = -vec.z * 2;
			ssGrenade.throw(player, {
				x,
				y,
				z
			}, {
				x: dx,
				y: dy,
				z: dz
			});
			const result = {
				positions: [],
				finalPos: null
			};
			while (ssGrenade.ttl > 0) {
				result.positions.push({
					x: ssGrenade.x,
					y: ssGrenade.y,
					z: ssGrenade.z
				});
				ssGrenade.update();
			}
			result.finalPos = {
				x: ssGrenade.x,
				y: ssGrenade.y,
				z: ssGrenade.z
			};
			return result;
		};
		const setupNameSpriteNew = function(actor) {
			let player = actor[H.player_];
			var tx = player.id % 4 * 512;
			var ty = 2048 - Math.floor(player.id / 4) * 256;
			if (actor && actor?.nameSprite && actor?.nameSprite?.color) {
				ss.nameTexture.clearRect(tx, ty - 256, 512, 256);
				let teamColorsNameSprite = [
					"white",
					"rgba(0, 191, 255, 1)",
					"rgba(255, 64, 64, 1)"
				];
				if (extract("nametagInfo")) {
					actor.drawTextOnNameTexture(player.name, 0, 32, 50, teamColorsNameSprite[player.team], true);
					let health = player[H.hp] + player.hardBoiledValue;
					let healthColour = player.hardBoiledValue > 0 ? "blue" : health > 30 ? "white" : "red";
					if (player[H.hp] > 100) healthColour = "green";
					actor.drawTextOnNameTexture(health.toFixed(0), 85, 75, 60, healthColour, true);
					actor.drawTextOnNameTexture(player.score, -95, 75, 60, "yellow", true);
					actor.drawTextOnNameTexture(`${player.bestGameStreak} | ${Math.min(player.totalKills / (player.totalDeaths || 1), 99).toFixed(1)}`, -20, 100, 25, "yellow", true);
					actor.drawTextOnNameTexture(`${player[H.weapon].ammo[H.rounds]} / ${player[H.weapon].ammo.store}`, -20, 75, 25, "yellow", true);
				} else actor.drawTextOnNameTexture(player.name, 0, 32, 60, "white", true);
			}
		};
		const injectScript = function() {
			createAnonFunction("replaceFeeds", (url) => {
				try {
					if (extract("replaceFeeds")) {
						if (url.includes("data/shellYouTube.json")) return replacementFeedURL + "shellYouTube.json";
						else if (url.includes("data/shellNews.json")) return replacementFeedURL + "shellNews.json";
					}
				} catch (error) {}
				return url;
			});
			createAnonFunction("noMiniEgg", () => {
				return extract("noMiniEgg");
			});
			createAnonFunction("fixCamera", function() {
				return isKeyToggled[bindsArray.zoom] && extract("zoom") * (Math.PI / 180) || extract("fov") * (Math.PI / 180) || 1.25;
			});
			createAnonFunction("getChatLimit", function() {
				return extract("chatExtend") && 999999 || 4;
			});
			createAnonFunction("getDisableChatFilter", function() {
				return extract("disableChatFilter");
			});
			createAnonFunction("getSkinHack", function() {
				try {
					return extract("unlockSkins");
				} catch {
					return false;
				}
			});
			createAnonFunction("getGrenadeValue", function() {
				try {
					if (extract("grenadeMax")) return extract("grenadePower");
					return ss.grenadeThrowPower;
				} catch {
					return ss.grenadeThrowPower;
				}
			});
			createAnonFunction("getAdminSpoof", function() {
				try {
					return extract("adminSpoof");
				} catch {
					return false;
				}
			});
			createAnonFunction("shouldNotCull", function() {
				return true;
			});
			createAnonFunction("shouldInputSpace", function() {
				return !document.activeElement.classList.contains("tp-txtv_i");
			});
			createAnonFunction("getPointerEscape", function() {
				return sneakyDespawning ? false : noPointerPause || unsafeWindow.extern.inGame && !document.getElementById("healthContainer").style.display == "block";
			});
			createAnonFunction("setNewGame", function() {
				newGame = true;
				log("NEWGAME");
				timeJoinedGame = Date.now();
				if (ss.SCENE && ss.SCENE.skyboxTextureThing) ss.SCENE.skyboxTextureThing = false;
			});
			createAnonFunction("realPlayerData", function(playerData) {
				cachedRealData[playerData[H.uniqueId_]] = {
					name: playerData[H.name_],
					uniqueId: playerData[H.uniqueId_]
				};
			});
			createAnonFunction("interceptSignedIn", function(args) {});
			createAnonFunction("interceptDeath", (KILLER, DEAD) => {
				if (DEAD.name === KILLER.name === ss.MYPLAYER.name) return;
				if (DEAD.name == ss.MYPLAYER.name) {
					if (extract("cheatAccuse")) sendChatMessage(`${KILLER.name} might be cheating, everyone report`);
				} else if (KILLER.name == ss.MYPLAYER.name) {
					unsafeWindow.BAWK.play("on_killed_enemy");
					if (extract("autoEZ")) sendChatMessage(`imagine dying ${DEAD.name}, couldn't be me`);
				}
			});
			createAnonFunction("interceptDrawTextOnNameTexture", (nameTexture, args, player) => {
				nameTextures[args[0]] = [nameTexture, [args]];
			});
			createAnonFunction("interceptAudio", function(name, panner, somethingelse) {
				let customAudio = soundsSFC[name];
				if (panner && panner.positionX && extract("distanceMult") !== 1) panner.setPosition(panner.context.listener.positionX.value - (panner.context.listener.positionX.value - panner.positionX.value) * extract("distanceMult"), panner.context.listener.positionY.value - (panner.context.listener.positionY.value - panner.positionY.value) * extract("distanceMult"), panner.context.listener.positionZ.value - (panner.context.listener.positionZ.value - panner.positionZ.value) * extract("distanceMult"));
				if (extract("muteGame")) name = "silence";
				else if (customAudio) {
					if (customAudio.disablePanning) playAudio(name);
					else playAudio(name, panner);
					name = "silence";
				}
				return [
					name,
					panner,
					somethingelse
				];
			});
			createAnonFunction("beforeFiring", function(MYPLAYER) {
				if (extract("aimbot") && (extract("aimbotRightClick") ? isRightButtonDown : true) && (targetingComplete || extract("silentAimbot")) && ss.MYPLAYER[H.playing] && currentlyTargeting && currentlyTargeting[H.playing]) {
					const aimbot = getAimbot(currentlyTargeting, true);
					let diffYaw = Math.radDifference(ss.MYPLAYER[H.yaw], aimbot.yaw) * 180 / Math.PI;
					let diffPositive = diffYaw > 0;
					diffYaw *= diffPositive ? 1 : -1;
					for (let i = 0; i < 3; i++) {
						let state = ss.MYPLAYER[H.stateBuffer][Math.mod(ss.MYPLAYER.stateIdx - i, 256)];
						let newControlKeys = 0;
						if (diffYaw > 157.5) {
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.left ? ss.CONTROLKEYSENUM.right : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.right ? ss.CONTROLKEYSENUM.left : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.up ? ss.CONTROLKEYSENUM.down : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.down ? ss.CONTROLKEYSENUM.up : 0;
						} else if (diffYaw > 112.5) if (diffPositive) {
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.left ? ss.CONTROLKEYSENUM.up + ss.CONTROLKEYSENUM.right : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.right ? ss.CONTROLKEYSENUM.down + ss.CONTROLKEYSENUM.left : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.up ? ss.CONTROLKEYSENUM.down + ss.CONTROLKEYSENUM.right : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.down ? ss.CONTROLKEYSENUM.up + ss.CONTROLKEYSENUM.left : 0;
						} else {
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.left ? ss.CONTROLKEYSENUM.down + ss.CONTROLKEYSENUM.right : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.right ? ss.CONTROLKEYSENUM.up + ss.CONTROLKEYSENUM.left : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.up ? ss.CONTROLKEYSENUM.down + ss.CONTROLKEYSENUM.left : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.down ? ss.CONTROLKEYSENUM.up + ss.CONTROLKEYSENUM.right : 0;
						}
						else if (diffYaw > 67.5) if (diffPositive) {
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.left ? ss.CONTROLKEYSENUM.up : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.right ? ss.CONTROLKEYSENUM.down : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.up ? ss.CONTROLKEYSENUM.right : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.down ? ss.CONTROLKEYSENUM.left : 0;
						} else {
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.left ? ss.CONTROLKEYSENUM.down : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.right ? ss.CONTROLKEYSENUM.up : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.up ? ss.CONTROLKEYSENUM.left : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.down ? ss.CONTROLKEYSENUM.right : 0;
						}
						else if (diffYaw > 22.5) if (diffPositive) {
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.left ? ss.CONTROLKEYSENUM.up + ss.CONTROLKEYSENUM.left : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.right ? ss.CONTROLKEYSENUM.down + ss.CONTROLKEYSENUM.right : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.up ? ss.CONTROLKEYSENUM.up + ss.CONTROLKEYSENUM.right : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.down ? ss.CONTROLKEYSENUM.down + ss.CONTROLKEYSENUM.left : 0;
						} else {
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.left ? ss.CONTROLKEYSENUM.down + ss.CONTROLKEYSENUM.left : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.right ? ss.CONTROLKEYSENUM.up + ss.CONTROLKEYSENUM.right : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.up ? ss.CONTROLKEYSENUM.up + ss.CONTROLKEYSENUM.left : 0;
							newControlKeys |= ss.CONTROLKEYS & ss.CONTROLKEYSENUM.down ? ss.CONTROLKEYSENUM.down + ss.CONTROLKEYSENUM.right : 0;
						}
						state.controlKeys |= newControlKeys;
						state[H.yaw] = setPrecision(aimbot.yaw);
						state[H.pitch] = setPrecision(aimbot.pitch);
						state[H.coords] = aimbot.coords;
						ss.MYPLAYER[H.stateBuffer][Math.mod(ss.MYPLAYER.stateIdx - i, 256)] = state;
					}
					if (extract("aimbSemiSilent") && extract("silentAimbot")) {
						const aimbot = getAimbot(currentlyTargeting, true);
						ss.MYPLAYER[H.yaw] = aimbot.yaw;
						ss.MYPLAYER[H.pitch] = aimbot.pitch;
						ss.MYPLAYER[H.coords] = aimbot.coords;
					}
					log("force update?");
					ss.SERVERSYNC();
				}
			});
			createAnonFunction("onConnectFail", function(ERRORCODE, ERRORARRAY) {
				const terminationMessage = findKeyByValue(ERRORARRAY, ERRORCODE);
				if (ERRORCODE !== ERRORARRAY.mainMenu) {
					errorString = terminationMessage;
					log("StateFarm has detected a connection error...", errorString, ERRORCODE, ERRORARRAY);
					if (document.getElementById("genericPopup").textContent === " Game Not Found Sorry! This game ID is either invalid, or no longer exists.  OK ") {
						document.getElementById("genericPopup").children[1].textContent = "joinCode not found! check your autoJoin settings and get a new code";
						document.getElementById("genericPopup").children[2].children[1].textContent = "heeheeheehaw";
						document.getElementById("genericPopup").children[0].children[1].textContent = "MAKE NEW AUTOJOIN CODE";
					}
					if (extract("autoUnban") && (errorString == "sessionNotFound" || errorString == "readyBeforeReady")) {
						if (!attemptedAutoUnban) isBanned = true;
						else if (isBanned) {
							log("StateFarm: Gonna refresh, could be banned but you can't play with this error anyways.");
							createPopup("AutoUnban: Reloading page in 5 seconds...");
							attemptedAutoUnban = true;
							setTimeout(() => {
								if (extract("autoUnban")) {
									createPopup("AutoUnban: Reloading page now.");
									reloadPage();
									attemptedAutoUnban = false;
								} else createPopup("AutoUnban: Reload page cancelled.");
							}, 5e3);
						}
					}
					createPopup("Leaving due to connection error " + ERRORCODE + " (" + errorString + ").");
					change("leaveGame");
				}
				if (!GAMECODE || GAMECODE == void 0) return;
				const HISTORY_MAX_ENTRIES = 6;
				let history = GM_getValue("StateFarm_GameHistory");
				if (history) history = JSON.parse(history);
				if (!history) history = [];
				const recent = history[0];
				if (history.length > 0 && recent.code && recent.code == GAMECODE) {
					++recent.amount;
					recent.time = Date.now();
					recent.message = terminationMessage;
					recent.closeCode = ERRORCODE;
				} else {
					const arrElem = {
						amount: 1,
						code: GAMECODE,
						string: getRoomAsString(),
						time: Date.now(),
						message: terminationMessage,
						closeCode: ERRORCODE
					};
					history.unshift(arrElem);
				}
				while (history.length > HISTORY_MAX_ENTRIES) history.pop();
				GM_setValue("StateFarm_GameHistory", JSON.stringify(history));
			});
			createAnonFunction("modifyChat", function(msg) {
				if (msg[0] === "%") {
					let command = msg.slice(1);
					msg = "";
					if (command != "pts") broadcastToBots(command);
					else handleCommand("pathtarget set 9 1 9");
				} else {
					if (msg !== lastSentMessage) {
						if (extract("chatFilterBypass")) msg = msg.replaceAll("fuck", "ꬵսсk");
						if (extract("chatFilterBypass") && ss.isBadWord(msg)) {
							const exactLookAlikes = {
								"a": "а",
								"c": "с",
								"e": "е",
								"h": "հ",
								"i": "і",
								"j": "ј",
								"n": "𝗇",
								"o": "о",
								"p": "р",
								"q": "q",
								"u": "ս",
								"w": "ԝ",
								"y": "у",
								"B": "В",
								"D": "ꓓ",
								"E": "Е",
								"H": "Η",
								"I": "І",
								"J": "Ј",
								"U": "𐓎",
								"V": "ⴸ",
								"W": "Ԝ",
								"X": "Χ",
								"Y": "Υ",
								"Z": "Ζ"
							};
							const lookAlikes = {
								"0": "O",
								"1": "𝟷",
								"2": "𝟸",
								"3": "Ꝫ",
								"4": "４",
								"5": "𝟻",
								"6": "𝟨",
								"7": "𝟽",
								"8": "𝟪",
								"9": "𝟫",
								"@": "＠",
								"b": "ᖯ",
								"d": "𝚍",
								"f": "ꬵ",
								"g": "𝗀",
								"k": "𝚔",
								"l": "ⅼ",
								"m": "ｍ",
								"r": "𝗋",
								"s": "𐑈",
								"t": "𝚝",
								"v": "∨",
								"x": "ⅹ",
								"z": "𝗓",
								"A": "𐊠",
								"C": "𐊢",
								"F": "𐊇",
								"G": "Ԍ",
								"K": "Κ",
								"L": "Ⅼ",
								"M": "Μ",
								"N": "Ν",
								"O": "Ο",
								"P": "Ρ",
								"Q": "𝖰",
								"R": "𖼵",
								"S": "Ѕ",
								"T": "Τ"
							};
							let onlyReplace = msg;
							for (let char in exactLookAlikes) onlyReplace = onlyReplace.replaceAll(char, exactLookAlikes[char]);
							if (ss.isBadWord(onlyReplace)) {
								log("chatFilterBypass: exacts were not enough, trying full...");
								for (let char in lookAlikes) onlyReplace = onlyReplace.replaceAll(char, lookAlikes[char]);
							}
							if (!ss.isBadWord(onlyReplace)) {
								log("chatFilterBypass: lookalike replace worked!");
								msg = onlyReplace;
							}
							if (ss.isBadWord(onlyReplace)) {
								log("chatFilterBypass: lookalike did NOT work, falling back to reverse...");
								msg = ["‮"].concat(reverseString(msg).split("")).join("");
							}
						}
					}
					if (extract("tallChat") && !msg.includes("᥊")) msg = msg + "᥊";
				}
				return msg;
			});
			createAnonFunction("modifyControls", function(CONTROLKEYS) {
				if (startUpComplete) if (forceControlKeys) {
					forceControlKeysCache = true;
					return forceControlKeys;
				} else if (forceControlKeysCache) {
					forceControlKeysCache = false;
					return 0;
				} else {
					if (extract("autoWalk")) CONTROLKEYS |= ss.CONTROLKEYSENUM.up;
					if (extract("bunnyhop") && isKeyToggled.Space) CONTROLKEYS |= ss.CONTROLKEYSENUM.jump;
					if (extract("autoJump")) {
						if (Date.now() > lastAutoJump + extract("autoJumpDelay")) {
							CONTROLKEYS |= ss.CONTROLKEYSENUM.jump;
							lastAutoJump = Date.now();
						}
					}
					if (extract("autoStrafe")) {
						if (Date.now() > autoStrafeValue[0]) {
							if (autoStrafeValue[1] == 0) {
								autoStrafeValue[0] = Date.now() + randomInt(500, 3e3);
								autoStrafeValue[2] = Math.random() > .5 ? "left" : "right";
								autoStrafeValue[1] = 1;
							} else if (autoStrafeValue[1] == 1) {
								autoStrafeValue[3] = Date.now() + randomInt(500, 2e3);
								autoStrafeValue[1] = 2;
							} else if (autoStrafeValue[1] == 2 && Date.now() < autoStrafeValue[3]) CONTROLKEYS |= ss.CONTROLKEYSENUM[autoStrafeValue[2]];
							else if (autoStrafeValue[1] == 2) {
								CONTROLKEYS &= ~ss.CONTROLKEYSENUM.left;
								CONTROLKEYS &= ~ss.CONTROLKEYSENUM.right;
								autoStrafeValue[1] = 0;
							}
						}
					}
					return CONTROLKEYS;
				}
			});
			createAnonFunction("quickRespawn", function(input) {
				if (input == 3e3) return sneakyDespawning ? 0 : 3e3;
				else if (input == 5 && sneakyDespawning) return 1;
				else if (extract("quickRespawn")) {
					if (input == 5) return 4;
				}
				return input;
			});
			createAnonFunction("getInstantSpectateEnterSpectatorModeBlocked", function(enterSpectatorModeBlocked) {
				return extract("instantSpectate") ? false : enterSpectatorModeBlocked;
			});
			createAnonFunction("getInstantSpectateRespawnTime", function(respawnTime) {
				return extract("instantSpectate") ? -1 : respawnTime;
			});
			createAnonFunction("gameBlacklisted", function(t) {
				let result = false;
				if (blacklistedGameCodes.length >= 1) blacklistedGameCodes.forEach(function(code) {
					if (t.id == code) {
						log("Blacklisted Game: ", t.id, code);
						result = true;
						return true;
					}
				});
				return extract("gameBlacklist") == false || extract("gameBlacklist") == void 0 ? false : result;
			});
			createAnonFunction("getParticleSpeedMultiplier", function() {
				return extract("particleSpeedMultiplier");
			});
			const originalAddEventListener = EventTarget.prototype.addEventListener;
			log("what the bball???");
			EventTarget.prototype.addEventListener = function(type, listener, options) {
				try {
					const target = this;
					const tag = target.tagName || target.constructor.name;
					if (type == "pointermove" && listener.name == "real") {
						yawpitch.listener = listener;
						log("Gotcha. REAL pointermove listener detected.");
						const originalListener = listener;
						listener = function(event) {
							yawpitch.listenerHook(event, originalListener);
						};
					}
				} catch (e) {
					console.warn("Event hook error:", e);
				}
				return originalAddEventListener.call(this, type, listener, options);
			};
			let _apc = HTMLElement.prototype.appendChild;
			let shellshock_og = null;
			HTMLElement.prototype.appendChild = function(node) {
				if (node.tagName === "SCRIPT" && node.innerHTML && node.innerHTML.startsWith("(()=>{")) {
					shellshock_og = node.innerHTML;
					node.innerHTML = applyStateFarm(node.innerHTML);
				}
				return _apc.call(this, node);
			};
			const proto = unsafeWindow.HTMLScriptElement.prototype;
			const original = Object.getOwnPropertyDescriptor(proto, "textContent") || Object.getOwnPropertyDescriptor(unsafeWindow.Node.prototype, "textContent");
			Object.defineProperty(proto, "textContent", {
				get: function() {
					let textContent = original.get.call(this);
					if (textContent && textContent.startsWith("(()=>{")) return shellshock_og;
					else return textContent;
				},
				set: original.set,
				configurable: true,
				enumerable: true
			});
			function sha256(str) {
				const utf8 = new TextEncoder().encode(str);
				const k = Uint32Array.of(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
				let h = Uint32Array.of(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
				const pad = new Uint8Array((utf8.length + 9 & -64) + 64);
				pad.set(utf8), pad[utf8.length] = 128;
				new DataView(pad.buffer).setUint32(pad.length - 4, utf8.length << 3, false);
				let w = new Uint32Array(64), v, i, j, a, b, c, d, e, f, g, h0, S0, S1, ch, maj, temp1, temp2;
				for (i = 0; i < pad.length; i += 64) {
					v = new DataView(pad.buffer, i, 64);
					for (j = 0; j < 16; j++) w[j] = v.getUint32(j << 2, false);
					for (; j < 64; j++) w[j] = w[j - 16] + (w[j - 15] >>> 7 ^ w[j - 15] << 25 ^ w[j - 15] >>> 18 ^ w[j - 15] << 14 ^ w[j - 15] >>> 3) + w[j - 7] + (w[j - 2] >>> 17 ^ w[j - 2] << 15 ^ w[j - 2] >>> 19 ^ w[j - 2] << 13 ^ w[j - 2] >>> 10) >>> 0;
					[a, b, c, d, e, f, g, h0] = h;
					for (j = 0; j < 64; j++) {
						S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
						ch = e & f ^ ~e & g;
						temp1 = h0 + S1 + ch + k[j] + w[j] >>> 0;
						S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
						maj = a & b ^ a & c ^ b & c;
						temp2 = S0 + maj >>> 0;
						h0 = g, g = f, f = e, e = d + temp1 >>> 0, d = c, c = b, b = a, a = temp1 + temp2 >>> 0;
					}
					h[0] += a, h[1] += b, h[2] += c, h[3] += d, h[4] += e, h[5] += f, h[6] += g, h[7] += h0;
				}
				return h.reduce((s, x) => s + x.toString(16).padStart(8, "0"), "");
			}
			const applyStateFarm = function(js) {
				log("%cATTEMPTING TO START STATEFARM", "color: magenta; font-weight: bold; font-size: 1.5em; text-decoration: underline;");
				let match;
				let clientKeys;
				let originalJS = fetchTextContent("/js/shellshock.js");
				const getVardata = function(hash) {
					hash = "latest";
					return fetchTextContent(clientKeysURL + hash + ".json?v=" + Date.now());
				};
				hash = sha256(js);
				onlineClientKeys = getVardata(hash);
				const vardataCache = GM_getValue("StateFarm_VarDataCache") || {};
				const previousHash = GM_getValue("StateFarm_PreviousHash") || "";
				if (onlineClientKeys == "value_undefined" || onlineClientKeys == null || __DEBUG__$1.forceTriggerVarData) {
					onlineClientKeys = getVardata("latest");
					const vardataFallback = extract("vardataFallback");
					const customVarData = extract("vardataCustom");
					let vardataType = extract("vardataType");
					if (vardataType == "justOnce") change("vardataType", 0);
					if (vardataType == "nextHash" && hash !== previousHash) {
						change("vardataType", 0);
						vardataType = "never";
					}
					let convertedCustom;
					try {
						convertedCustom = JSON.parse(customVarData);
						log("did convert");
					} catch (e) {
						log("did not convert");
						convertedCustom = false;
					}
					const cachedForHash = vardataCache && vardataCache[hash];
					const cachedRecent = vardataCache && vardataCache.latest;
					log(cachedForHash, cachedRecent);
					if (vardataType != "never" && convertedCustom && vardataFallback == "loadCustom" && convertedCustom.vars && convertedCustom.checksum && !__DEBUG__$1.forceTriggerVarData) clientKeys = convertedCustom;
					else if (vardataType != "never" && onlineClientKeys && vardataFallback == "loadLatest" && !__DEBUG__$1.forceTriggerVarData) {} else if (vardataType != "never" && cachedForHash && vardataFallback == "loadCached" && !__DEBUG__$1.forceTriggerVarData) clientKeys = JSON.parse(cachedForHash);
					else if (vardataType != "never" && cachedRecent && vardataFallback == "loadRecent" && !__DEBUG__$1.forceTriggerVarData) clientKeys = JSON.parse(cachedRecent);
					else {
						createVarDataPopup([
							{
								id: "loadLatest",
								enabled: !!onlineClientKeys,
								text: "Load Latest\n(online) (RECOMMENDED)",
								isHighlighted: true,
								action: () => {
									change("vardataFallback", 1);
									if (extract("vardataType") == "never") change("vardataType", 1);
									if (extract("vardataType") == "justOnce") change("vardataType", 3);
									closeVardataPopup();
								}
							},
							{
								id: "loadCached",
								enabled: true,
								text: "Input Custom",
								isHighlighted: false,
								action: () => {
									const error = () => createPopup("Inputted VarData isn't valid.", "error");
									try {
										let converted = JSON.parse(prompt("Enter vardata:"));
										if (converted.vars && converted.checksum) {
											change("vardataCustom", inputValue);
											change("vardataFallback", 4);
											change("vardataType", 1);
											closeVardataPopup();
										} else error();
									} catch (e) {
										error();
									}
								}
							},
							{
								id: "loadRecent",
								enabled: !!vardataCache.latest,
								text: "Load Cached\n(most recent)",
								isHighlighted: false,
								action: () => {
									change("vardataFallback", 3);
									if (extract("vardataType") == "never") change("vardataType", 1);
									closeVardataPopup();
								}
							}
						]);
						return;
					}
				}
				if (onlineClientKeys && !clientKeys) clientKeys = JSON.parse(onlineClientKeys);
				GM_setValue("StateFarm_PreviousHash", hash);
				if (vardataCache && onlineClientKeys) {
					vardataCache[clientKeys.checksum] = onlineClientKeys;
					vardataCache.latest = onlineClientKeys;
					GM_setValue("StateFarm_VarDataCache", vardataCache);
				}
				log(hash, clientKeys);
				H = clientKeys.vars;
				if (!C) log("WARNING: YOU SHOULD REALLY ADD COMMCODES TO YOUR VARDATA");
				let injectionString = "";
				try {
					log("%cSTATEFARM INJECTION STAGE 1: GATHER VARS", "color: yellow; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
					match = new RegExp(`\.OPEN&&[a-zA-Z$_]+\.[a-zA-Z$_]+&&![a-zA-Z$_]+&&(.*?)\(\)\}`).exec(js);
					log("SERVERSYNC:", match);
					H.SERVERSYNC = match ? match[1].replace(/[a-zA-Z$_\.\[\]]+shots/, 0) + "}}}" : "function(){console.log('no serversync womp womp')}";
					match = new RegExp(`,setTimeout\\(\\(\\(\\)=>\\{([=A-z0-9\\(\\),\\{ \\.;!\\|\\?:\\}]+send\\([a-zA-Z$_]+\\))`).exec(js);
					log("PAUSE:", match);
					H.PAUSE = match ? `function(){${match[1]}}` : "function(){console.log('no pause womp womp')}";
					const variableNameRegex = /^[a-zA-Z0-9_$\[\]"\\\.,]*$/;
					for (let name in H) {
						let deobf = H[name];
						if (name == "SERVERSYNC" || name == "PAUSE" || variableNameRegex.test(deobf)) injectionString = `${injectionString}${name}:  (() => { let variable = "value_undefined"; try { eval("variable = ${deobf};"); } catch (error) { return "value_undefined"; }; return variable; })(),`;
						else {
							alert("Message from the StateFarm Devs: WARNING! The keys inputted contain non-variable characters! There is a possibility that this could run code unintended by the StateFarm team, although possibly there is also a mistake. Do NOT proceed with using this, and report to the StateFarm developers what is printed in the console.");
							log("REPORT THIS IN THE DISCORD SERVER:", name, deobf, clientKeys);
							throw new Error("Inputted keys contain non-variable characters!");
						}
					}
					const modifyJS = function(find, replace, do_convert_regex = false) {
						let oldJS = js;
						do_convert_regex && (find = new RegExp(find, "g"));
						try {
							js = js.originalReplaceAll(find, replace);
						} catch (err) {
							log("%cReplacement failed! Likely a required var was not found. Attempted to replace " + find + " with: " + replace, "color: red; font-weight: bold; font-size: 0.6em; text-decoration: italic;");
							log(err);
						}
						if (oldJS !== js) log("%cReplacement successful! Injected code: replaced: " + find + " with: " + replace, "color: green; font-weight: bold; font-size: 0.6em; text-decoration: italic;");
						else log("%cReplacement failed! Attempted to replace " + find + " with: " + replace, "color: red; font-weight: bold; font-size: 0.6em; text-decoration: italic;");
					};
					const f = function(varName) {
						return varName.replace("$", "\\$");
					};
					log("%cSTATEFARM INJECTION STAGE 2: INJECT VAR RETRIEVAL FUNCTION AND MAIN LOOP", "color: yellow; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
					modifyJS(f(H.SCENE) + "." + f(H.render), `window["${functionNames.retrieveFunctions}"]({${injectionString}},true)||${H.SCENE}.render`, true);
					modifyJS("log(\"After Game Ready\"),", `log("After Game Ready"),window["${functionNames.retrieveFunctions}"]({${injectionString}}),`);
					log("%cSuccess! Variable retrieval and main loop hooked.", "color: green; font-weight: bold;");
					log("%cSTATEFARM INJECTION STAGE 3: INJECT CULL INHIBITION", "color: yellow; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
					modifyJS(`if(${f(H.CULL)})return`, `if(${functionNames.shouldNotCull}())return`);
					log("%cSuccess! Cull inhibition hooked " + f(H.CULL), "color: green; font-weight: bold;");
					log("%cSTATEFARM INJECTION STAGE 4: INJECT OTHER FUNCTIONS", "color: yellow; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
					modifyJS("fire(){var", "fire(){window." + functionNames.beforeFiring + "(this.player);var");
					modifyJS(`${H.fov}=1.25`, "fov=window." + functionNames.fixCamera + "()");
					modifyJS(`${H.fov}+(1.25`, "fov+(window." + functionNames.fixCamera + "()");
					const chatCull = /return\}[a-zA-Z$_]+\.length>4/.exec(js);
					if (chatCull) modifyJS(chatCull[0], chatCull[0].originalReplace("4", `window.${functionNames.getChatLimit}()`));
					modifyJS(`!${f(H.isBadWord)}(${f(H._insideFilterFunction)})`, `((!${f(H.isBadWord)}(${f(H._insideFilterFunction)}))||window.${functionNames.getDisableChatFilter}())`);
					let [_, elm, str] = js.match(/\)\),([a-zA-Z$_]+)\.innerHTML=([a-zA-Z$_]+),/);
					modifyJS(_, _ + `${f(H.isBadWord)}(${str})&&window.${functionNames.getDisableChatFilter}()&&!arguments[3]&&(${elm}.style.color="red"),`);
					match = js.match(/inventory\[[a-zA-Z$_]+\].id===[a-zA-Z$_]+.id\)return!0;return!1/);
					if (match) modifyJS(match[0], match[0] + `||window.${functionNames.getSkinHack}()`);
					else log("skin hack is broken");
					modifyJS("gameJoined_ received\"),", "gameJoined_ received\"),window." + functionNames.setNewGame + "(),");
					modifyJS("value.trim();", "value.trim();" + f(H._chat) + "=window." + functionNames.modifyChat + "(" + f(H._chat) + ");");
					match = new RegExp(`\\.prototype\\.${H._update}=function\\([a-zA-Z$_,]+\\)\\{`).exec(js)?.[0];
					if (!match) match = new RegExp(`\\.prototype\\.\\${H._update}=function\\([a-zA-Z$_,]+\\)\\{`).exec(js)?.[0];
					if (match) modifyJS(match, `${match}${f(H.CONTROLKEYS)}=window.${functionNames.modifyControls}(${f(H.CONTROLKEYS)});`);
					else log("player update is broken");
					modifyJS("isGameOwner(){return ", "isGameOwner(){return window." + functionNames.getAdminSpoof + "()?true:");
					modifyJS("adminRoles(){return ", "adminRoles(){return window." + functionNames.getAdminSpoof + "()?255:");
					const FUNCTIONPARAM = new RegExp("function " + f(H._connectFail) + "\\(([a-zA-Z$_]+)\\)").exec(js)[1];
					log("FUNCTIONPARAM:", FUNCTIONPARAM);
					modifyJS("function " + f(H._connectFail) + "(" + f(FUNCTIONPARAM) + "){", "function " + f(H._connectFail) + "(" + f(FUNCTIONPARAM) + "){window." + functionNames.onConnectFail + "(" + f(FUNCTIONPARAM) + "," + f(H.ERRORARRAY) + ");");
					modifyJS(",vueApp.onTutorialPopupClick()", "");
					modifyJS("alert", "console.log");
					modifyJS("onpointerlockchange=function(){", "onpointerlockchange=function(){if (window." + functionNames.getPointerEscape + "(arguments)) {return};");
					const DEATHARGS = new RegExp("function " + f(H._deathFunction) + "\\(([a-zA-Z$_]+,[a-zA-Z$_]+)\\)").exec(js)[1];
					log("DEATHARGS", DEATHARGS);
					modifyJS("function " + f(H._deathFunction) + "(" + DEATHARGS + "){", "function " + f(H._deathFunction) + "(" + f(DEATHARGS) + "){window." + functionNames.interceptDeath + "(" + f(DEATHARGS) + ");");
					modifyJS("showAdBlockerVideo", "hideAdBlockerVideo");
					modifyJS("5:10", functionNames.quickRespawn + "(5):" + functionNames.adBlocker + "(10)");
					modifyJS(",3e3),console.log", `,window["${functionNames.quickRespawn}"](3e3)),console.log`);
					modifyJS(`\{${H.enterSpectatorModeBlocked}\|\|`, `\{(window["${functionNames.getInstantSpectateEnterSpectatorModeBlocked}"](${H.enterSpectatorModeBlocked}))\|\|`);
					modifyJS(`\),${H.respawnTime}<0&&`, `\),(window["${functionNames.getInstantSpectateRespawnTime}"](${H.respawnTime}))&&`);
					match = js.match(/onesignal-bell-container"\);([a-zA-Z$_]+)=/);
					if (match) modifyJS(`getElementById("onesignal-bell-container");${match[1]}=Date.now()`, `getElementById("onesignal-bell-container");${match[1]}=0`);
					match = js.match(/region,([a-zA-Z$_]+)\(([a-zA-Z$_]+)/);
					if (match) modifyJS("region,", `region,window.${functionNames.gameBlacklisted}(${match[2]})?(${match[2]}.uuid="${getScrambled()}",${match[1]}(${match[2]}),vueApp.hideSpinner()):`);
					else log("blacklisted game is not working");
					match = js.match(/static play\(([a-zA-Z$_,]+)\){/);
					log("AUDIO INTERCEPTION", match);
					modifyJS(match[0], `${match[0]}[${match[1]}] = window.${functionNames.interceptAudio}(${match[1]});`);
					modifyJS("\"IFRAME\"==document.activeElement.tagName", `("IFRAME"==document.activeElement.tagName&&document.activeElement.id!=='sfChat-iframe')`);
					modifyJS(`infiniteDistance=!0;`, `infiniteDistance=!0;window["${skyboxName}"]=${H.skybox};`);
					modifyJS(`:{}};if(${H.playerData}.`, `:{}};window.${functionNames.realPlayerData}(${H.playerData});if(${H.playerData}.`);
					modifyJS(`"transparent")},`, `"transparent");window.${functionNames.interceptDrawTextOnNameTexture}(${H.nameTexture}, arguments, this.${H.player_})},`);
					modifyJS(`if(this.isAnonymous`, `window.${functionNames.interceptSignedIn}(arguments);if(this.isAnonymous`);
					modifyJS(`="SPACE",`, `="SPACE",window.${functionNames.shouldInputSpace}()&&`);
					modifyJS(/tp-/g, "");
					modifyJS(`window.location.href="https://free`, `let ballsack="https://free`);
					match = js.match(/0===[a-zA-Z0-9$_]+\)return!1;/);
					log("COLLIDER", match);
					modifyJS(match[0], match[0] + "var iterations=0;");
					modifyJS(">=0);){", ">=0);){iterations++;if (iterations >= 1e3) {console.log('oops lol');return false};");
					match = js.match(/function [a-zA-Z$_]+\([a-zA-Z$_]+,[a-zA-Z$_]+\)\{for\(var [a-zA-Z$_]+=0;[a-zA-Z$_]+<[a-zA-Z$_]+\.sprites/);
					const splitted = match[0].split("{");
					const delta = splitted[0].charAt(splitted[0].length - 2);
					modifyJS(match[0], splitted[0] + `{${delta}=${delta}*window.${functionNames.getParticleSpeedMultiplier}();` + splitted[1]);
					match = js.match(new RegExp(`function ${H.Grenade}\\(([a-zA-Z$_]+)\\)\\{`));
					modifyJS(`function ${H.Grenade}(${match[1]}){`, `function ${H.Grenade}(${match[1]}, ignoreActor){`);
					match = js.match(new RegExp(`this\\.([a-zA-Z$_]+)=new ${H.GrenadeActor}\\(this\\)`));
					modifyJS(`this.${match[1]}=new ${H.GrenadeActor}(this)`, `this.${match[1]}=ignoreActor?new Proxy({},{get: () => () => {}}):new ${H.GrenadeActor}(this)`);
					modifyJS(`${H.grenadeThrowPower},0,1))`, `window.${functionNames.getGrenadeValue}(),0,1))`);
					match = js.match(/\.prototype\.shellStreakShrinkPlayer=function\([a-zA-Z$_]+,[a-zA-Z$_]+,[a-zA-Z$_]+,[a-zA-Z$_]+\)\{/);
					modifyJS(match[0], `${match[0]}if (window.${functionNames.noMiniEgg}())return;`);
					modifyJS(/,function\(\)\{const ([a-zA-Z$_]+)="(.*?)\}\(\)/g, "");
					log(H);
					log(js);
					attemptedInjection = true;
					return js;
				} catch (error) {
					log(error);
					change("vardataType", 0);
					alert("An error occured, probably on our end. We recommend you use CTRL (cmd on mac) + SHIFT + R to \"hard reload\" the page. If this does not fix it, join our Discord server: " + discordURL);
					createPopup("Reloading page in 5 seconds...");
					setTimeout(() => {
						reloadPage();
					}, 5e3);
				}
			};
		};
		const deployBots = async () => {
			updateBotParams();
			if (!load("firstTimeBots")) {
				save("firstTimeBots", true);
				GM_openInTab(bottingGuideURL, { active: true });
			}
			GM_setValue("StateFarm_BotStatus", {});
			log("Deploying " + extract("numberBots") + " bots...");
			let botNames = [];
			for (let i = 0; i < extract("numberBots"); i++) {
				let name = extract("botUsername");
				if (extract("botCopyName")) {
					name = retrieveCopiedName();
					if (!name) {
						alert("StateFarm: Cannot copy names if you haven't been in a game!");
						return;
					}
				}
				botNames.push(name);
			}
			let canMassBot = void 0;
			for (let i = 0; i < extract("numberBots"); i++) {
				let leftOffset = i % 15 * 100;
				let topOffset = 0;
				let proxyURL = extract("proxyBots") == "static" ? window.location.host : proxyList[proxyListIndex];
				proxyListIndex = (proxyListIndex + 1) % proxyList.length;
				let params = "?AUTOMATED=true&StateFarm=";
				let name = botNames[i];
				if (extract("botAntiDupe")) name = name + String.fromCharCode(97 + Math.floor(Math.random() * 26));
				const addParam = function(module, setTo, noEnding) {
					params = params + module + ">" + JSON.stringify(setTo) + (noEnding ? "" : "<");
				};
				addParam("eggColor", extract("eggColorBots") == "random" ? randomInt(1, 7) : extractAsDropdownInt("eggColorBots"));
				addParam("autoStamp", extract("autoStampBots") == "random" ? randomInt(0, 6) : extractAsDropdownInt("autoStampBots"));
				addParam("autoHat", extract("autoHatBots") == "random" ? randomInt(0, 6) : extractAsDropdownInt("autoHatBots"));
				addParam("usernameAutoJoin", name, true);
				log("PARAMS:", params);
				if (!crackedShell) unsafeWindow.open("https://" + proxyURL + "/" + params, "_blank", `width=${extract("botWindowWidth")}},height=${extract("botWindowHeight")},left=` + leftOffset + ",top=0");
				else {
					try {
						if (canMassBot === void 0) {
							let data = await fetch(`https://${getScrambled().replace([-9], "")}.${location.host}/$/ping`);
							data = await data.text();
							if (data !== "OK") {
								alert("You are not on a version of CrackedShell that supports botting.");
								canMassBot = false;
								return;
							} else canMassBot = true;
						}
					} catch (err) {
						log(err);
						canMassBot = false;
						alert("You are not on a version of CrackedShell that supports botting.");
					}
					if (canMassBot === true) unsafeWindow.open(`https://${getScrambled().replace([-9], "")}.${location.host}/${params}&cs=${new URLSearchParams(new URL(location.href).searchParams).get("cs")}`, "_blank", `width=${extract("botWindowWidth")}},height=${extract("botWindowHeight")},left=` + leftOffset + ",top=0");
				}
			}
		};
		const constructBotParams = function() {
			const addParam = function(module, setTo, noEnding) {
				params = params + module + ">" + JSON.stringify(setTo) + (noEnding ? "" : "<");
			};
			let params = "";
			addParam("autoFireType", 1);
			addParam("blacklist", botBlacklist);
			addParam("enableBlacklistAimbot", true);
			addParam("whitelist", botWhitelist);
			addParam("enableWhitelistAimbot", true);
			addParam("enableWhenNoneVisible", true);
			addParam("aimbotTargetMode", 1);
			addParam("aimbotVisibilityMode", 1);
			addParam("prediction", extract("botAimbot"));
			addParam("aimbot", extract("botAimbot"));
			addParam("antiBloom", extract("botAimbot"));
			addParam("grenadeMax", extract("botAimbot"));
			addParam("autoRefill", extract("botAimbot"));
			addParam("autoFireAccuracy", extract("botAccuracy"));
			addParam("antiSneak", extract("botAutoShoot") ? 1.4 : 0);
			addParam("enableAutoFire", extract("botAutoShoot"));
			addParam("autoGrenade", extract("botAutoShoot"));
			addParam("autoWalk", extract("botAutoMove"));
			addParam("autoStrafe", extract("botAutoMove"));
			addParam("autoJump", extract("botAutoMove"));
			addParam("autoJumpDelay", 1500);
			addParam("enableTextures", !extract("botLowRes"));
			addParam("setDetail", extract("botLowRes") ? 2 : 0);
			addParam("enableSeizureX", extract("botSeizure"));
			addParam("enableSeizureY", extract("botSeizure"));
			addParam("renderDelay", extract("renderDelayBots"));
			addParam("muteGame", extract("botMuteGame"));
			addParam("autoJoin", extract("botAutoJoin"));
			addParam("mockMode", extract("botMock"));
			addParam("autoRespawn", extract("botRespawn"));
			addParam("autoEZ", extract("botAutoEZ"));
			addParam("cheatAccuse", extract("botCheatAccuse"));
			addParam("joinCode", extract("botJoinCode"));
			addParam("autoWeapon", extractAsDropdownInt("botWeapon") + 1);
			addParam("autoTeam", extractAsDropdownInt("botTeam"));
			addParam("autoUnban", extract("botAutoUnban"));
			addParam("autoLogin", extractAsDropdownInt("botAutoLogin"));
			addParam("loginDatabaseSelection", 1);
			addParam("autoRegion", extractAsDropdownInt("autoRegionBots"));
			addParam("autoGamemode", extractAsDropdownInt("autoGamemodeBots"));
			addParam("useCustomName", extract("useCustomNameBots"));
			addParam("autoMacro", extract("useBotMacro"));
			addParam("customMacro", extract("botMacro").replaceAll(">", "{greater}").replaceAll("<", "{less}"));
			addParam("leaveEmpty", extract("leaveEmptyBots"));
			addParam("autoLeave", extract("autoLeaveBots"));
			addParam("autoLeaveDelay", extract("autoLeaveDelayBots"));
			addParam("spamChat", extract("botSpam"));
			addParam("spamChatText", extract("spamChatTextBot"));
			addParam("tallChat", extract("botTallChat"), true);
			return params;
		};
		const detectURLParams = function() {
			if (getSearchParam("AUTOMATED") == "true") {
				log("Automated Window!");
				AUTOMATED = true;
			}
			let customSettings = getSearchParam("StateFarm");
			if (customSettings !== null) {
				customSettings = customSettings.split("|");
				URLParams = customSettings[0];
				log("StateFarm: Custom Settings in URL!", URLParams);
			}
		};
		const applySettings = function(receivedConfig, reset, secondPassThru) {
			log(AUTOMATED, receivedConfig);
			let settings = receivedConfig.split("<");
			if (reset) {
				initMenu(true);
				log("StateFarm: clearing before applying settings");
			}
			settings.forEach((element) => {
				element = element.split(">");
				if (element[0] == "customMacro") element[1] = element[1].replaceAll("{less}", "<").replaceAll("{greater}", ">");
				try {
					change(element[0], JSON.parse(element[1]));
				} catch (error) {
					log("fuck that was an error", element[0], error);
				}
			});
			createPopup("Custom StateFarm Settings Applying...");
			if (!secondPassThru) setTimeout(() => {
				if (receivedConfig) applySettings(receivedConfig, false, true);
			}, 150);
		};
		const updateBotParams = function() {
			if (AUTOMATED) createPopup("Automated window cannot config bots.", "error");
			else {
				const botParams = constructBotParams();
				broadcastToBots("setconfig " + btoa(unsafeWindow.unescape(encodeURIComponent(botParams))));
				log("StateFarm: attempted to set bot params.");
			}
		};
		const retrieveCopiedName = function() {
			const playerSlots = document.querySelectorAll(".playerSlot--name");
			const mapNames = Array.from(playerSlots).map((playerSlot) => playerSlot.textContent.trim());
			return mapNames[Math.floor(Math.random() * mapNames.length)];
		};
		const findKeyWithProperty = function(obj, propertyToFind) {
			for (const key in obj) {
				if (obj[key] === null || obj[key] === void 0) continue;
				if (!!obj[key] && (typeof obj[key] == "object" || typeof obj[key] == "function") && obj[key].hasOwnProperty(propertyToFind)) return key;
			}
			return null;
		};
		const findStringInLists = function(dictWithLists, str) {
			for (const key in dictWithLists) if (dictWithLists.hasOwnProperty(key)) {
				if (dictWithLists[key].includes(str)) return key;
			}
			return null;
		};
		const mainLoop = function() {
			const oneTime = function() {
				if (ss.MYPLAYER) {
					log("%cSTATEFARM IS ATTEMPTING TO CREATE FAKE BABYLON", "color: yellow; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
					const found = (babylon) => {
						L.BABYLON = babylon;
						H.actor = findKeyWithProperty(ss.MYPLAYER, H.mesh);
						log("StateFarm: found vars:", H);
						crosshairsPosition = new L.BABYLON.Vector3();
						Object.defineProperty(ss.MYPLAYER.scene, "forceWireframe", {
							configurable: false,
							get: () => {
								return extract("wireframe");
							},
							set: () => {}
						});
						if (AUTOMATED) automatedBorder.style.borderColor = "rgba(0, 0, 255, 1)";
					};
					const doFake = () => {
						L.BABYLONfake = {
							Color3: ss.GetBabylon("BABYLON.Color3"),
							Vector3: ss.GetBabylon("BABYLON.Vector3"),
							CubeTexture: ss.GetBabylon("BABYLON.CubeTexture"),
							PointLight: ss.GetBabylon("BABYLON.PointLight"),
							ArcRotateCamera: ss.GetBabylon("BABYLON.ArcRotateCamera"),
							Matrix: ss.GetBabylon("BABYLON.Matrix"),
							TransformNode: ss.TransformNode,
							MeshBuilder: ss.MeshBuilder,
							Viewport: ss.Viewport,
							VertexBuffer: ss.VertexBuffer,
							VertexData: ss.VertexData,
							SceneLoader: ss.SceneLoader
						};
						L.BABYLONfake.Matrix.RotationYawPitchRoll = L.BABYLONfake.Matrix[H.RotationYawPitchRoll];
						L.BABYLONfake.MeshBuilder.CreateLines = ss.CreateLines;
						createPopup("Created BabylonFake", "success");
						log("%cSTATEFARM SUCCESSFULLY LOADED FAKE BABYLON!", "color: green; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
						found(L.BABYLONfake);
					};
					const doImport = () => {
						log("%c(Fallback) STATEFARM IS ATTEMPTING TO LOAD L.BABYLON", "color: yellow; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
						var script = createStatefarmElement("script");
						script.src = babylonURL.format(H?.BabylonVersion || "7.21.1");
						script.onload = function() {
							if (unsafeWindow.BABYLON) {
								L.BABYLONimported = unsafeWindow.BABYLON;
								delete unsafeWindow.BABYLON;
								log("Imported Babylon.js successfully");
								log(L.BABYLONimported.Engine.Version);
								createPopup("Imported Babylon", "success");
								log("%cSTATEFARM SUCCESSFULLY IMPORTED BABYLON!", "color: green; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
								found(L.BABYLONimported);
							} else log("%cSTATEFARM COULD NOT LOAD L.BABYLON", "color: red; font-weight: bold; font-size: 1.2em; text-decoration: underline;");
						};
						document.body.appendChild(script);
					};
					if (extract("forceImport") && typeof GM_info !== "undefined") doImport();
					else try {
						doFake();
					} catch (error) {
						log("fake babylon creation failed");
						log(error);
						doImport();
					}
					ranOneTime = true;
				}
			};
			const initVars = function() {
				isBanned = false;
				errorString = void 0;
				forceControlKeys = void 0;
				if (newGame) {
					onlinePlayersArray = [];
					miniCamera = null;
				}
				if (extract("debug") && typeof playerLogger === "undefined") playerLogger = [];
				const weaponBox = document.getElementById("weaponBox");
				const chatItems = document.getElementById("chatOut").getElementsByClassName("chat-item");
				if (weaponBox.style.display != lastWeaponBox || chatItems.length != lastChatItemLength) {
					lastWeaponBox = weaponBox.style.display;
					lastChatItemLength = chatItems.length;
					const maxChat = extract("maxChat");
					const maxMessages = weaponBox.style.display === "block" && maxChat || 9999999;
					const startIndex = Math.max(0, chatItems.length - maxMessages);
					for (let i = chatItems.length - 1; i >= 0; i--) {
						const chatIndex = i - startIndex;
						const isInRange = chatIndex >= 0 && chatIndex < maxMessages;
						chatItems[i].style.display = isInRange ? "" : "none";
					}
				}
				if (didStateFarm) {
					if (!loggedGameMap) {
						log(ss.GAMEMAP.width, ss.GAMEMAP.height, ss.GAMEMAP.data);
						loggedGameMap = true;
					}
					username = ss.MYPLAYER?.name;
					crosshairsPosition.copyFrom(ss.MYPLAYER[H.actor][H.mesh].position);
					crosshairsPosition.y += .4;
					const forwardOffset = -5;
					const yaw = ss.MYPLAYER[H.yaw];
					const pitch = -ss.MYPLAYER[H.pitch];
					const forwardX = Math.sin(yaw) * Math.cos(pitch);
					const forwardY = Math.sin(pitch);
					const forwardZ = Math.cos(yaw) * Math.cos(pitch);
					crosshairsPosition.x += forwardX * forwardOffset;
					crosshairsPosition.y += forwardY * forwardOffset;
					crosshairsPosition.z += forwardZ * forwardOffset;
					ammo = ss.MYPLAYER[H.weapon].ammo;
					whitelistPlayers = (extract("whitelist") || "").split(",");
					blacklistPlayers = (extract("blacklist") || "").split(",");
					ss.MYPLAYER[H.actor].scene.texturesEnabled = extract("enableTextures");
				}
			};
			const updateLinesESP = function() {
				const objExists = Date.now();
				ss.PLAYERS.forEach((player) => {
					if (player && player !== ss.MYPLAYER && player[H.playing] && player[H.hp] > 0 && (!ss.MYPLAYER.team || player.team !== ss.MYPLAYER.team)) {
						const whitelisted = extract("whitelistESPType") == "highlight" || !extract("enableWhitelistTracers") || playerMatchesList(whitelistPlayers, player);
						const blacklisted = extract("blacklistESPType") == "justexclude" && extract("enableBlacklistTracers") && playerMatchesList(blacklistPlayers, player);
						const passedLists = whitelisted && !blacklisted;
						const tracersType = extract("tracersType");
						if (player.lookLineData && player.lookLineData.length === 6) {
							const x1 = player.lookLineData[0], y1 = player.lookLineData[1], z1 = player.lookLineData[2], x2 = player.lookLineData[3], y2 = player.lookLineData[4], z2 = player.lookLineData[5];
							const rx = ss.MYPLAYER[H.actor][H.mesh].position.x, ry = ss.MYPLAYER[H.actor][H.mesh].position.y, rz = ss.MYPLAYER[H.actor][H.mesh].position.z;
							const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1;
							const rpx = rx - x1, rpy = ry - y1, rpz = rz - z1;
							const cx = rpy * dz - rpz * dy, cy = rpz * dx - rpx * dz, cz = rpx * dy - rpy * dx;
							player.aimdistance = Math.sqrt(cx * cx + cy * cy + cz * cz) / Math.sqrt(dx * dx + dy * dy + dz * dz);
						}
						if (extract("predictionESP")) {
							if (!player.pred) {
								const pPTransformNode = new L.BABYLON.TransformNode("pPredTNode", player[H.actor].scene);
								pPTransformNode.parent = player[H.actor][H.mesh];
								player.pred = pPTransformNode;
							}
							if (player.pred && player.pred.getScene()) {
								player.pred.setAbsolutePosition(predictPosition(player));
								updateOrCreateLinesESP(player.pred, "pPredESP", hexToRgb(getColor("predictionESPColor", "predictionESPColorRainbow")));
								player.pred.exists = objExists;
								player.pred.tracerLines.visibility = false;
							}
						}
						let color, progress;
						if (extract("enableWhitelistTracers") && extract("whitelistESPType") == "highlight" && playerMatchesList(whitelistPlayers, player)) color = hexToRgb(extract("whitelistColor"));
						else if (extract("enableBlacklistTracers") && extract("blacklistESPType") == "highlight" && playerMatchesList(blacklistPlayers, player)) color = hexToRgb(extract("blacklistColor"));
						else if (tracersType == "proximity") {
							const distance = distancePlayers(player);
							if (distance < extract("tracersColor1to2")) {
								progress = distance / extract("tracersColor1to2");
								color = fadeBetweenColors(extract("tracersColor1"), extract("tracersColor2"), progress);
							} else if (distance < extract("tracersColor2to3")) {
								progress = (distance - extract("tracersColor1to2")) / (extract("tracersColor2to3") - extract("tracersColor1to2"));
								color = fadeBetweenColors(extract("tracersColor2"), extract("tracersColor3"), progress);
							} else color = hexToRgb(extract("tracersColor3"));
						} else if (tracersType == "static") color = hexToRgb(getColor("tracersColor1", "tracersColor1Rainbow"));
						else if (tracersType == "visibility") color = getLineOfSight(player) ? hexToRgb(getColor("tracersColor2", "tracersColor2Rainbow")) : hexToRgb(getColor("tracersColor1", "tracersColor1Rainbow"));
						updateOrCreateLinesESP(player, "playerESP", color);
						player.tracerLines.visibility = player[H.playing] && extract("tracers") && passedLists;
						player.lookDirLine.visibility = player[H.playing] && extract("lookTracers") && passedLists;
						player.box.visibility = extract("playerESP") && passedLists;
						if (player[H.actor]) {
							let eggSize = extract("eggSize");
							player[H.actor][H.bodyMesh].scaling._x = eggSize;
							player[H.actor][H.bodyMesh].scaling._y = eggSize;
							player[H.actor][H.bodyMesh].scaling._z = eggSize;
						}
						player[H.actor][H.bodyMesh][H.renderingGroupId] = extract("chams") ? 1 : 0;
						player.exists = objExists;
					}
					if (player) {
						if (!ss.SETTINGS.safeNames) {}
						if (extract("unfilterNames")) player.name = cachedRealData[player.uniqueId]?.name || player.name;
						else player.name = player?.normalName || player.name;
						if (extract("nametags") && player[H.actor] && player[H.actor].nameSprite) {
							player[H.actor].nameSprite._manager[H.renderingGroupId] = 1;
							player[H.actor].nameSprite[H.renderingGroupId] = 1;
							var h = Math.length3(player[H.x] - ss.MYPLAYER[H.x], player[H.y] - ss.MYPLAYER[H.y], player[H.z] - ss.MYPLAYER[H.z]), d = Math.pow(h, 1.25) * 2;
							player[H.actor].nameSprite.width = d / 10 + .6;
							player[H.actor].nameSprite.height = d / 20 + .3;
							ss.MYPLAYER[H.actor].scene.activeCamera.fov = .75;
						}
						if (!player.logged) {
							player.logged = true;
							if (extract("debug")) {
								playerLogger.push(player);
								log("Logged player: " + player.name, player);
							}
							if (extract("joinMessages") && !newGame) if (extract("publicBroadcast")) sendChatMessage((extract("joinLeaveBranding") ? "[SFC] " : "") + player.name + " joined.");
							else processChatItem("joined.", player.name, player.team, "rgba(0, 255, 0, 0.2)");
							onlinePlayersArray.push([
								player,
								player.name,
								player.team
							]);
							player[H.actor].setupNameSprite = (() => {
								setupNameSpriteNew(player[H.actor]);
							});
							player[H.actor].setupNameSprite();
						}
						if (framesPassed % extract("nametagInfoInterval") === 0) {
							let playerInfo = {
								score: player.score,
								totalDeaths: player.totalDeaths,
								bestGameStreak: player.bestGameStreak,
								team: player.team,
								hp: player[H.hp],
								hardBoiledValue: player.hardBoiledValue,
								shouldReplace: extract("nametagInfo")
							};
							let playerInfoOld = playerInfoCache[player[H.uniqueId]];
							if (playerInfoOld && (playerInfo.shouldReplace != playerInfoOld.shouldReplace || playerInfo.shouldReplace && (playerInfo.score != playerInfoOld.score || playerInfo.totalDeaths != playerInfoOld.totalDeaths || playerInfo.bestGameStreak != playerInfoOld.bestGameStreak || playerInfo.team != playerInfoOld.team || playerInfo.hp != playerInfoOld.hp || playerInfo.hardBoiledValue != playerInfoOld.hardBoiledValue))) player[H.actor].setupNameSprite();
							playerInfoCache[player[H.uniqueId]] = playerInfo;
							if (player[H.actor]?.nameSprite?.color) playerInfo.shouldReplace ? player[H.actor].nameSprite.color = ss.teamColors.textColor[0] : player[H.actor].nameSprite.color = ss.teamColors.textColor[player.team];
						}
						player.isOnline = objExists;
					}
				});
				playersInGame = onlinePlayersArray.length;
				for (let i = 0; i < onlinePlayersArray.length; i++) if (onlinePlayersArray[i][0] && onlinePlayersArray[i][0].isOnline == objExists) onlinePlayersArray[i][2] = onlinePlayersArray[i][0].team;
				else {
					if (extract("leaveMessages") && !newGame) if (extract("publicBroadcast")) sendChatMessage((extract("joinLeaveBranding") ? "[SFC] " : "") + onlinePlayersArray[i][1] + " left.");
					else processChatItem("left.", onlinePlayersArray[i][1], onlinePlayersArray[i][2], "rgba(255, 0, 0, 0.2)");
					onlinePlayersArray.splice(i, 1);
				}
				if (extract("ammoESP") || extract("ammoTracers") || extract("grenadeESP") || extract("grenadeTracers")) ss.OBJECTSVAR.getShadowMap()[H.renderList].forEach((item) => {
					if (item.isEnabled && item.isEnabled() && item[H.sourceMesh] && item[H.sourceMesh].name && (item[H.sourceMesh].name == "grenadeItem" || item[H.sourceMesh].name == "ammo")) {
						const itemType = item[H.sourceMesh].name;
						let color = itemType == "ammo" && extract("ammoESPColor") || extract("grenadeESPColor");
						color = hexToRgb(color);
						updateOrCreateLinesESP(item, "ammoESP", color);
						let willBeVisible = false;
						if (itemType == "ammo") {
							const regime = extract("ammoESPRegime");
							if (regime == "whendepleted" && ammo.store == 0) willBeVisible = true;
							else if (regime == "whenlow" && ammo.store <= ammo[H.capacity]) willBeVisible = true;
							else if (regime == "belowmax" && ammo.store < ammo[H.storeMax]) willBeVisible = true;
							else if (regime == "alwayson") willBeVisible = true;
						} else {
							const regime = extract("grenadeESPRegime");
							if (regime == "whendepleted" && ss.MYPLAYER[H.grenadeCount] == 0) willBeVisible = true;
							else if (regime == "whenlow" && ss.MYPLAYER[H.grenadeCount] <= 1) willBeVisible = true;
							else if (regime == "belowmax" && ss.MYPLAYER[H.grenadeCount] < ss.MYPLAYER[H.grenadeCapacity]) willBeVisible = true;
							else if (regime == "alwayson") willBeVisible = true;
						}
						item.box.visibility = willBeVisible && (itemType == "ammo" && extract("ammoESP") || extract("grenadeESP"));
						item.tracerLines.visibility = willBeVisible && (itemType == "ammo" && extract("ammoTracers") || extract("grenadeTracers"));
						item.exists = objExists;
					}
				});
				if (trajectory) {
					trajectory.dispose();
					trajectory = null;
				}
				if (extract("trajectories") && ss.MYPLAYER[H.grenadeCount] >= 1 && ss.MYPLAYER[H.playing]) {
					if (!trajectoryNade) {
						const clone = ss.cloneMesh("grenadeItem", ss.SCENE, null);
						if (clone) {
							clone.setEnabled(true);
							trajectoryNade = clone;
							trajectoryNade.renderOverlay = true;
							trajectoryNade[H.renderingGroupId] = 1;
							trajectoryNade.scaling.x = 2.5;
							trajectoryNade.scaling.y = 2.5;
							trajectoryNade.scaling.z = 2.5;
							trajectoryNade.color = new L.BABYLON.Color3(.627, .125, .941);
						}
					}
					let power = 0;
					if (extract("grenadeMax")) power = extract("grenadePower");
					else if (document.getElementById("grenadeThrowContainer").style.visibility === "visible") power = ss.grenadeThrowPower;
					const result = newPredictGrenade(ss.MYPLAYER, power);
					const lines = [result.positions.map((e) => new L.BABYLON.Vector3(e.x, e.y, e.z))];
					trajectory = L.BABYLON.MeshBuilder.CreateLineSystem("traject", { lines }, ss.SCENE);
					trajectory.color = new L.BABYLON.Color3(.627, .125, .941);
					trajectory[H.renderingGroupId] = 1;
					trajectoryNade.position = new L.BABYLON.Vector3(result.finalPos.x, result.finalPos.y, result.finalPos.z);
				} else if (trajectoryNade) {
					trajectoryNade.dispose();
					trajectoryNade = null;
				}
				for (let i = 0; i < ESPArray.length; i++) if (ESPArray[i][0] && ESPArray[i][0].exists == objExists) {} else {
					if (ESPArray[i][0]) {
						log("%cRemoving tracer line due to irrelevant object", "color: white; background: red");
						ESPArray[i][0].generatedESP = false;
					} else log("%cRemoving tracer line due to no longer exists", "color: white; background: red");
					ESPArray[i][1].dispose();
					ESPArray[i][2].dispose();
					if (ESPArray[i][3]) ESPArray[i][3].dispose();
					if (ESPArray[i][4]) ESPArray[i][4].dispose();
					ESPArray.splice(i, 1);
				}
				newGame = false;
			};
			createAnonFunction("retrieveFunctions", function(vars, doStateFarm) {
				Object.assign(ss, vars);
				if (doStateFarm) {
					didStateFarm = true;
					return F.STATEFARM();
				} else {
					log("StateFarm: creating silence audio");
					unsafeWindow.BAWK.sounds.silence = Object.assign({}, unsafeWindow.BAWK.sounds.ammo);
					unsafeWindow.BAWK.sounds.silence.end = .001;
				}
			});
			const applySkybox = () => {
				const delta2 = Date.now() - lastRandomSkyBoxChangeTime;
				const desire = extract("randomSkyBoxInterval") ? extract("randomSkyBoxInterval") * 60 * 1e3 : -1;
				if (extract("randomSkyBox") && delta2 != -1 && delta2 > desire) {
					const newIdx = randomInt(0, loadedSkyboxes.length - 1);
					log("skybox change overdue for " + (delta2 - desire) + "ms. New skybox index chosen: " + newIdx);
					change("skybox", newIdx);
					lastRandomSkyBoxChangeTime = Date.now();
				}
				if (!unsafeWindow[skyboxName]) return;
				if (!(extract("skybox") === "default" || extract("skybox") === true || ss.SCENE.skyboxTextureThing == extract("skybox"))) {
					let url = `${atob(extract("skybox"))}/skybox`;
					unsafeWindow[skyboxName].material.reflectionTexture = new L.BABYLON.CubeTexture(url, ss.SCENE);
					unsafeWindow[skyboxName].material.reflectionTexture.coordinatesMode = 5;
					ss.SCENE.skyboxTextureThing = extract("skybox");
				}
			};
			createAnonFunction("STATEFARM", function() {
				ss.PLAYERS.forEach((PLAYER) => PLAYER.hasOwnProperty("ws") ? ss.MYPLAYER = PLAYER : null);
				if (!verification.checkVerification()) return true;
				if (!ranOneTime) oneTime();
				else if (typeof L.BABYLON !== "undefined") {
					initVars();
					updateLinesESP();
					applySkybox();
					let isVisible;
					const player = currentlyTargeting || playerLookingAt || void 0;
					if (player && player[H.playing]) isVisible = getLineOfSight(player);
					highlightCrossHairReticleDot(extract("showLOS") ? isVisible : null);
					if (extract("radar")) {
						myPlayerDot.style.display = "block";
						ss.PLAYERS.forEach((player) => {
							updateRadar(player, ss.MYPLAYER);
						});
					} else {
						ss.PLAYERS.forEach((player) => {
							if (playerDotsMap.has(player[H.uniqueId])) {
								const playerDotToRemove = playerDotsMap.get(player[H.uniqueId]);
								mapEl.removeChild(playerDotToRemove);
								playerDotsMap.delete(player[H.uniqueId]);
							}
						});
						myPlayerDot.style.display = "none";
					}
					if (ss.MYPLAYER[H.playing]) {
						ss.CAMERA.position.y = extract("perspective") !== "firstPerson" ? extract("perspectiveY") || 0 : 0;
						ss.CAMERA.position.z = extract("perspective") !== "firstPerson" ? extract("perspective") == "thirdPerson" ? extract("perspectiveZ") || 0 : -extract("perspectiveZ") || 0 : 0;
						ss.CAMERA.rotation.x = extract("perspective") == "thirdPersonAlt" ? Math.PI : 0;
						if (ss.MYPLAYER.scope) {
							let finalFov = .4;
							let ourFov = extract("fov") * (Math.PI / 180);
							let percentage = (ss.CAMERA.fov - finalFov) / ourFov;
							ss.CAMERA.position.y = ss.CAMERA.position.y * percentage;
							ss.CAMERA.position.z = ss.CAMERA.position.z * percentage;
							ss.CAMERA.rotation.x = ss.CAMERA.rotation.x * percentage;
						}
						ss.MYPLAYER[H.actor][H.gunContainer]._children[0][H.renderingGroupId] = extract("perspective") !== "firstPerson" ? 0 : 2;
						ss.MYPLAYER[H.actor][H.gunContainer]._children[2][H.renderingGroupId] = extract("perspective") !== "firstPerson" ? 0 : 2;
						if (!ss.MYPLAYER.stampApplied) ss.MYPLAYER[H.actor].applyStamp(ss.MYPLAYER.stampItem);
						ss.MYPLAYER.stampApplied = true;
						if (!ss.MYPLAYER[H.actor].hat) ss.MYPLAYER[H.actor].wearHat(ss.MYPLAYER.hatItem);
						else ss.MYPLAYER[H.actor].hat.visibility = extract("perspective") !== "firstPerson" ? 1 : 0;
					}
					let filter = typeof extract("filter") == "number" ? extract("filter") : 2;
					if (ss.SCENE && ss.SCENE.appliedFilter !== filter) {
						ss.SCENE.materials.forEach((material) => {
							material.alphaMode = filter;
						});
						ss.SCENE.appliedFilter = filter;
					}
					if (ss.MYPLAYER && ss.MYPLAYER[H.actor] && ss.MYPLAYER[H.actor][H.mesh]) {
						ss.MYPLAYER[H.actor][H.mesh].scaling._y = extract("worldFlattening");
						ss.MYPLAYER[H.actor][H.gunContainer].scaling._x = extract("gunPosition") == "hidden" ? 0 : 1;
						ss.MYPLAYER[H.actor][H.gunContainer].scaling._y = extract("gunPosition") == "hidden" ? 0 : 1;
						ss.MYPLAYER[H.actor][H.gunContainer].scaling._x = extract("gunPosition") == "hidden" ? 0 : 1;
					}
					if (extract("spamChat")) {
						if (document.getElementById("chatIn").style.visibility == "visible") {
							if (spamDelay < Date.now()) {
								if (Date.now() > lastSpamMessage[0] + extract("spamChatDelay")) {
									let possibleMessages = extract("spamChatText").split("|");
									let chosenMessage = possibleMessages[spamMessageCount % possibleMessages.length];
									if (chosenMessage == lastSpamMessage[1]) chosenMessage += String.fromCharCode(97 + Math.floor(Math.random() * 26));
									sendChatMessage(chosenMessage);
									lastSpamMessage = [Date.now(), chosenMessage];
									spamMessageCount += 1;
								}
							} else if (spamDelay < Date.now() - 250) spamDelay = Date.now() + 250;
						}
					}
					if (extract("chatHighlight")) document.getElementById("chatOut").style.userSelect = "text";
					if (extract("autoRefill")) {
						if (ammo[H.rounds] == 0) ss.MYPLAYER.reload();
						else if (extract("smartRefill")) {
							if (ammo[H.rounds] <= {
								eggk47: 1,
								dozenGauge: 0,
								csg1: 1,
								rpegg: 0,
								smg: 1,
								m24: 0,
								aug: 3,
								cluck9mm: 1
							}[ss.MYPLAYER[H.weapon].constructor.standardMeshName]) ss.MYPLAYER.reload();
						}
					}
					if (extract("autoGrenade") && isVisible && ss.MYPLAYER[H.grenadeCount] > 0) ss.MYPLAYER.throwGrenade();
					if (extract("autoWeapon") !== "disabled" && !ss.MYPLAYER[H.playing]) {
						weaponArray.random = randomInt(0, 6);
						document.querySelectorAll(".weapon_img")[weaponArray[extract("autoWeapon")]].parentNode.click();
					}
					if (extract("revealBloom") || extract("showMinAngle")) {
						const distCenterToOuter = 2 * (200 / ss.CAMERA.fov);
						const bloomValues = predictBloom(ss.MYPLAYER[H.yaw], ss.MYPLAYER[H.pitch]);
						const centerX = unsafeWindow.innerWidth / 2;
						const centerY = unsafeWindow.innerHeight / 2;
						const offsettedX = centerX - 2 * distCenterToOuter * bloomValues[0];
						const offsettedY = centerY - 2 * distCenterToOuter * bloomValues[1];
						if (extract("revealBloom")) {
							redCircle.style.display = "";
							redCircle.style.bottom = offsettedY + "px";
							redCircle.style.right = offsettedX + "px";
						} else redCircle.style.display = "none";
						if (extract("showMinAngle")) {
							minangleCircle.style.display = "";
							let idkWhatThisIs = 25 * (1.25 / ss.CAMERA.fov);
							minangleCircle.style.width = extract("aimbotMinAngle") * idkWhatThisIs + "px";
							minangleCircle.style.height = extract("aimbotMinAngle") * idkWhatThisIs + "px";
							minangleCircle.style.bottom = centerY + "px";
							minangleCircle.style.right = centerX + "px";
						}
					}
					if (!extract("showMinAngle")) minangleCircle.style.display = "none";
					document.querySelectorAll("#playerList .playerSlot").forEach((slot) => {
						const usernameElement = slot.querySelector(".playerSlot--name");
						let username = usernameElement ? usernameElement.textContent.trim() : "";
						const badgeURLs = Array.from(findBadgesForUsername(username)).reverse();
						const existingBadges = slot.querySelectorAll(".badge-image");
						if (!extract("customBadges") || badgeURLs && badgeURLs.length < 1) existingBadges.forEach((badge) => badge.remove());
						else if (extract("customBadges") && username && badgeURLs && badgeURLs.length > 0 && existingBadges && existingBadges.length < 1) {
							existingBadges.forEach((badge) => badge.remove());
							const eggIcon = !!(slot.querySelector(".playerSlot--icons .fas.fa-egg:not(.hidden)") || slot.querySelector(".playerSlot--icons .fab.fa-twitch:not(.hidden)"));
							log(eggIcon, username);
							badgeURLs.forEach((badgeURL, index) => {
								const badgeImage = createStatefarmElement("img");
								badgeImage.src = badgeListURL + badgeURL;
								badgeImage.className = "badge-image";
								badgeImage.style.position = "absolute";
								badgeImage.style.height = "auto";
								badgeImage.style.width = "auto";
								badgeImage.style.maxHeight = "100%";
								badgeImage.style.maxWidth = "100%";
								badgeImage.style.right = `${-13 - index * 8 - (eggIcon ? 10 : 0)}%`;
								badgeImage.style.top = "50%";
								badgeImage.style.transform = "translateY(-50%)";
								slot.style.position = "relative";
								slot.appendChild(badgeImage);
							});
						}
					});
					let partyLightsIntensity = extract("partyLightsIntensity") || 0;
					if (extract("partyLightsEnabled") && partyLightsIntensity > 0 && !ss.SCENE.lights.find((light) => light.name === "light")) {
						log("Lets party :joe_cool:");
						partyLight = new L.BABYLON.PointLight("light", new L.BABYLON.Vector3(0, 10, 0), ss.SCENE);
						partyLight.diffuse = new L.BABYLON.Color3(1, 0, 0);
						partyLight.specular = new L.BABYLON.Color3(1, 1, 1);
					}
					if (partyLight) {
						partyLight.intensity = partyLightsIntensity;
						var hue = Date.now() / 1e3 % 1;
						partyLight.diffuse = hslToRgb(hue, 1, .5);
					}
					try {
						let minAccuracy = ss.MYPLAYER[H.weapon][H.accuracyMin] + ss.MYPLAYER[H.weapon][H.accuracyLoss];
						accuracyPercentage = (ss.MYPLAYER[H.weapon].accuracy - minAccuracy) / (ss.MYPLAYER[H.weapon][H.accuracyMax] - minAccuracy);
						accuracyPercentage = Math.max(0, accuracyPercentage);
					} catch (error) {
						accuracyPercentage = 1;
					}
					let playerLookingAtMinimum = 999999;
					playerLookingAt = void 0;
					let enemyMinimumDistance = 999999;
					enemyNearest = void 0;
					let previousTarget = currentlyTargeting;
					let selectNewTarget = !extract("antiSwitch") || !currentlyTargeting;
					if (selectNewTarget) currentlyTargeting = false;
					let isDoingAimbot = extract("aimbot") && (extract("aimbotRightClick") ? isRightButtonDown : true) && ss.MYPLAYER[H.playing];
					const targetType = extract("aimbotTargetMode");
					const visibilityMode = extract("aimbotVisibilityMode");
					let enemyMinimumValue = targetType == "pointingat" && extract("silentAimbot") ? deg2rad(extract("aimbotMinAngle")) : 1e4;
					let enemyMinimumAimDistance = 999999;
					enemyAimNearest = void 0;
					let didAimbot;
					const candidates = [];
					amountVisible = 0;
					ss.PLAYERS.forEach((player) => {
						if (player && player !== ss.MYPLAYER && player[H.playing] && player[H.hp] > 0) {
							const whitelisted = extract("enableWhenNoneVisible") || !extract("enableWhitelistAimbot") || extract("enableWhitelistAimbot") && playerMatchesList(whitelistPlayers, player);
							const blacklisted = extract("enableBlacklistAimbot") && playerMatchesList(blacklistPlayers, player);
							const passedLists = whitelisted && !blacklisted;
							player.distance = distancePlayers(player);
							player.adjustedDistance = distancePlayers(player, 2);
							const directionVector = getDirectionVectorFacingTarget(player);
							player.angleDiff = getAngularDifference(ss.MYPLAYER, {
								yawReal: calculateYaw(directionVector),
								pitchReal: calculatePitch(directionVector)
							});
							player.isVisible = getLineOfSight(player, extract("prediction"));
							if (player.angleDiff < playerLookingAtMinimum) {
								playerLookingAtMinimum = player.angleDiff;
								playerLookingAt = player;
							}
							if (passedLists) {
								if (isDoingAimbot) {
									if (player.adjustedDistance < enemyMinimumValue) {
										enemyMinimumDistance = player.adjustedDistance;
										enemyNearest = player;
									}
									if (player.aimdistance < enemyMinimumAimDistance) {
										enemyMinimumAimDistance = player.aimdistance;
										enemyAimNearest = player;
									}
									if (selectNewTarget) {
										candidates.push(player);
										if (player.isVisible) amountVisible += 1;
									}
								}
							}
						}
					});
					candidates.forEach((player) => {
						const valueToUse = targetType == "nearest" && player.adjustedDistance || targetType == "pointingat" && player.angleDiff || targetType == "lowestHp" && player[H.hp] || targetType == "mostKills" && -player.score || targetType == "aimingAt" && player.aimdistance;
						let visibleValue = !ss.MYPLAYER.team || player.team !== ss.MYPLAYER.team;
						if (visibilityMode == "disabled") {} else if (amountVisible < 1) visibleValue = (!extract("enableWhitelistAimbot") || extract("enableWhitelistAimbot") && playerMatchesList(whitelistPlayers, player)) && extract("enableWhenNoneVisible") || (visibilityMode == "onlyvisible" ? false : visibleValue);
						else visibleValue = visibleValue && player.isVisible;
						if (visibleValue && extract("aimbotTargetMode") !== "aimingAt") {
							if (valueToUse < enemyMinimumValue) {
								enemyMinimumValue = valueToUse;
								currentlyTargeting = player;
							}
						}
						if (extract("aimbotTargetMode") === "aimingAt") currentlyTargeting = enemyAimNearest;
					});
					const deltaTime = performance.now() - nowOld;
					nowOld += deltaTime;
					if (isDoingAimbot) if (currentlyTargeting && currentlyTargeting[H.playing] && currentlyTargeting[H.actor]) {
						didAimbot = true;
						currentAimTime += deltaTime;
						if (currentlyTargeting.generatedESP) {
							if (extract("tracers")) currentlyTargeting.tracerLines.color = new L.BABYLON.Color3(...hexToRgb(getColor("aimbotColor", "aimbotRainbow")));
							if (extract("playerESP")) currentlyTargeting.box.color = new L.BABYLON.Color3(...hexToRgb(getColor("aimbotColor", "aimbotRainbow")));
						}
						if (!extract("silentAimbot") && (!extract("noWallTrack") || getLineOfSight(player, true)) && (targetingComplete || deg2rad(extract("aimbotMinAngle")) > currentlyTargeting?.angleDiff)) {
							const aimbot = getAimbot(currentlyTargeting);
							let antiSnap = 1 - (extract("aimbotAntiSnap") || 0);
							const yawDiff = Math.radDifference(aimbot.yaw, ss.MYPLAYER[H.yaw]);
							const pitchDiff = Math.radDifference(aimbot.pitch, ss.MYPLAYER[H.pitch]);
							if (extract("aimbotAntiSnapRegime") != "slowEnd") {
								antiSnap /= (yawDiff ** 2 + pitchDiff ** 2) ** .5 * 4;
								if (extract("aimbotAntiSnapRegime") == "fastEnd") antiSnap *= antiSnap * 10;
								else if (extract("aimbotAntiSnapRegime") == "timeBased") antiSnap *= currentAimTime / extract("maxAimTime");
								antiSnap = Math.min(1, antiSnap);
							}
							yawpitch.setToYawPitch(ss.MYPLAYER[H.yaw] + yawDiff * antiSnap, ss.MYPLAYER[H.pitch] + pitchDiff * antiSnap);
							if (previousTarget !== currentlyTargeting) targetingComplete = false;
						}
						if (enemyMinimumDistance < extract("antiSneak")) {
							currentlyTargeting = enemyNearest;
							if (ammo[H.rounds] === 0) if (ss.MYPLAYER[H.weaponIdx] === 0) ss.MYPLAYER.swapWeapon(1);
							else ss.MYPLAYER.reload();
							ss.MYPLAYER.pullTrigger();
						}
					} else {
						currentAimTime -= deltaTime;
						if (extract("oneKill")) currentlyTargeting = "dead";
						else currentlyTargeting = false;
					}
					else {
						currentAimTime -= deltaTime;
						currentlyTargeting = false;
						targetingComplete = false;
						if (extract("enableSeizureX")) ss.MYPLAYER[H.yaw] += extract("amountSeizureX");
						if (extract("enableSeizureY")) ss.MYPLAYER[H.pitch] += extract("amountSeizureY");
					}
					currentAimTime = Math.clamp(currentAimTime, 0, extract("maxAimTime"));
					highlightTargetOnLeaderboard(currentlyTargeting, extract("highlightLeaderboard") ? didAimbot : false);
					if (extract("upsideDown")) {
						if (ss.MYPLAYER[H.pitch] < 1.5 && ss.MYPLAYER[H.pitch] > -1.5) ss.MYPLAYER[H.pitch] = Math.PI;
					}
					if (extract("silentRoll")) ss.MYPLAYER[H.pitch] += 2 * Math.PI;
					if (extract("enableAutoFire")) {
						let autoFireType = extract("autoFireType");
						let doAutoFire = false;
						if (autoFireType == "always") doAutoFire = true;
						else if (autoFireType == "whileAimbot" && didAimbot) doAutoFire = true;
						else if (autoFireType == "whileVisible" && isVisible) doAutoFire = true;
						else if (autoFireType == "whileVisAimbot" && isVisible && didAimbot) doAutoFire = true;
						if (doAutoFire) if (ammo[H.rounds] > 0 || ammo.store > 0) accuracyPercentage >= (extract("autoFireAccuracy") || 0) && ss.MYPLAYER.pullTrigger();
						else ss.MYPLAYER.melee();
					}
					if (extract("enableAutomatic")) {
						if (ss.MYPLAYER[H.weapon].constructor.originallySemi == null) ss.MYPLAYER[H.weapon].constructor.originallySemi = !ss.MYPLAYER[H.weapon].constructor.automatic;
						ss.MYPLAYER[H.weapon].constructor.automatic = true;
					} else if (ss.MYPLAYER[H.weapon].constructor.originallySemi) {
						ss.MYPLAYER[H.weapon].constructor.originallySemi = null;
						ss.MYPLAYER[H.weapon].constructor.automatic = false;
					}
					if (updateMenu) {
						updateMenu = false;
						initMenu(false);
						tp.mainPanel.hidden = extract("hideAtStartup");
					}
					if (extract("bobModifierEnabled")) {
						let modifier = extract("bobModifier") || 0;
						if (!(extract("bobModifierWhenStill") && ss.CONTROLKEYS !== 0)) ss.MYPLAYER[H.actor].bobbleIntensity = modifier;
					}
					let doRender = true;
					if (extract("renderDelay") > 10 && Date.now() < previousFrame + extract("renderDelay")) doRender = false;
					else previousFrame = Date.now();
					framesPassed++;
					return !doRender;
				}
			});
		};
		log("StateFarm: startUp()", attemptedInjection);
		startUp();
		log("StateFarm: after startUp()", attemptedInjection);
		if (typeof GM_info !== "undefined" && GM_info?.scriptHandler == "Tampermonkey") {
			let count = GM_getValue("StateFarm_TampermonkeyWarnings") || 0;
			count++;
			if (count <= 3) {
				if (confirm("StateFarm Client: Tampermonkey detected! StateFarm Client does not support this manager, use Violentmonkey instead. Press OK to be redirected to the Violentmonkey website. You can continue to use Tampermonkey, but expect unreliable results. For more information, visit our Discord server: " + discordURL)) GM_openInTab(violentmonkeyURL, { active: true });
				alert(`This alert will show three times in total. Please install Violentmonkey before reporting issues. ${3 - count} more warnings.`);
			}
			GM_setValue("StateFarm_TampermonkeyWarnings", count);
		}
		setTimeout(() => {
			if (unsafeWindow.location.pathname == "/" && !attemptedInjection) {
				log("Injection didn't work for whatever reason, let's try again.");
				reloadPage();
			}
		}, 3e4);
	})();
})();
