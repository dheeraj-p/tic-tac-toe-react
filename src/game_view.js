import React from 'react';
import Board from './board';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: `Player1's turn` };
  }

  changeStatus(status) {
    this.setState(state => ({ status }));
  }

  render() {
    return (
      <div>
        <h3>{this.state.status}</h3>
        <Board changeStatus={this.changeStatus.bind(this)} />
      </div>
    );
  }
}

export default GameView;
