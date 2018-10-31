import { DIAMOND, HINT } from '../constants/index';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomizeBoard(size){
	const board = new Array(size * size).fill(null);
	for(var i= 0; i< size; i++){
		const randomIndex = getRandomInt(size);
		const diamondIndex = (i * size) + randomIndex;
		board[diamondIndex] = DIAMOND;
		const isDiamondinLastColumn = (diamondIndex + 1) % size === 0;
		const isDiamondLastElement = board.length === diamondIndex;
		if(isDiamondinLastColumn || isDiamondLastElement){
			board[diamondIndex-1] = HINT;
		}else{
			board[diamondIndex+1] = HINT;
		}
	}
	return board;

}