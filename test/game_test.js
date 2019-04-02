const assert = require('assert');
const Player = require('../src/models/player');
const Game = require('../src/models/game');

describe('Game', function() {
  let game, chandan, dheeraj;
  beforeEach(function() {
    dheeraj = new Player('Dheeraj', 'X');
    chandan = new Player('Chandan', 'O');
    game = new Game(dheeraj, chandan);
  });

  describe('playMove', function() {
    it('should place the symbol on given position for current player', function() {
      const response = game.playMove(1);
      assert.equal(false, response.error);
    });

    it('should not place the symbol on the given position if that position is already occupied', function() {
      game.playMove(1);
      const response = game.playMove(1);

      assert.equal(true, response.error);
    });
  });

  describe('changeTurn', function() {
    it('should change the turn', function() {
      game.changeTurn();
      assert.equal(chandan, game.getCurrentPlayer());
    });
  });

  describe('getStatus', function() {
    it('should return status containing information that someone has won the game', function() {
      game.playMove(1);
      game.playMove(4);
      game.playMove(2);
      game.playMove(5);
      game.playMove(3);

      const gameStatus = game.getStatus();
      assert.equal('SOMEONE_WON', gameStatus.status);
      assert.equal('Dheeraj', gameStatus.winner);
    });

    it('should return status containing information that game is still running', function() {
      game.playMove(1);
      game.playMove(4);
      game.playMove(2);
      game.playMove(5);

      const gameStatus = game.getStatus();
      assert.equal('RUNNING', gameStatus.status);
    });

    it('should return status containing information that game has drawn', function() {
      game.playMove(1);
      game.playMove(2);
      game.playMove(3);
      game.playMove(5);
      game.playMove(4);
      game.playMove(6);
      game.playMove(9);
      game.playMove(7);
      game.playMove(8);

      const gameStatus = game.getStatus();
      assert.equal('DRAW', gameStatus.status);
    });
  });
});
