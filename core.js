// Variables
const http = new XMLHttpRequest();
const title = document.getElementById("title");
const favicon = document.getElementById("favicon")
const wrapper = document.getElementById("wrapper");
const url = document.getElementById("url");

http.onload = function(context) {
    var rawmetadata = context.target.responseText;
    const metadata = JSON.parse(rawmetadata);
    
    title.innerText = metadata.home.title;
    favicon.setAttribute("href", metadata.home.favicon);
    url.setAttribute("content", metadata.home.url);
}

http.open("GET", "/meta.json", true);
http.send();

setTimeout(() => {
    wrapper.setAttribute("class", "visible");
}, 100)