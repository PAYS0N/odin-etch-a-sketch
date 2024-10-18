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

//set box continer width to its height
const boxContainer = document.querySelector(".box-square");
let height = boxContainer.parentNode.clientHeight;
let width = boxContainer.parentNode.clientWidth;
boxContainer.style.height = Math.min(height, width) + 'px';
boxContainer.style.width = Math.min(height, width) + 'px';

//create base grid
createGrid(16);
