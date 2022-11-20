// Variables
const http = new XMLHttpRequest();
const title = document.getElementById("title");
const favicon = document.getElementById("favicon")
const wrapper = document.getElementById("wrapper");

http.onload = function(context) {
    const rawmetadata = context.target.responseText;
    const metadata = JSON.parse(rawmetadata);
    
    title.innerText = metadata.home.title;
    favicon.setAttribute("href", metadata.home.favicon);
}

http.open("GET", "./meta.json", true);
http.send();

setTimeout(() => {
    wrapper.setAttribute("class", "visible");
}, 100)