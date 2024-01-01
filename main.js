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
            })

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}
