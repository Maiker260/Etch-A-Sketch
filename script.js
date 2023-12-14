let gridSize = document.querySelector("#grid_size").value;
const container = document.querySelector(".container");


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
        cellsSelected();
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


// Function to change the color or the cell selected

function changeColorCells() {
    container.addEventListener ("click", () => {
        container.addEventListener ("mouseover", (event) => {
            if (event.target.classList.contains("cells")) {
                event.target.classList.add("cellsActive");
            };
        })
    })
}



// Function to select all the cells

function cellsSelected() {
    const cells = document.querySelectorAll(".cells");

    cells.forEach((cell) => {
        clearGrid(cell);
    });
}


// Function to clear the Grid
function clearGrid(value) {
    const clear = document.querySelector("#clear");

    clear.addEventListener("click", () => {
        if (value.classList.contains("cellsActive")) {
            value.classList.remove("cellsActive");
        }
    });
}


createGrid();
changeGridSize();
changeColorCells();
cellsSelected()
