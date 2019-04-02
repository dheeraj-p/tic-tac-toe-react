class Game {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.currentPlayerIndex = 0;
  }

  playMove(position) {
    const isPositionOccupied = this.players.some(player =>
      player.hasAlreadyPlayedAt(position)
    );

    if (isPositionOccupied) {
      return { error: true, message: `Can't play on position ${position}` };
    }

    this.getCurrentPlayer().play(position);
    return { error: false, message: `` };
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  changeTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
  }
}

module.exports = Game;
