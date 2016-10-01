// menu.js

const React = require('react');

class Menu extends React.Component {
	render() {
		let classes = [];
		if (this.props.className) {
			classes.push(this.props.className);
		}
		classes.push('menu');
		return(
		<div className={classes.join(' ')}>
		</div>
		);
	}
}
export default Menu;