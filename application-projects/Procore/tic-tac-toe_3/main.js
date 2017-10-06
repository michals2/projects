class T3 {
  constructor() {
    this.turn = "X";
    this.board = [null, null, null, null, null, null, null, null, null];
    this.cells = document.querySelectorAll(".cell");
    this.turnContainer = document.querySelector("#turn");
    this.winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.target.innerHTML = this.turn;
    this.board[e.target.id] = this.turn;
    this.changeTurn();
    this.checkWinner();
  }
  checkWinner() {
    for (let i = 0; i < this.winningCombos.length; i++) {
      const curr = this.winningCombos[i];
      if (
        this.board[curr[0]] === this.board[curr[1]] &&
        this.board[curr[1]] === this.board[curr[2]] &&
        this.board[curr[0]]
      )
        return alert(`${this.board[curr[0]]} is the winner!`);
    }
  }
  changeTurn() {
    this.turn = this.turn === "X" ? "Y" : "X";
    this.turnContainer.innerHTML = this.turn;
  }
  setupBoard() {
    this.cells.forEach(e => e.addEventListener("click", this.handleClick));
  }
}

const newGame = new T3();
newGame.setupBoard();
