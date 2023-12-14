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
