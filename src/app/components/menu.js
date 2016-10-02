// menu.js

const React = require('react');

class Menu extends React.Component {
	render() {
		let props = this.props;
		let classes = [];
		if (props.className) {
			classes.push(props.className);
		}
		classes.push('menu');
		return(
		<div className={classes.join(' ')}>
			{props.children}
		</div>
		);
	}
}
export default Menu;