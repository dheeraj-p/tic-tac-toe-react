import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  render() {
    return <div className="cell">{this.state.value}</div>;
  }
}

export default Cell;
