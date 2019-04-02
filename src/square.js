import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {
    return (
      <div className="cell" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}

export default Cell;
