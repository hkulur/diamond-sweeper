import React, { Component } from 'react';
import Square from './Square';
import { randomizeBoard } from '../utils/index';

class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			squares : randomizeBoard(8)
		}
	}

	render(){
		const  { squares } = this.state;
		return(
			<ul>
				{
					squares.map(value => 
						<Square value={value}/>
					)
				}
			</ul>
		)
	}
}

export default Board;