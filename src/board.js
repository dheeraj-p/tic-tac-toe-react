import React from 'react';
import Cell from './square';
// const Game = require('./models/game');
// const Player = require('./models/player');

import Game from './models/game';
import Player from './models/player';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Game(new Player('Player1', 'X'), new Player('Player2', 'O'))
    };
  }

  handleClick(cellId) {
    this.setState(state => {
      const newState = { ...state };
      newState.game.playMove(cellId);
      return newState;
    });
  }

  render() {
    const board = this.state.game.generateBoard();
    console.log(board);

    return (
      <div>
        <div className="board-row">
          <Cell value={board[0]} onClick={this.handleClick.bind(this, 1)} />
          <Cell value={board[1]} onClick={this.handleClick.bind(this, 2)} />
          <Cell value={board[2]} onClick={this.handleClick.bind(this, 3)} />
        </div>
        <div className="board-row">
          <Cell value={board[3]} onClick={this.handleClick.bind(this, 4)} />
          <Cell value={board[4]} onClick={this.handleClick.bind(this, 5)} />
          <Cell value={board[5]} onClick={this.handleClick.bind(this, 6)} />
        </div>
        <div className="board-row">
          <Cell value={board[6]} onClick={this.handleClick.bind(this, 7)} />
          <Cell value={board[7]} onClick={this.handleClick.bind(this, 8)} />
          <Cell value={board[8]} onClick={this.handleClick.bind(this, 9)} />
        </div>
      </div>
    );
  }
}

export default Board;
