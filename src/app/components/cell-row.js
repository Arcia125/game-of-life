const React = require('react');

class CellRow extends React.Component {
	render() {
		let props = this.props;
		return (
			<div id={'row-' + props.rowID} className='cell-row'>
				{props.children}
			</div>
			);
	}
}

export default CellRow;