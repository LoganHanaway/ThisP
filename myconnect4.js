class Game {
  constructor(p1, p2, height = 6, width = 7) {
    this.players = [p1, p2];
    this.height = height;
    this.width = width;
    this.currPlayer = p1;
    this.makeBoard();
    this.makeHtmlBoard();
    this.gameOver = false;
  }

  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  makeHtmlBoard() {}

  findSpotForCol(x) {}

  placeInTable(y, x) {}

  endGame(msg) {}

  handleClick(evt) {}

  checkForWin() {}
}

class Player {
  constructor(color) {
    this.color = color;
  }
}

document.getElementById("start-game").addEventListener("click", () => {
  let p1 = new Player(document.getElementById("p1-color").value);
  let p2 = new Player(document.getElementById("p2-color").value);
  new Game(p1, p2);
});
