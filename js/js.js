function createGrid(num) {
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
            cell.addEventListener("mouseenter", () => {
                event.target.style.backgroundColor = "black";
            })                        
            row.appendChild(cell);
        }
        boxContainer.appendChild(row);
    }
}   

const boxContainer = document.querySelector(".box-square");

//set box continer width to its height
let height = boxContainer.parentNode.clientHeight;
let width = boxContainer.parentNode.clientWidth;
boxContainer.style.height = Math.min(height, width) + 'px';
boxContainer.style.width = Math.min(height, width) + 'px';

//create base grid
createGrid(16);

//on button click, re-generate grid
function removeGrid() {
    let rows = document.querySelectorAll(".row");

    rows.forEach((row) => {
        row.remove();
    })
}

function generateNewGrid(num){
    if (typeof num === 'number' & num > 0 & num < 100){
        removeGrid();
        createGrid(num);
    }
    else {
        alert("Error with value, please enter a number between 0 and 100")
    }
}

const createButton = document.querySelector(".create-button");
const input = document.querySelector(".box-input");
createButton.addEventListener("click", () => generateNewGrid(+input.value));
input.value = '';