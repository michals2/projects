const cells = document.querySelectorAll(".cell");
const turnContainer = document.querySelector("#turn");

let turn = "X";
turnContainer.innerHTML = turn;

const board = [null, null, null, null, null, null, null, null, null];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(e) {
  e.target.innerHTML = turn;
  board[e.target.id] = turn;
  changeTurn();
  checkWinner();
}

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const curr = winningCombos[i];
    if (
      board[curr[0]] === board[curr[1]] &&
      board[curr[1]] === board[curr[2]] &&
      board[curr[0]]
    )
      return alert(`${board[curr[0]]} is the winner!`);
  }
}

function changeTurn() {
  turn = turn === "X" ? "Y" : "X";
  turnContainer.innerHTML = turn;
}

cells.forEach(e => e.addEventListener("click", handleClick));
