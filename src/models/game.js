const WINNING_COMBINATIONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

class Game {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.currentPlayerIndex = 0;
    this.movesPlayed = 0;
  }

  playMove(position) {
    const isPositionOccupied = this.players.some(player =>
      player.hasAlreadyPlayedAt(position)
    );

    if (isPositionOccupied) {
      return { error: true, message: `Can't play on position ${position}` };
    }

    this.getCurrentPlayer().play(position);
    this.movesPlayed++;
    this.changeTurn();
    return { error: false, message: `` };
  }

  getStatus() {
    const winner = this.players.find(player =>
      player.hasWon(WINNING_COMBINATIONS)
    );

    if (winner != undefined) {
      return {
        status: 'SOMEONE_WON',
        winner: winner.getName(),
        message: `${winner.getName()} has won the game.`
      };
    }

    if (this.movesPlayed == 9) {
      return { status: 'DRAW', message: 'Game draw.' };
    }

    return {
      status: 'RUNNING',
      message: `${this.getCurrentPlayer().getName()}'s turn.`
    };
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  changeTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
  }

  generateBoard() {
    const board = new Array(9).fill(' ');
    this.players.forEach(player => {
      player.moves.forEach(move => {
        board[move - 1] = player.getSymbol();
      });
    });
    return board;
  }
}

// module.exports = Game;
export default Game;
