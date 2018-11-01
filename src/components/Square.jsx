import React from 'react';
import { DIAMOND, BOARD_SIZE, QUESTION } from '../constants/index';
import diamond from '../assets/diamond.png';
import arrow from '../assets/arrow.png';
import question from '../assets/question.png';

/* given the value of square and whether lastclicked, return the asset to be shown, for empty showing a 1x1 pixel */
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
/*based on the closest diamond, return the appropriate direction className which will rotate the arrow if needed */
const getDirection = (diamondIndices, index, size) =>{
	var nearestIndex = diamondIndices.find(item => Math.floor(item / size) === Math.floor(index / size));
	var isSquareAbove = diamondIndices.find(item => Math.floor(item / size) < Math.floor(index / size));
	if( nearestIndex > -1) {
		return nearestIndex > index ? 'right' : 'left';
	}else if(isSquareAbove){
		return 'top'
	}else{
		return 'bottom'
	}
}

class Square extends React.Component {
	handleClick = (e) => {
		e.currentTarget.classList.add('open');
	}
	render(){
		const { value, index, updateScore, diamondIndices, lastClicked, opened } = this.props;
		const direction = getDirection(diamondIndices, index, BOARD_SIZE);
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
					<img alt={value} className={lastClicked && value !== DIAMOND ? `${direction} back`: "back"} src={getAssetURL(value, lastClicked)} />
					<img alt={QUESTION} className="front" src={getAssetURL(QUESTION)} />
				</div>
			</li>
		)
	}
}
export default Square;