import React, { Component } from 'react';
import Square from './Square';
import GameOverModal from './GameOverModal';
import { randomizeBoard } from '../utils/index';
import { DIAMOND } from '../constants/index';

class Board extends Component {
	constructor(props){
		super(props);
		const squares = randomizeBoard(8).map( item => ({value : item, opened: false}));
		this.state = {
			squares,
			lastClicked: null
		};
		this.squareIndices = squares.reduce((acc, item, idx) => {
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
		const score = squares.filter(s => !s.opened).length;
		const isComplete = squares.filter(s => s.opened && s.value === DIAMOND ).length === 8;
		const unOpenedSquareIndices = this.squareIndices.filter( idx => !squares[idx].opened);
		return(
			<div>
				<h4 className="score">Score: {score}</h4>
				<ul className="board">
					{
						squares.map((square, index) => 
							<Square 
								value={square.value} 
								opened={square.opened}
								updateScore={this.updateScore}
								index={index}
								squareIndices={unOpenedSquareIndices}
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