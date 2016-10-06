const React = require('react');

import Menu from './components/menu';
import Button from './components/button';
import Board from './components/board';

export default class App extends React.Component {
	componentWillMount() {
		this.state = {
			running: true,
			speed: '10',
			clear: false,
			density: 7,
			generation: 0,
			interval: null
		}
	}

	createInterval() {
		// creates a timer that adds one to generation every interval
		// sets interval delay to this.state.speed
		let intervalID = setInterval(this.addToGeneration.bind(this), this.state.speed);
		return intervalID;
	}

	removeInterval() {
		// clears the interval using hte id stored in this.state.interval
		clearInterval(this.state.interval);
	}

	componentDidMount() {
		// starts a timer that adds to generation and store its id in state
		// whenever the element is created
		this.setState({
			interval: this.createInterval()
		})
	}

	addToGeneration() {
		// adds one to the generation state variable
		this.setState({
			generation: this.state.generation + 1
		})
	}

	handleRun() {
		// ensures that the running state isn't already true
		// returns false if the app is already running
		if(this.state.running === false) {
			this.setState({
				running: true,
				interval: this.createInterval()
			});
		} else {
			return false;
		}
	}

	handlePause() {
		// ensures that the running state isn't already false
		// returns false if hte app is already running
		if(this.state.running === true) {
			this.removeInterval();
			this.setState({
				running: false,
				interval: null
			});
		}else {
			return false;
		}
	}

	handleClear() {
		this.setState({
			clear: true
		});
		setTimeout(() => {
			this.setState({
				clear: false
			});
		}, 10);
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
				density={this.state.density}
				clear={this.state.clear}
				generation={this.state.generation}
				 />
			</div>
		);
	}
}
