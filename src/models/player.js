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
}

module.exports = Player;
