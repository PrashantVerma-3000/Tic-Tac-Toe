let start = true;
let btn = document.querySelector("button");
let turn = document.querySelector("p");
let grid = document.querySelectorAll(".grid");
let history = document.querySelector(".history");
let list = document.querySelector(".list");
let last = 0;
let count = 0;

function fillValue(ele) {
  if (!start) return;
  if (ele.innerHTML != "") return;
  count++;
  // Using the element passed in to update its value
  if (last === 0) {
    ele.innerHTML = "X";
  } else {
    ele.innerHTML = "O";
  }
  last = 1 - last;
}

function check() {
  if (!start) return;
  if (
    (grid[0].innerHTML === "X" &&
      grid[1].innerHTML === "X" &&
      grid[2].innerHTML === "X") ||
    (grid[3].innerHTML === "X" &&
      grid[4].innerHTML === "X" &&
      grid[5].innerHTML === "X") ||
    (grid[6].innerHTML === "X" &&
      grid[7].innerHTML === "X" &&
      grid[8].innerHTML === "X") ||
    (grid[0].innerHTML === "X" &&
      grid[4].innerHTML === "X" &&
      grid[8].innerHTML === "X") ||
    (grid[2].innerHTML === "X" &&
      grid[4].innerHTML === "X" &&
      grid[6].innerHTML === "X") ||
    (grid[0].innerHTML === "X" &&
      grid[3].innerHTML === "X" &&
      grid[6].innerHTML === "X") ||
    (grid[1].innerHTML === "X" &&
      grid[4].innerHTML === "X" &&
      grid[7].innerHTML === "X") ||
    (grid[2].innerHTML === "X" &&
      grid[5].innerHTML === "X" &&
      grid[8].innerHTML === "X")
  ) {
    return "X";
  }
  if (
    (grid[0].innerHTML === "O" &&
      grid[1].innerHTML === "O" &&
      grid[2].innerHTML === "O") ||
    (grid[3].innerHTML === "O" &&
      grid[4].innerHTML === "O" &&
      grid[5].innerHTML === "O") ||
    (grid[6].innerHTML === "O" &&
      grid[7].innerHTML === "O" &&
      grid[8].innerHTML === "O") ||
    (grid[0].innerHTML === "O" &&
      grid[4].innerHTML === "O" &&
      grid[8].innerHTML === "O") ||
    (grid[2].innerHTML === "O" &&
      grid[4].innerHTML === "O" &&
      grid[6].innerHTML === "O") ||
    (grid[0].innerHTML === "O" &&
      grid[3].innerHTML === "O" &&
      grid[6].innerHTML === "O") ||
    (grid[1].innerHTML === "O" &&
      grid[4].innerHTML === "O" &&
      grid[7].innerHTML === "O") ||
    (grid[2].innerHTML === "O" &&
      grid[5].innerHTML === "O" &&
      grid[8].innerHTML === "O")
  ) {
    return "O";
  }
  if (count === 9) return "over";
  return "NON";
}

function gameReset() {
  start = true;
  last = 0;
  count = 0;
  grid.forEach((cell) => (cell.innerText = ""));
  turn.innerText = "Turn for X";
}

btn.addEventListener("click", () => {
  gameReset();
});

function Updatehistory(val) {
  let nd = document.createElement("div");
  nd.innerText = `${val}`;
  nd.setAttribute("class", "card");
  let nli = document.createElement("li");
  nli.appendChild(nd);
  // Prepend the new history item so it appears at the top:
  list.prepend(nli);
}

grid.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!start) return;
    fillValue(cell);
    let state = check();
    if (state === "X") {
      start = false;
      Updatehistory("X Winner !!!");
      turn.innerText = "X Wins!!!!!";
      btn.innerText = "Press to Reset";
    } else if (state === "O") {
      start = false;
      Updatehistory("O Winner !!!");
      turn.innerText = "O Wins!!!!!";
      btn.innerText = "Press to Reset";
    } else if (state === "NON") {
      turn.innerText = `Turn for ${last === 1 ? "O" : "X"}`;
    } else {
      start = false;
      Updatehistory("Draw !!!");
      turn.innerText = "Game Draw!!!!.\nPress Reset to play again!!!";
    }
  });
});
