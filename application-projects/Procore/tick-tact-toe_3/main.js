const cells = document.querySelectorAll(".cell");
const turnContainer = document.querySelector("#turn");
const winnerContainer = document.querySelector("#winner");
const winnerMessage = document.querySelector("#winner-message");
const boardResetButton = document.querySelector("#board-reset");

let turn = turnContainer.innerHTML;
let board = [null, null, null, null, null, null, null, null, null];
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

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (
      board[winningCombos[i][0]] === board[winningCombos[i][1]] &&
      board[winningCombos[i][1]] === board[winningCombos[i][2]] &&
      board[winningCombos[i][0]]
    )
      return board[winningCombos[i][0]];
  }
  return false;
}

function declareWinner(winner) {
  console.log("winner!");
  winnerContainer.innerHTML = winner;
  winnerMessage.classList.add("winner");
}

function changeTurn() {
  if (turn === "X") turn = "Y";
  else turn = "X";
  turnContainer.innerHTML = turn;
}

function handleClick(e) {
  e.target.innerHTML = turn;
  board[e.target.id] = turn;
  const winner = checkWinner();
  if (winner) declareWinner(winner);
  changeTurn();
}

function resetBoard() {
  board = [null, null, null, null, null, null, null, null, null];
  cells.forEach(cell => (cell.innerHTML = ""));
}

console.log(cells)
cells.forEach(cell => addEventListener("click", handleClick));
boardResetButton.addEventListener("click", resetBoard);
