function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomizeBoard(size){
	const board = new Array(size * size).fill(null);
	const diamondCount = getRandomInt(size);
}