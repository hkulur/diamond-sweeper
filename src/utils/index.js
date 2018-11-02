import { DIAMOND } from '../constants/index';

/*generates random integer within the max integer provided*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/*generates diamonds at random places given a board size*/
export function randomizeBoard(size){
	const board_size = size * size;
	const board = new Array(board_size).fill(null);
	var i=0;
	while(i < size){
		const randomIndex = getRandomInt(board_size);
		if(!board[randomIndex]){
			board[randomIndex] = DIAMOND;
			i++;
		}
	}
	return board;
}