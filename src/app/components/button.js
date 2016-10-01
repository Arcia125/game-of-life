const React = require('react');

class Button extends React.Component {
	render() {
		let classes = this.props.className + ' react-button';
		return (
			<button className={classes} >
			</button>
			);
	}
}

export default Button;