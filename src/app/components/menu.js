// menu.js

const React = require('react');

const Menu = (props) => {
	let classes = [];
	if (props.className) {
		classes.push(props.className);
	}
	classes.push('menu');
	return (
		<div className={classes.join(' ')}>
			{props.children}
		</div>
		);
}
export default Menu;