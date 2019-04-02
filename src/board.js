import React from 'react';
import Cell from './square';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="board-row">
          <Cell value={1} />
          <Cell value={2} />
          <Cell value={3} />
        </div>
        <div className="board-row">
          <Cell value={4} />
          <Cell value={5} />
          <Cell value={6} />
        </div>
        <div className="board-row">
          <Cell value={7} />
          <Cell value={8} />
          <Cell value={9} />
        </div>
      </div>
    );
  }
}

export default Board;
