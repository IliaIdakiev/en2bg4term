document.addEventListener("DOMContentLoaded", function() {
    function loadHandeler() {
        console.log(this.responseText);
    }

    var req = new XMLHttpRequest();
    req.addEventListener("load", loadHandeler);
    req.open("GET", "https://github.com/IliaIdakiev/en2bg4term/tree/gh-pages");
    req.send();
});
