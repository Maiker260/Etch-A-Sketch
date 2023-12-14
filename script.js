
// Function to create the Grid
const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < 7; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cells");
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

createGrid();

// Function to change the color or the cell selected

function changeColorCells() {
    container.addEventListener ("mouseover", (event) => {
        if (event.target.classList.contains("cells")) {
            event.target.classList.add("cellsActive");
        };
    });
}

changeColorCells();