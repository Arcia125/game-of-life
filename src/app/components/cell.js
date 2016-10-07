const React = require('react');

class Cell extends React.Component {
  shouldComponentUpdate(nextProps) {
    // only update component if it has a new classname
    // e.g. cell_dead or cell_alive
    return nextProps.className !== this.props.className;
  }

  render() {
    let props = this.props;
		let classes = [];
		if (props.className) {
			classes.push(props.className);
		}
		classes.push('cell');
    return (
      <div id={'cell-' + props.cellID} x={props.x} y={props.y} onClick={this.props.onClick} className={classes.join(' ')}>
        {props.children}
      </div>
      );
  }
}

export default Cell;