const assert = require('assert');
const Player = require('../src/models/player');
const Game = require('../src/models/game');

describe('Game#playMove', function() {
  it('should place the symbol on given position for current player', function() {
    const dheeraj = new Player('Dheeraj', 'X');
    const chandan = new Player('Chandan', 'Y');
    const game = new Game(dheeraj, chandan);

    const response = game.playMove(1);

    assert.equal(false, response.error);
  });

  it('should not place the symbol on the given position if that position is already occupied', function() {
    const dheeraj = new Player('Dheeraj', 'X');
    const chandan = new Player('Chandan', 'Y');
    const game = new Game(dheeraj, chandan);

    game.playMove(1);
    const response = game.playMove(1);

    assert.equal(true, response.error);
  });
});

describe('Game#changeTurn', function() {
  it('should should change the turn', function() {
    const dheeraj = new Player('Dheeraj', 'X');
    const chandan = new Player('Chandan', 'Y');
    const game = new Game(dheeraj, chandan);

    game.changeTurn();
    assert.equal(chandan, game.getCurrentPlayer());
  });
});
