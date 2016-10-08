const React = require('react');

import Menu from './components/menu';
import Button from './components/button';
import Board from './components/board';

export default class App extends React.Component {
	componentWillMount() {
		this.state = {
			size: 60,
			running: true,
			speed: '50',
			clear: false,
			randomize: false,
			density: 50,
			generation: 0,
			interval: null,
			info: false
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
		return null;
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
			this.setState({
				running: false,
				interval: this.removeInterval()
			});
		}else {
			return false;
		}
	}

	handleClear() {
		this.removeInterval();
		this.setState({
			running: false,
			generation: 0,
			interval: this.removeInterval(),
			clear: true
		});
		setTimeout(() => {
			this.setState({
				clear: false
			});
		}, 10);
	}
	handleRandom() {
		this.removeInterval();
		this.setState({
			running: false,
			generation: 0,
			interval: this.removeInterval(),
			randomize: true
		});
		setTimeout(() => {
			this.setState({
				randomize: false
			});
		}, 10);
	}
	displayInfo() {
		this.setState({
			info: !this.state.info
		});
	}
	render() {
		return (
			<div className='app'>
				<Menu className='info-menu'>
					<h1 className='info-menu_title'>
						John Conway's Game of Life
					</h1>
					<h2 className='info-menu_subtitle'>
						Built with React by Kevin Hallett
					</h2>
					<Button onClick={() => this.displayInfo()} className='info-button'>More Info</Button>
					<div className={'info-menu_panel' + (this.state.info ? ' show' : '')}>
						<section className='panel-content'>
							<h2 className='panel-content_header'>The Game</h2>
							<p className='panel-content_para'>
								<a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>The Game of Life</a> was
								invented by a Cambridge mathematician
								named <a href='https://en.wikipedia.org/wiki/John_Horton_Conway'>John Conway</a> in
								1970. The game really doesn't have any players, John Conway calls it a "no-player game."
								It is actually
								a <a href='https://en.wikipedia.org/wiki/Cellular_automaton'>cellular automaton</a> which
								is basically a grid of cells that can have a finite number of states (e.g. alive or dead)
								that follow a set of rules to determine their state in future generations.
							</p>
							<h2 className='panel-content_header'>The Rules</h2>
							<p className='panel-content_para'>
								All cells can either be alive (shades of green) or dead (black). Each cell
								has a neighborhood of consisting of every cell touching it.
							</p>
							<p className='panel-content_para'>
								Living cells with a light green color are born more recently than those
								that are a darker green. Living cells will die of loneliness if they have one
								or less living neighbors. If a living cell has four or more neighbors it dies
								of overcrowding. Dead cells can only be born in the next generation if they
								have exactly 3 living neighbors.
							</p>
						</section>
					</div>
				</Menu>
				<Menu className='top-menu'>
					<Button onClick={() => this.handleRun()} className='run-button' >Run</Button>
					<Button onClick={() => this.handlePause()} className='pause-button' >Pause</Button>
					<Button onClick={() => this.handleClear()} className='clear-button' >Clear</Button>
				</Menu>
				<Board
				size={this.state.size}
				density={this.state.density}
				clear={this.state.clear}
				randomize={this.state.randomize}
				generation={this.state.generation}
				 />
				 <Menu className='bottom-menu'>
				 	<Button onClick={() => this.handleRandom()} className='random-button' >Randomize</Button>
				 	<div className='generation-counter'>
					Generation: {this.state.generation}
					</div>
				 </Menu>
			</div>
		);
	}
}
