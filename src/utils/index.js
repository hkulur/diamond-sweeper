import { DIAMOND } from '../constants/index';

/*generates random integer within the max integer provided*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/*generates diamonds at random places given a board size*/
export function randomizeBoard(size){
	const board = new Array(size * size).fill(null);
	for(var i= 0; i< size; i++){
		const randomIndex = getRandomInt(size);
		const diamondIndex = (i * size) + randomIndex;
		board[diamondIndex] = DIAMOND;
	}
	return board;

}