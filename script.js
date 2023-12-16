const gridSizeInput = document.querySelector("#grid_size");
const container = document.querySelector(".container");
const cellsColorPicker = document.querySelector("#cells_color_picker");
const gridColorPicker = document.querySelector("#grid_color_picker");
const eraserBtn = document.querySelector("#eraserBtn");
const drawBtn = document.querySelector("#drawBtn");
const clearBtn = document.querySelector("#clearBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const btnOption = document.querySelector("#btn_option");


// Function to create the Grid

function createGrid() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < gridSizeInput.value; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSizeInput.value; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cells");
            row.appendChild(cell);
        }

        fragment.appendChild(row);
    }

    container.textContent = "";
    container.appendChild(fragment);
}

// Function to change the Grid Size depending on the User Selection

function changeGridSize() {

    gridSizeInput.addEventListener("change", () => {
        createGrid()
        addCurrentGridSizeValue();
        clearCells();
        changeGridColor();
    });
}

// Function to modify the Current Grid Size Value in the UI

function addCurrentGridSizeValue() {
    const gridSizeToggle = document.querySelector("#grid_size_current_value");
    gridSizeToggle.textContent = ` ${gridSizeInput.value} x ${gridSizeInput.value}`;
}

// Function to change the color of the Grid

function changeGridColor() {
    const cells = document.querySelectorAll(".cells");
    
    cells.forEach((cell) => {
        cell.style.backgroundColor = gridColorPicker.value;
    })
}

// Event listener for Grid color input change
gridColorPicker.addEventListener("input", changeGridColor);


// Function to select All the Cells in the Grid and Clear them.

function clearCells() {
    const cells = document.querySelectorAll(".cells");

    cells.forEach((cell) => {
        cell.removeAttribute("style");
    });
}

// Event listener for Clear Button click
clearBtn.addEventListener("click", (event) => {
    applyButtonColorEffect(event.target);
    clearBtnColorEffect()
    clearCells();
    changeGridColor();
});

// Function to put a Color effect to the Clear Button
function clearBtnColorEffect() {
    setTimeout(() => {
        clearBtn.removeAttribute("style");
    }, 120);
}

// Event listener for Eraser Button Click
eraserBtn.addEventListener("click", (event) => {
    clearPreviousBtnColorEffect(drawBtn)
    clearPreviousBtnColorEffect(rainbowBtn)
    applyButtonColorEffect(event.target);

    container.addEventListener ("mouseover", (cell) => {
        eraseColor(cell.target);
    })
})

// Function to erase the Cell Color when using the Eraser Button
function eraseColor(cell) {
    cell.style.backgroundColor = gridColorPicker.value;
}

// Event listener for Draw Button Click
drawBtn.addEventListener("click", (event) => {
    clearPreviousBtnColorEffect(eraserBtn)
    clearPreviousBtnColorEffect(rainbowBtn)
    applyButtonColorEffect(event.target);

    container.addEventListener ("mouseover", (cell) => {
        applyColor(cell.target);
    })
})

// Function to apply the Cell Color when using the Draw Button
function applyColor(cell) {
    cell.style.backgroundColor = cellsColorPicker.value;
}

// Function to apply a Color to a Button.
function applyButtonColorEffect(color) {
    color.style.backgroundColor = "#0099ff";
    color.style.color = "white";
}

// Function to Clear the Previus Button Color Effect
function clearPreviousBtnColorEffect(btn) {
    btn.removeAttribute("style");
}

// Event listener for Rainbow Button Click
rainbowBtn.addEventListener("click", (event) => {
    clearPreviousBtnColorEffect(drawBtn)
    clearPreviousBtnColorEffect(eraserBtn)
    applyButtonColorEffect(event.target);

    container.addEventListener ("mouseover", (event) => {
        randomColor(event.target);
    })
})

// Function to generate a Random Color
function randomColor(event) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    event.style.backgroundColor = randomColor;
}

// Create Grid in the First Webpage Load
createGrid();
changeGridSize();