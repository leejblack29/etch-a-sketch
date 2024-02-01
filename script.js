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
    const thisColumn = createDiv(grid);

    // populate each column with n divs
    for (let j = 0; j < n; j++) {
      createDiv(thisColumn).classList.add("box");
    }
  }
}

function makeDrawable() {
  grid.addEventListener("mouseover", (event) => {
    const thisDiv = event.target;

    if (thisDiv.classList.contains("box")) {
      thisDiv.style.backgroundColor = "black";
    }
  });
}

function deleteGrid() {
  const divs = grid.querySelectorAll("#grid > div");
  divs.forEach((div) => {
    div.remove();
  });
}

function setRes() {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    let newRes = +prompt("Set new resolution (100 or less!)");
    if (newRes <= 100) {
        deleteGrid();
        generateGrid(newRes);
    }

  });

}

generateGrid(16);
makeDrawable();
setRes();
