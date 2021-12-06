const kachi = {gu: "pa", choki: "gu", pa: "choki"};

function Startup() {
    var gu_button = document.getElementById("gu");
    var choki_button = document.getElementById("choki");
    var pa_button = document.getElementById("pa");
    gu_button.addEventListener("click", onClick);
    choki_button.addEventListener("click", onClick);
    pa_button.addEventListener("click", onClick);
}

function onClick(event) {
    var com_img = document.getElementById("COM_img");

    var button_gu = document.getElementById("gu");
    var button_choki = document.getElementById("choki");
    var button_pa = document.getElementById("pa");

    shape = event.target.name;
    console.log(shape);

    if(shape == "gu") {
        button_choki.style.backgroundColor = "";
        button_pa.style.backgroundColor = "";
    } else if(shape == "choki") {
        button_gu.style.backgroundColor = "";
        button_pa.style.backgroundColor = "";
    } else if(shape == "pa") {
        button_gu.style.backgroundColor = "";
        button_choki.style.backgroundColor = "";
    }

    var button = document.getElementById(shape);
    button.style.backgroundColor = "#ebd694";
    com_img.src = `resources/janken_${kachi[shape]}.png`;
}