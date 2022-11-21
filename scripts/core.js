// Variables
const http = new XMLHttpRequest();
const title = document.getElementById("title");
const favicon = document.getElementById("favicon")
const wrapper = document.getElementById("wrapper");
const discord = document.getElementById("discord");

http.onload = function(context) {
    var rawmetadata = context.target.responseText;
    const metadata = JSON.parse(rawmetadata);
    
    title.innerText = metadata.scripts.title;
    favicon.setAttribute("href", metadata.scripts.favicon);
    discord.setAttribute("href", metadata.scripts.discord)
}

http.open("GET", "/meta.json", true);
http.send();

setTimeout(() => {
    wrapper.setAttribute("class", "visible");
}, 100)