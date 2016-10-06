const React = require('react');

const Button = (props) => {
	let classes = [];
	if (props.className) {
		classes.push(props.className);
	}
	classes.push('react-button');
	return(
		<button onClick={props.onClick} className={classes.join(' ')} >
			{props.children}
		</button>
		);
}

export default Button;