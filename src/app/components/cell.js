const React = require('react');

class Cell extends React.Component {
  componentWillUnmount() {
    console.log(this);
  }
  render() {
    let props = this.props;
		let classes = [];
		if (props.className) {
			classes.push(props.className);
		}
		classes.push('cell');
    return (
      <div id={'cell-' + props.cellID} className={classes.join(' ')} x={props.x} y={props.y}>
        {props.children}
      </div>
      );
  }
}

export default Cell;