const grid = document.querySelector("#grid");

function createColumn() {
    const newCol = document.createElement("div");
    newCol.classList.add("flex", "even", "column");
    grid.appendChild(newCol);
}

createColumn();
createColumn();
createColumn();
createColumn();
createColumn();
createColumn();