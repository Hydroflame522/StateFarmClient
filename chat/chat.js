let inIframe = window.location !== window.parent.location;//
console.log(`StateFarm Chat in iframe? ${inIframe}.`);
let debug = false;
let url = debug ? "ws://localhost:3069":"wss://statefarmchat.onlypuppy7.org";
let websocketDebugMessages = false;
var key = new DeviceUUID().get();
console.log(key);
let defaultSettings = {
  deviceKey: key,
  autoAuth: false,
  authToken: undefined,
  name: undefined,
};
let settingsLoc = "SFCHAT-SETTINGS"; // occurs one other location
let messageFunc = "SFCHAT-MESSAGE";
let settings;
if (inIframe) {
  window.addEventListener("message", (e) => {
    if (e.data.startsWith(settingsLoc)) {
      let string = e.data.replace(/SFCHAT-SETTINGS/gm, "");
      if (string.length == 0){
        settings = defaultSettings;
      }else {
        settings = JSON.parse(string);
        if (settings.length == 0) {
          settings = defaultSettings;
        }
      }
      main(settings);
    }
    getUpdateSettings(e);
  });
} else {
  settings = localStorage.getItem(settingsLoc);
  if (settings == null) {
    settings = defaultSettings;
  } else {
    settings = JSON.parse(settings);
  }
  settings['deviceKey'] = key;
  main(settings);
}
function updateSettings() { //send update to localstorage OR parent window (used for iframes)
  if (inIframe) { 
    window.parent.postMessage("SFCHAT-UPDATE" + JSON.stringify(settings), "*");
  } else {
    localStorage.setItem(settingsLoc, JSON.stringify(settings));
  }
}
function getUpdateSettings(e) { // updates settings based on an event (iframes)
  if (e.data.startsWith("SFCHAT-UPDATE")) {
    let data = JSON.parse(e.data.replace(/SFCHAT-UPDATE/gm, ""));
    Object.keys(data).forEach(
      (setting) => {
        settings[setting] = data[setting];
      }
    );
  }
}

