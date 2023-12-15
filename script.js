let gridSize = document.querySelector("#grid_size").value;
const container = document.querySelector(".container");
const cellsCurrentColor = document.querySelector("#cells_color_picker");
const gridCurrentColor = document.querySelector("#grid_color_picker");


// Function to create the Grid

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cells");
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}


// Function to change the Grid Size depending on the User Selection

function changeGridSize() {
    const rangeSelector = document.querySelector("#grid_size");
    
    rangeSelector.addEventListener("change", () => {
        gridSize = document.querySelector("#grid_size").value;
        addCurrentGridSizeValue()
        resetGridSize();
        clearCells();
        changeGridColor();
    });
}


// Function to modify the Current Grid Size Value in the UI

function addCurrentGridSizeValue() {
    const grid_size_toggle = document.querySelector("#current_value");
    
    grid_size_toggle.textContent = "";
    grid_size_toggle.textContent = ` ${gridSize} x ${gridSize}`;
}


// Function to Reset the current Grid Size
function resetGridSize() {
    container.textContent = "";
    createGrid();
}


// Function to Apply the new color in the Grid

function applyColor() {
    container.addEventListener ("click", () => {
        container.addEventListener ("mouseover", (event) => {
            if (event.target.classList.contains("cells")) {
                changeCellColor(event.target)
            };
        })
    })
}


// Function to change the color of the cells

function changeCellColor(event) {
    let cellColorSelected = cellsCurrentColor.value;

    event.style.backgroundColor = cellColorSelected;
}


// Function to change the color of the cells

function changeGridColor() {
    const gridy = document.querySelectorAll(".cells");
    
    gridy.forEach((grid) => {
        testy(grid)
    })
}


// // Function to change the color of the Grid

// function testy(value) {

//     let gridColorSelected = gridCurrentColor.value;

//     if (value.classList.contains("cells")) {
//         value.removeAttribute("style")
//         value.style.backgroundColor = gridColorSelected;
//     }
// }


// gridCurrentColor.addEventListener("input", () => {
//     changeGridColor();
// });


// // Function to select all the cells in the Grid and clear them.

// function clearCells() {
//     const cells = document.querySelectorAll(".cells");

//     cells.forEach((cell) => {
//         clearGridCells(cell);
//     });
// }


// // Function to clear the Grid
// function clearGridCells(value) {
//     const clear = document.querySelector("#clear");

//     clear.addEventListener("click", () => {
//         if (value.classList.contains("cells")) {
//             changeGridColor();
//         }
//     });
// }



// createGrid();
// changeGridSize();
// applyColor();
// clearCells()