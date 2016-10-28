import React from 'react';

import CellRow from './cell-row';
import Cell from './cell';

const makeNeighbor = (y, x) => ({x: x, y: y});

class Board extends React.Component {
	componentWillMount() {
		let board = this.generateBoard(this.props.density);
		this.state = {
			board: board
		};
	}
	generateBoard(density) {
		//density: value 0 - 100
		let y = 0;
		let x = 0;
		const size = this.props.size;
		const board = [];
		let rand = 0;
		for (y = 0; y < size; y++) {
			const row = [];
			for (x = 0; x < size; x++) {

				// random number between 1-99
				rand = Math.floor((Math.random() * 100) + 1);

				// if random number between 1-99 is greater than density
				// or density is 0
				// append 0 (a dead cell) to the row
				if (rand > density || density === 0) {
					row.push(0);
				} else {
					row.push(1);
				}
			}
			// append the now full row to the board
			board.push(row);
		}
		return board;
	}

	getNeighbors(centerX, centerY) {

		// defines offset variables
		let north = centerY + 1;
		let south = centerY - 1;
		let west = centerX - 1;
		let east = centerX + 1;

		// sets variables equal to an object {y: arg1, x: arg2}
		let nw = makeNeighbor(north, west);
		let n = makeNeighbor(north, centerX);
		let ne = makeNeighbor(north, east);
		let w = makeNeighbor(centerY, west);
		let e = makeNeighbor(centerY, east);
		let sw = makeNeighbor(south, west);
		let s = makeNeighbor(south, centerX);
		let se = makeNeighbor(south, east);

		// returns an array of neighbors
		// neighbor = {y, x}
		return [nw, n, ne, w, e, sw, s, se];
	}

	countNeighbors(centerX, centerY) {
		// return the numbers of neighbors for a cell
		// centerX the center cell's x value
		return this.getNeighbors(centerX, centerY).filter((neighbor) => this.neighborIsAlive(neighbor)).length;
	}

	neighborIsAlive(neighbor) {
		let size = this.props.size;
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
		return this.state.board[cellY][cellX] !== 0;
	}

	willSurvive(x, y) {
		let neighborCount = this.countNeighbors(x, y);
		if (neighborCount >= 4 || neighborCount < 2) {
			return false;
		}
		let isAlive = this.cellIsAlive(x, y);
		if ((isAlive && (neighborCount === 2 || neighborCount === 3)) || (!isAlive && neighborCount === 3)) {
			return true;
		}
		return false;
	}

	updateBoard() {
		let y = 0;
		let x = 0;
		let size = this.props.size;
		let board = [];
		for (y = 0; y < size; y++) {
			const row = [];
			for (x = 0; x < size; x++) {
				const surv = this.willSurvive(x, y);
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
		let size = this.props.size;
		let x = 0;
		let y = 0;
		for (y = 0; y < size; y++) {
			const currentRow = [];
			for (x = 0; x < size; x++) {
				currentRow.push(this.createCellObj((x + (y * size)), x, y));
			}
			rows.push(
				<CellRow
					key={y + (size * size)}
				>
					{currentRow}
				</CellRow>
						);
		}
		return rows;
	}

	handleClick(x, y) {
		this.toggleBoardAt(x, y);
	}

	toggleBoardAt(x, y) {
		// changes the board state variable at a certain location
		// x: cell x value
		// y: cell y value
		let board = this.state.board;
		let newVal = this.cellIsAlive(x, y) ? 0 : 1;
		board[y][x] = newVal;
		this.setState({
			board: board
		});
	}

	createCellObj(key, x, y) {
		return (
			<Cell
				key={key}
				onClick={() => this.handleClick(x, y)}
				className={this.cellIsAlive(x, y) ? 'cell_alive' : 'cell_dead'}/>
				);
	}

	clearBoard() {
		let emptyBoard = this.generateBoard(0);
		this.setState({
			board: emptyBoard
		});
	}

	makeRandomBoard() {
		let randomBoard = this.generateBoard(this.props.density);
		this.setState({
			board: randomBoard
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.clear === true) {
			this.clearBoard();
		}

		if (nextProps.randomize === true) {
			this.clearBoard();
			this.makeRandomBoard();
		}

		if (nextProps.generation > this.props.generation) {
			this.updateBoard();
		}

	}

	render() {
		// console.log(this.refs);
		let rows = this.makeBoard();
		return (
			<div className='board'>
				{rows}
			</div>
			);
	}
}

export default Board;