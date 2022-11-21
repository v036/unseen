// Variables
const http = new XMLHttpRequest();
const title = document.getElementById("title");
const favicon = document.getElementById("favicon");
const icon = document.getElementById("icon");
const wrapper = document.getElementById("wrapper");
const content = document.getElementById("sidebar_content");

http.onload = function(context) {
    var rawmetadata = context.target.responseText;
    const metadata = JSON.parse(rawmetadata);
    var current = metadata.scripts
    
    title.innerText = current.title;
    favicon.setAttribute("href", current.favicon);
    icon.setAttribute("scr", current.icon);

    for (var i = 0; i < current.scripts.length; i++) {
        var script = current.scripts[i]

        content.append(`
        <li>
            <button>${script.name}</button>
        </li>
        `)
    }
}

http.open("GET", "/meta.json", true);
http.send();

setTimeout(() => {
    wrapper.setAttribute("class", "visible");
}, 100)
