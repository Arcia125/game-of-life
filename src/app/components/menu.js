// menu.js

import React from 'react';

const Menu = (props) => {

	return (
		<div className={'menu ' + props.className}>
			{props.children}
		</div>
		);
}
export default Menu;