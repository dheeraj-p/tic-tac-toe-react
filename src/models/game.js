class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;

    this.currentPlayer = player1;
  }

  playMove(position) {
    const response = this.currentPlayer.play(position);
    if (!response.error) {
      this.changeTurn();
    }
    return response;
  }

  changeTurn() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
}

module.exports = Game;