function main() {
  console.log("Remove. Settings: " + JSON.stringify(settings));
  let socket = new ReconnectingWebSocket(url, null , {debug: websocketDebugMessages, reconnectInterval: 3000}); // Replace with your server's WebSocket URL
  let connected = false;
  let isAuthed = false;

  console.log(socket);
  if (settings.name == undefined){
    settings.name = "Guest"+ (Math.floor(Math.random() * 8999) + 1000);
    updateSettings();
  }
  let my_user = {name: settings.name};

  socket.addEventListener("open", (event) => {
    console.log("WebSocket connection opened:", event);
    connected = true;
    setStatus("Connected");
  });

  socket.addEventListener("message", (event) => {
    
    let message = JSON.parse(event.data);
    if (websocketDebugMessages){
      console.log('Message recived > ' + event.data);
    }
    if (message.type == "incoming") {
      addMessage(message);
    } else if (message.type == "name-change") {
      alert("change your name");
    } else if (message.type == "uuid") {
      my_user["uuid"] = message.token;
      socket.send(JSON.stringify({type: "deviceKey", deviceKey: key, user: my_user}));
      if (settings.autoAuth == true && (settings.authToken != "" || settings.authToken != undefined || settings.authToken != null)){
        socket.send(JSON.stringify({type: "autoauth", token: settings.authToken, user: my_user}));
      }
    } else if (message.type == "incoming-server") {
      serverMessage(message);
    } else if (message.type == "auth-confirm") {
      isAuthed = true;
      let status = document.getElementById('status-div');
      if(status.getElementsByClassName("authed").length == 0){
        let auth = document.createElement('span');
        auth.innerHTML = "Authenticated."
        auth.style.paddingLeft = '2vw';
        auth.classList.add('serverMessageSuccess');//Can't be bothered XD
        auth.classList.add('authed'); 
        status.appendChild(auth);
      }
    } else if (message.type == "client-side") {
      if (message.command == "autoauth"){
        if (message.args == null){
          if (settings.autoAuth == false){
            serverMessage({feedback:`Auto auth is ${settings.autoAuth  ? 'on' : 'off'}.`});
          }else if (settings.autoAuth == true){
            serverMessage({feedback:`Auto auth is ${settings.autoAuth ? 'on' : 'off'}, AuthToken: ${settings.authToken ? settings.authToken : 'n/a'}.`});
          }
        }else if (message.args[1] == "true" && message.args.length >= 2) { 
          serverMessage({feedback:`Set auto auth on.`, isError:"success"});
          settings.autoAuth = true;
        }else if (message.args[1] == "false" && message.args.length >= 2) { 
          settings.autoAuth = false;
          serverMessage({feedback:`Set auto auth to false.`, isError:"success"});
        }else if (message.args[1] == "set" && message.args.length >= 3) { 
          settings.authToken = message.args[2];
          serverMessage({feedback:`Set auto auth key to "${message.args[2]}".`, isError:"success"});
        }else if ((message.args[1] == "reset" || message.args[1] == "remove") && message.args.length >= 2) { 
          settings.autoAuth = false;
          settings.authKey = undefined;
          serverMessage({feedback:`Reset auto auth settings.`});
        }
        updateSettings();
      }
    } else if (message.type == "close") {
        socket.close();
    } else if (message.type == "heartbeat") {
      console.log("Heartbeat");
    }
  });
  socket.addEventListener("close", (event) => {
    connected = false;
    setStatus("Disconnected");
  });
  function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value;

    if (messageText.trim() !== "" && connected) {
      socket.send(
        JSON.stringify({ user: my_user, type: "message", message: messageText })
      );
      messageInput.value = "";
    }
  }
  let addMessage = function (message) {
    let chat = document.getElementById("chat");
    let atBottom = chat.scrollTop + chat.clientHeight >= chat.scrollHeight - 1;
    let container = document.createElement("div");
    container.classList.add("message");

    let name = document.createElement("span");
    name.classList.add("name");
    if (message.user.uuid == my_user.uuid) {
      name.classList.add("my-name");
    } else {
      name.classList.add("other-name");
    }
    if (message.mc) {
      name.classList.add("mc");
      name.innerHTML += message.mcP;
    }
    if (message.dc) {
      name.classList.add("dc");
      name.innerHTML += message.dcP;
    }
    name.setAttribute("chat-user", JSON.stringify(message.user));
    name.addEventListener("click", (e) => {
      if (e.target.hasAttribute("chat-user") && isAuthed ) {
        let user = JSON.parse(e.target.getAttribute("chat-user"));
        if (
          user["uuid"] != undefined && document.getElementById("messageInput").value == "" && user['uuid'] != my_user['uuid']) {
          console.log(user["uuid"]);
          document.getElementById("messageInput").value = "/" + user["uuid"];
        }
      }
    });
    name.innerHTML += message.user.name + ": ";
    container.appendChild(name);

    let chatText = document.createElement("span");
    chatText.innerHTML = message.message;
    chatText.classList.add("message-text");
    if (message.notPublic == true) {
      chatText.classList.add("hidden");
    }
    container.appendChild(chatText);

    let row = document.createElement("tr");
    row.classList.add("message-row");

    row.appendChild(container);
    document.getElementById("chat-stream").appendChild(row);
    if (atBottom) {
      chat.scrollTop = chat.scrollHeight - chat.clientHeight;
      //console.log("scroll, " + (chat.scrollTop + chat.clientHeight >= chat.scrollHeight - 1));
    }
    notifyClient(message);
  };
  let serverMessage = function (message) {
    let chat = document.getElementById("chat");
    let atBottom = chat.scrollTop + chat.clientHeight >= chat.scrollHeight - 1;
    let container = document.createElement("div");
    container.classList.add("message");
    let serverMessage = document.createElement("span");
    serverMessage.classList.add("serverMessage");
    serverMessage.innerHTML = message.feedback;
    if (message.isError == true) {
      serverMessage.classList.add("serverMessageError");
    } else if (message.isError == "success") {
      serverMessage.classList.add("serverMessageSuccess");
    }
    container.appendChild(serverMessage);

    let row = document.createElement("tr");
    row.classList.add("message-row");

    row.appendChild(container);
    document.getElementById("chat-stream").appendChild(row);
    if (atBottom) {
      chat.scrollTop = chat.scrollHeight - chat.clientHeight;
      //console.log("scroll, " + (chat.scrollTop + chat.clientHeight >= chat.scrollHeight - 1));
    }
  };
  let setStatus = function (newStatus) {
    statusIndicator = document.getElementById("status");
    statusIndicator.innerText = newStatus;
    if (newStatus == "Disconnected"){
      if (document.getElementsByClassName("authed").length >= 1){
        document.getElementsByClassName("authed")[0].remove();
      }
    }
  };
  let notifyClient = function(message){
    if (inIframe){
      window.parent.postMessage(messageFunc + JSON.stringify(message), "*");  
    }
  }

  let example_message_send = { user: my_user, type: "message", message: "" };
  let incoming_example = {
    user: my_user,
    type: "incoming",
    message: "test",
  };

  if (document.readyState == "complete") {
    document.getElementById("messageInput").addEventListener("keydown", (e) => {
      if (e.code == "Enter") {
        sendMessage();
      }
    });
  }else{
    window.addEventListener("load", (event) => {
      document.getElementById("messageInput").addEventListener("keydown", (e) => {
        if (e.code == "Enter") {
          sendMessage();
        }
      });
    });
  }
  let everySecond = setInterval(function(){
    if (settings.name != undefined){
      my_user['name'] = settings.name;
    }
  },1000)
}
