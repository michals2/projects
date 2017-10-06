let turn = "X";

const turnElement = document.querySelector(".turn");
const cells = document.querySelectorAll(".cell");
const error = document.querySelectorAll(".error");
const errorText = document.querySelectorAll(".error-text");

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

let currentBoard = [null, null, null, null, null, null, null, null, null];

function checkWinner(potentialWinner) {
  const indices = currentBoard.reduce((a, c, i) => {
    if (c === potentialWinner) a.push(i);
    return a;
  }, []);
  const winners = winningCombos.filter(
    combo =>
      indices.includes(combo[0]) &&
      indices.includes(combo[1]) &&
      indices.includes(combo[2])
  );
  if (winners.length) alert(`${potentialWinner} is the winner!`);
}

function changeTurn() {
  turn = turn === "X" ? "Y" : "X";
}

function handleClick(e) {
  currentBoard[e.target.dataset.key] = turn;
  e.target.innerHTML = turn;
  changeTurn();
  turnElement.innerHTML = turn;
  checkWinner("X");
  checkWinner("Y");
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
