import React from 'react';
import { DIAMOND, HINT, QUESTION } from '../constants/index';
import diamond from '../assets/diamond.png';
import arrow from '../assets/arrow.png';
import question from '../assets/question.png';

const getAssetURL = (value) => {

	switch(value) {
		case DIAMOND:
			return diamond;

		case HINT:
			return arrow;

		case QUESTION:
			return question;

		default:
			return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
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
		const { value, index, updateScore } = this.props;
		return (
			<li
				onClick={(e) => {
					this.handleClick(e);
					updateScore(index); 
				}}
				className="flip-container"
			>
				<div className="flipper">
					<img className="back" src={getAssetURL(value)} />
					<img className="front" src={getAssetURL(QUESTION)} />
				</div>
			</li>
		)
	}
}
export default Square;