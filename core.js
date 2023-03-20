// Variables
const http = new XMLHttpRequest();
const title = document.getElementById("title");
const favicon = document.getElementById("favicon")
const wrapper = document.getElementById("wrapper");
const discord = document.getElementById("discord");

http.onload = function(context) {
    var rawmetadata = context.target.responseText;
    const metadata = JSON.parse(rawmetadata);
    
    title.innerText = metadata.home.title;
    favicon.setAttribute("href", metadata.home.favicon);
    discord.setAttribute("href", metadata.home.discord)
}

http.open("GET", "/meta.json", true);
http.send();

setTimeout(() => {
    wrapper.setAttribute("class", "visible");
}, 100)

document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
        wrapper.removeAttribute("class")
    } else {
        wrapper.setAttribute("class", "visible");
    }
  });
