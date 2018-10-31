import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			squares : Array(64).fill(null)
		}
	}

	render(){
		const  { squares } = this.state;
		return(
			<ul>
				{
					squares.map(square => 
						<Square />
					)
				}
			</ul>
		)
	}
}

export default Board;