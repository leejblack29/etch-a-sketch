const grid = document.querySelector("#grid");

function createDiv(parent) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("flex", "even", "column");
    parent.appendChild(newDiv);
    return newDiv;
}

createDiv(grid);
createDiv(grid);
createDiv(grid);
createDiv(grid);
createDiv(grid);




