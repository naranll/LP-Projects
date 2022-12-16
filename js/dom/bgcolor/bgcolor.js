let rootEl = document.querySelector("#root");
rootEl.style.display = "flex";
rootEl.style.flexDirection = "column";
rootEl.style.gap = "10px";

rootEl.innerHTML = "<button id = 'myButton'>Click to change color</button>"
let mybtn = document.querySelector("#myButton");
mybtn.style.width = "150px";

for (let i = 0; i < 2; i++) {
    let newDivs = document.createElement("div");
    rootEl.appendChild(newDivs);
    newDivs.style.height = "50px";
    newDivs.style.width = "300px";
    newDivs.style.border = "1px solid black";
}

function randomColor() {
    let myRed = Math.floor(Math.random() * 225);
    let myGre = Math.floor(Math.random() * 225);
    let myBlu = Math.floor(Math.random() * 225);
    return [myRed, myGre, myBlu];
}

function changeColor() {
    for (let i = 1; i < 3; i++) {
        let myCol = randomColor();
        let divs = document.getElementsByTagName("div")[i];
        divs.style.backgroundColor = `rgb(${myCol[0]}, ${myCol[1]}, ${myCol[2]})`;
    }
}

mybtn.addEventListener("click", changeColor);