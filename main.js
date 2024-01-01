createGrid(16, 16);

function createGrid(cols, rows) {
    const container = document.querySelector("#container");

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");

        row.classList.add("row");

        for (let j = 0; j < cols; j++) {
            const square = document.createElement("div");

            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                square.classList.add("painted");
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

function removeSquares() {
    const container = document.querySelector("#container");

    let child;
    while (child = container.firstChild) {
        container.removeChild(child);
    }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let squares = prompt("number of squares per side:", 16);
    if (!squares || Number.isNaN(squares) || squares > 100) {
        return;
    }

    squares = Number(squares);
    removeSquares();
    createGrid(squares, squares);
});
