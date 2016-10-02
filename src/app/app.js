const React = require('react');

import Menu from './components/menu';
import Button from './components/button';
import Board from './components/board';

export default class App extends React.Component {
	componentWillMount() {
		this.state = {
			running: true,
			speed: '50'
		}
	}
	handleRun() {
		console.log('clicked run');
	}
	handlePause() {
		console.log('clicked pause');
	}
	handleClear() {
		console.log('clicked clear');
	}
	render() {
		return (
			<div className='app'>
				<Menu className='top-menu'>
					<Button onClick={() => this.handleRun()} className='run-button' >Run</Button>
					<Button onClick={() => this.handlePause()} className='pause-button' >Pause</Button>
					<Button onClick={() => this.handleClear()} className='clear-button' >Clear</Button>
				</Menu>
				<Board size='40' speed={this.state.speed} />

			</div>
		);
	}
}
