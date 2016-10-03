const React = require('react');

import Menu from './components/menu';
import Button from './components/button';
import Board from './components/board';

export default class App extends React.Component {
	componentWillMount() {
		this.state = {
			running: true,
			speed: '50',
			clear: false,
			seed: 10
		}
	}
	handleRun() {
		this.setState({
			running: true
		});
	}
	handlePause() {
		this.setState({
			running: false
		});
	}
	handleClear() {
		this.setState({
			clear: true
		});
		setTimeout(() => {
			this.setState({
				clear: false
			});
		}, 50);
	}
	render() {
		return (
			<div className='app'>
				<Menu className='top-menu'>
					<Button onClick={() => this.handleRun()} className='run-button' >Run</Button>
					<Button onClick={() => this.handlePause()} className='pause-button' >Pause</Button>
					<Button onClick={() => this.handleClear()} className='clear-button' >Clear</Button>
				</Menu>
				<Board
				size='60'
				speed={this.state.speed}
				running={this.state.running}
				clear={this.state.clear}
				seed={this.state.seed}
				 />

			</div>
		);
	}
}
