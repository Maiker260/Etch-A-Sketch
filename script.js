const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridCell = document.createElement("div");
        grid.classList.add("grid");
        grid.appendChild(gridCell);
    }
}