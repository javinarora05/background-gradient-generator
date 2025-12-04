const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let rgb1 = "#000"
let rbg2 = "#444"
let copyDiv = document.querySelector(".code-box");



let hexValues = () => {
    let values = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * 16)];
    }
    return color;
};

let changeColor1 = () => {
     rgb1 = hexValues();
    document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = ` background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.innerHTML = `${rgb1}`
};

let changeColor2 = () => {
    rgb2 = hexValues();
     document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1}, ${rgb2})`;
     copyDiv.innerHTML = ` background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
     btn2.innerHTML = `${rgb2}`
};

btn1.addEventListener("click", changeColor1);
btn2.addEventListener("click", changeColor2);
