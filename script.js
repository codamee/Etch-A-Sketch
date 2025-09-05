let value = 50;
let customize = { erase: false, colors: false };

let container = document.querySelector(".container");
function getPixels(pixel) {
    let box = `<div class="box"></div>`;
    let totalboxes = `
        <div class="boxContainer">
            ${box.repeat(pixel)}
        </div>`;
    container.innerHTML = totalboxes.repeat(pixel);

    container.addEventListener("mousemove", (e) => {
        if (e.target.classList.contains("box") && e.buttons === 1) {
            if (customize.erase == false && customize.colors == false) {
                e.target.style.backgroundColor = "rgba(0, 0, 0, 1)";
            } else if (customize.colors == true && customize.erase == false) {
                let num1 = Math.floor((Math.random() * 255) + 1)
                let num2 = Math.floor((Math.random() * 255) + 1)
                let num3 = Math.floor((Math.random() * 255) + 1)

                e.target.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
            }
            else {
                e.target.style.backgroundColor = "";
            }
        }
    });
}
getPixels(value);

function initBtns() {
    //RESET THE ENTIRE BOARD
    let resetBtn = document.querySelector(".resetBtn");
    resetBtn.addEventListener("click", (e) => {
        getPixels(value);
    });

    //RESIZE THE PIXELS
    let sizeBtn = document.querySelector(".sizeBtn");
    sizeBtn.addEventListener("click", (e) => {
        let newPixel = Number(prompt("Set your pixels(1-100)"));

        if (newPixel > 100 || newPixel < 1 || isNaN(newPixel)) {
            alert("Please Enter the number between 1-100 only ");
        } else {
            getPixels(newPixel);
        }
    });

    //ERASE THE FILLED BOXES
    let eraseBtn = document.querySelector(".eraseBtn");
    eraseBtn.addEventListener("click", (e) => {
        if (customize.erase == false) {
            customize.erase = true;
            e.target.style.backgroundColor = "green";
            e.target.style.boxShadow = `0px 0px 10px 1px rgba(0, 154, 18, 1)`;
        } else {
            customize.erase = false;
            e.target.style.backgroundColor = "rgb(0, 139, 246)";
            e.target.style.boxShadow = ``;
        }
    });

    //MAKE THE SKETCH TO DRAW DIFFERENT COLORS
    let colorsBtn = document.querySelector(".colorsBtn");
    colorsBtn.addEventListener("click", (e) => {
        if (customize.colors == false) {
            customize.colors = true;
            e.target.style.backgroundColor = "green";
            e.target.style.boxShadow = `0px 0px 10px 1px rgba(0, 154, 18, 1)`;
        } else {
            customize.colors = false;
            e.target.style.backgroundColor = "rgb(0, 139, 246)";
            e.target.style.boxShadow = ``;
        }
    });

}
initBtns()