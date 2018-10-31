import React from 'react';
import { DIAMOND, HINT, QUESTION } from '../constants/index';
import diamond from '../assets/diamond.png';
import arrow from '../assets/arrow.png';
import question from '../assets/question.png';

const getAssetURL = (value, lastClicked) => {
	switch(value) {
		case DIAMOND:
			return diamond;

		case QUESTION:
			return question;

		default:
			if(lastClicked){
				return arrow;
			}
			return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
	}
}

const getDirection = (squareIndices, index, size) =>{
	var nearestIndex = squareIndices.find(item => Math.floor(item / size) === Math.floor(index / size));
	var isSquareAbove = squareIndices.find(item => Math.floor(item / size) < Math.floor(index / size));
	if( nearestIndex > -1) {
		return nearestIndex > index ? 'right' : 'left';
	}else if(isSquareAbove){
		return 'top'
	}else{
		return 'bottom'
	}
}

class Square extends React.Component {
	constructor(props){
		super(props);
	}
	handleClick = (e) => {
		e.currentTarget.classList.add('open');
	}
	render(){
		const { value, index, updateScore, squareIndices, lastClicked, opened } = this.props;
		const direction = getDirection(squareIndices, index, 8);
		return (
			<li
				onClick={(e) => {
					if(opened){
						return;
					}
					this.handleClick(e);
					updateScore(index); 
				}}
				className="flip-container"
			>
				<div className="flipper">
					<img className={lastClicked && value !== DIAMOND ? `${direction} back`: "back"} src={getAssetURL(value, lastClicked)} />
					<img className="front" src={getAssetURL(QUESTION)} />
				</div>
			</li>
		)
	}
}
export default Square;