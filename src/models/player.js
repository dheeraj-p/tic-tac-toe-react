class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.moves = [];
  }

  play(position) {
    if (this.moves.includes(position)) {
      return { error: true, message: `Can't play on position ${position}` };
    }
    this.moves.push(position);
    return { error: false, message: '' };
  }
}

module.exports = Player;
