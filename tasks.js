function injectStyles() {
    console.log(document.querySelector("iframe"))
    var cssLink = document.createElement("link");
    cssLink.href = chrome.extension.getURL('tasks.css');
    cssLink.rel = "stylesheet"; 
    cssLink.type = "text/css"; 
    document.querySelector("iframe").document.head.appendChild(cssLink);
}

window.addEventListener("load", injectStyles, false);