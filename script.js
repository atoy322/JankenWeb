function Startup() {
    var gu_button = document.getElementById("gu");
    var choki_button = document.getElementById("choki");
    var pa_button = document.getElementById("pa");
    gu_button.addEventListener("click", onClick);
    choki_button.addEventListener("click", onClick);
    pa_button.addEventListener("click", onClick);
}

function onClick(event) {
    alert(event.target.tagName);
}