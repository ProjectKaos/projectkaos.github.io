document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("last-updated");
    if (!el) return;

    var now = new Date(document.lastModified);
    var options = {  
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    el.textContent = "Page last updated on: " + now.toLocaleString('en-US', options);
});