function createGrid(num, opacity) {
    let row;
    let cell;
    let cellSideLength = boxContainer.clientHeight/num;
    for (let i = 0; i < num; i++) {
        row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < num; j++) {
            cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.style.height = cellSideLength + 'px';
            cell.style.width = cellSideLength + 'px';
            cell.style.opacity = 0;
            cell.style.backgroundColor = "black";
            cell.addEventListener("mouseenter", () => {
                event.target.style.opacity = +event.target.style.opacity + 1/opacity;
            })                        
            row.appendChild(cell);
        }
        boxContainer.appendChild(row);
    }
}   

const boxContainer = document.querySelector(".box-square");
const createButton = document.querySelector(".create-button");
const boxInput = document.querySelector(".box-input");
const opacityInput = document.querySelector(".opacity-input");

//set box continer width to its height
let height = boxContainer.parentNode.clientHeight;
let width = boxContainer.parentNode.clientWidth;
boxContainer.style.height = Math.min(height, width) + 'px';
boxContainer.style.width = Math.min(height, width) + 'px';

//create base grid
boxInput.value = "16";
opacityInput.value = "1";
createGrid(16, 1);

//on button click, re-generate grid
function removeGrid() {
    let rows = document.querySelectorAll(".row");

    rows.forEach((row) => {
        row.remove();
    })
}

function generateNewGrid(num, opacity){
    if (opacity <= 0 | !Number.isInteger(opacity)) {
        alert("Error with opacity, please enter an integer greater than 0")        
    }
    else if (num < 0 | num >= 100 | !Number.isInteger(num)){
        alert("Error with number of cells, please enter an integer between 0 and 100")
    }
    else {
        removeGrid();
        createGrid(num, opacity);
    }
}

createButton.addEventListener("click", () => generateNewGrid(+boxInput.value, +opacityInput.value));