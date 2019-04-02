const { isSubset } = require('./utils');

class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.moves = [];
  }

  hasAlreadyPlayedAt(position) {
    return this.moves.includes(position);
  }

  play(position) {
    this.moves.push(position);
  }

  hasWon(winningCombinations) {
    return winningCombinations.some(combination =>
      isSubset(combination, this.moves)
    );
  }

  getName() {
    return this.name;
  }

  getSymbol() {
    return this.symbol;
  }
}

// module.exports = Player;
export default Player;
