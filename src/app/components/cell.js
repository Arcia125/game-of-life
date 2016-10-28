import React, { Component } from 'react';

class Cell extends Component {
  shouldComponentUpdate(nextProps) {
    // only update component if it has a new classname
    // e.g. cell_dead or cell_alive
    return nextProps.className !== this.props.className;
  }

  render() {

    return (
      <div onClick={this.props.onClick} className={'cell ' + this.props.className}>
        {this.props.children}
      </div>
      );
  }
}

export default Cell;