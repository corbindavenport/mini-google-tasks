// Function for inkecting tasks.css stylesheet into iframe on mail.google.com/tasks/ig
function injectStyles() {
    var cssLink = document.createElement("link")
    // Firefox uses a different getURL call than Opera and Chrome
    if (navigator.userAgent.includes("Firefox")) {
        cssLink.href = browser.runtime.getURL('tasks.css')
    } else {
        cssLink.href = chrome.extension.getURL('tasks.css')
    }
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css"
    // Inject the completed CSS <link> element into the iframe
    var iframe = document.querySelector("iframe")
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.head.appendChild(cssLink);
}

// Run injectStyles function after the page loads
window.addEventListener("load", injectStyles, false)