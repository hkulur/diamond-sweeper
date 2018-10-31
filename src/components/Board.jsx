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
		}
	}

	updateScore = (index) => {
		const squares = [...this.state.squares];
		squares[index] = {
			...squares[index], opened: true
		};
		this.setState({
			squares
		});
	}

	render(){
		const  { squares } = this.state;
		const score = squares.filter(s => !s.opened).length;
		const isComplete = squares.filter(s => s.opened && s.value === DIAMOND ).length === 8;
		return(
			<div>
				<h4>Score: {score}</h4>
				<ul className="board">
					{
						squares.map((square, index) => 
							<Square 
								value={square.value} 
								opened={square.opened}
								updateScore={this.updateScore}
								index={index}
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