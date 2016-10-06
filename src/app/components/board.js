const React = require('react');

import CellRow from './cell-row';
import Cell from './cell';

const makeNeighbor = (y, x) => ({x: x, y: y});

class Board extends React.Component {
	componentWillMount() {
		let board = this.initBoardState(this.props.seed);
		this.state = {
			board: board
		};
	}

	initBoardState(seed) {
		let y = 0;
		let x = 0;
		let size = this.props.size;
		let board = [];
		let row = [];
		let rand = 0;
		for (y = 0; y < size; y++) {
			row = [];
			for (x = 0; x < size; x++) {
				rand = Math.floor(Math.random() * seed);
				if (rand % 2 === 0 || rand % 3 === 0) {
					row.push(0);
				} else {
					row.push(1);
				}
			}
			board.push(row);
		}
		return board;
	}

	getNeighbors(centerX, centerY) {
		let board = this.state.board;
		let north = centerY + 1;
		let south = centerY - 1;
		let west = centerX - 1;
		let east = centerX + 1;
		let nw = makeNeighbor(north, west);
		let n = makeNeighbor(north, centerX);
		let ne = makeNeighbor(north, east);
		let w = makeNeighbor(centerY, west);
		let e = makeNeighbor(centerY, east);
		let sw = makeNeighbor(south, west);
		let s = makeNeighbor(south, centerX);
		let se = makeNeighbor(south, east);
		return [nw, n, ne, w, e, sw, s, se];
	}

	countNeighbors(centerX, centerY) {
		return this.getNeighbors(centerX, centerY).filter((neighbor) => this.neighborIsAlive(neighbor)).length;
	}

	neighborIsAlive(neighbor) {
		let size = this.props.size;
		let board = this.state.board;
		let x, y;
		if (neighbor.x <= 0) {
			x = size - 1;
		}else if (neighbor.x >= size) {
			x = 0;
		}else {
			x = neighbor.x;
		}
		if (neighbor.y <= 0) {
			y = size - 1;
		}else if (neighbor.y >= size) {
			y = 0;
		}else {
			y = neighbor.y;
		}
		return this.cellIsAlive(x, y);
	}

	cellIsAlive(cellX, cellY) {
		return this.state.board[cellY][cellX] > 0;
	}

	willSurvive(x, y) {
		let isAlive = this.cellIsAlive(x, y);
		let neighborCount = this.countNeighbors(x, y);
		let has2Neighbors = neighborCount === 2;
		let has3Neighbors = neighborCount === 3;
		let isDead = !isAlive;
		if (isAlive && (has2Neighbors || has3Neighbors)) {
			return true;
		} else if (isDead && has3Neighbors) {
			return true;
		} else {
			return false;
		}
	}

	getNextGeneration() {
		let y = 0;
		let x = 0;
		let size = this.props.size;
		let board = [];
		let row = [];
		let surv;
		for (y = 0; y < size; y++) {
			row = [];
			for (x = 0; x < size; x++) {
				surv = this.willSurvive(x, y)
				row.push(surv ? 1 : 0);
			}
			board.push(row);
		}
		this.setState({
			board: board
		});
	}

	makeBoard() {
		let rows = [];
		let currentRow = [];
		let size = this.props.size;
		let x = 0;
		let y = 0;
		let counter = 0;
		let board = this.state.board;
		let cellClass = '';
		for (y = 0; y < size; y++) {
			currentRow = [];
			for (x = 0; x < size; x++) {
				counter++;
				currentRow.push(
					<Cell
						key={size + counter}
						cellID={counter}
						x={x}
						y={y}
						className={this.cellIsAlive(x, y) ? 'cell_alive': 'cell_dead'}
					/>
					);
			}
			rows.push(
				<CellRow
					key={y}
					rowID={y}
				>
					{currentRow}
				</CellRow>
						);
		}
		return rows;
	}

	clearBoard() {
		let emptyBoard = this.initBoardState(0);
		this.setState({
			board: emptyBoard
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.clear === true) {
			this.clearBoard();
		}

		// if the new properties have a higher generation number
		// then update the board state with getNextGeneration()
		if (nextProps.generation > this.props.generation) {
			this.getNextGeneration();
		}
	}

	render() {
		let gameBoard = this.makeBoard();
		return (
			<div className='board'>
				{gameBoard}
			</div>
			);
	}
}

export default Board;