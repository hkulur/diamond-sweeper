import React, { Component } from 'react';
import Square from './Square';
import GameOverModal from './GameOverModal';
import { randomizeBoard } from '../utils/index';
import { DIAMOND, BOARD_SIZE } from '../constants/index';

class Board extends Component {
	constructor(props){
		super(props);
		const squares = randomizeBoard(BOARD_SIZE).map( item => ({value : item, opened: false})); //generate a board with squares at random place and update the state
		this.state = {
			squares,
			lastClicked: null
		};
		// Since the diamond indices are pre decided and wont changed until reload, no need to put it as part of the state. Compute once and store
		this.diamondIndices = squares.reduce((acc, item, idx) => {
			if(item.value === DIAMOND) acc.push(idx);
			return acc;
		},[]);
	}

	updateScore = (index) => {
		const squares = [...this.state.squares];
		squares[index] = {
			...squares[index], opened: true
		};
		const lastClicked = index;
		this.setState({
			squares,
			lastClicked
		});
	}

	render(){
		const  { squares, lastClicked } = this.state;
		const score = squares.filter(s => !s.opened).length; // calculate score based on unopened
		const isComplete = squares.filter(s => s.opened && s.value === DIAMOND ).length === BOARD_SIZE; // see if board is complete, need to show modal then
		const unopenedDiamondIndices = this.diamondIndices.filter( idx => !squares[idx].opened); // needed to calculate the nearest hidden diamond
		return(
			<div>
				<h4 className="score">Score: {score}</h4>
				<ul className="board">
					{
						squares.map((square, index) => 
							<Square
								key={index}
								value={square.value} 
								opened={square.opened}
								updateScore={this.updateScore}
								index={index}
								diamondIndices={unopenedDiamondIndices}
								lastClicked={lastClicked === index}
							/>
						)
					}
				</ul>
				{ isComplete && <GameOverModal score={score} /> }
			</div>
		)
	}
}

export default Board;