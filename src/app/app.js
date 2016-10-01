const React = require('react');

import TopMenu from './top-menu';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='app'>
				<TopMenu />
			</div>
		);
	}
}
