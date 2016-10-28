import React from 'react';

const Button = (props) => {

	return(
		<button onClick={props.onClick} className={'react-button ' + props.classes} >
			{props.children}
		</button>
		);
}

export default Button;