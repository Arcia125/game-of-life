import React from 'react';


const CellRow = (props) => {
	return(
		<div id={'row-' + props.rowID} className='cell-row'>
			{props.children}
		</div>
		);
}

export default CellRow;