const grid = document.querySelector("#grid");

function createDiv(parent) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("flex", "even", "column");
    parent.appendChild(newDiv);
    return newDiv;
}

function createColumns(n) {
    for (let i = 0; i < n; i++) {
        createDiv(grid);
    }
}

createColumns(16);






