const kachi = {gu: "pa", choki: "gu", pa: "choki"};
var opacity = 0;
var scale = 0;
var counter = 0;

function Startup() {
    var gu_button = document.getElementById("gu");
    var choki_button = document.getElementById("choki");
    var pa_button = document.getElementById("pa");
    gu_button.addEventListener("click", onClick);
    choki_button.addEventListener("click", onClick);
    pa_button.addEventListener("click", onClick);

    setInterval(updateImage, 10);
}

function onClick(event) {
    var button_gu = document.getElementById("gu");
    var button_choki = document.getElementById("choki");
    var button_pa = document.getElementById("pa");
    var msg = document.getElementById("counter");

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

    startAnimation(shape);

    counter += 1;
    msg.innerHTML = `コンピュータ: ${counter} 勝 0 敗 / あなた: 0 勝 ${counter} 敗 / <strong class="red">あなたの勝率 0 [%]</strong>`;
}

function startAnimation(shape) {
    var com_img = document.getElementById("COM_img");
    opacity = 0;
    scale = 0;
    com_img.src = `resources/janken_${kachi[shape]}.png`;
}

function updateImage() {
    var com_img = document.getElementById("COM_img");
    com_img.style.opacity = `${opacity}`;
    com_img.style.transform = `scale(${scale}, ${scale})`;

    if(opacity < 1 || scale < 1) {
        opacity += 0.01;
        scale += 0.01;
    }
}