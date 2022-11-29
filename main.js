// create grid box according to the given size value

let gridSize = 62;

let mouseDown = false
document.body.onmousedown = () => {
    (mouseDown = true)
    console.log("mouse down")
}
document.body.onmouseup = () => {
    (mouseDown = false)
    console.log("mouse up")
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "black";
}

const gridBox = document.querySelector(".grid-box")

function drawGrid(size) {
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div");
        grid.addEventListener("mouseover", changeColor)
        grid.addEventListener("mousedown", changeColor)
        grid.classList.add("grid");
        gridBox.appendChild(grid);
    }
}

const clearBtn = document.querySelector("#clearBtn")
clearBtn.addEventListener("click", clearGrid)

function clearGrid() {
    gridBox.innerHTML = null;
    drawGrid(gridSize);
}

window.onload = () => {
    drawGrid(gridSize)
}

