const grid = document.querySelector("#grid");

function createDiv(parent) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "black";
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
      thisDiv.style.backgroundColor = randomColor();
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

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
    let h = randomInt(0, 360);
    let s = randomInt(42, 98);
    let l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
}

generateGrid(16);
makeDrawable();
setRes();
