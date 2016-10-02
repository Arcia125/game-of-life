const React = require('react');

class Button extends React.Component {
	render() {
		let props = this.props;
		let classes = [];
		if (props.className) {
			classes.push(props.className);
		}
		classes.push('react-button');
		return (
			<button onClick={props.onClick} className={classes.join(' ')} >
				{props.children}
			</button>
			);
	}
}

export default Button;