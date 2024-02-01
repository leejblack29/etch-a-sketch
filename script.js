const grid = document.querySelector("#grid");

function createDiv(parent) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("flex", "even", "column");
    parent.appendChild(newDiv);
    return newDiv;
}

function generateGrid(n) {
    // create n columns
    for (let i = 0; i < n; i++) {
        const thisColumn = createDiv(grid)

        // populate each column with n divs
        for (let j = 0; j < n; j++) {
            createDiv(thisColumn);
        }
    }
}

function makeDrawable() {
    grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    } );

}

generateGrid(16);
makeDrawable();






