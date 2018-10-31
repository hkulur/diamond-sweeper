import React from 'react';
import { DIAMOND, HINT } from '../constants/index';
import diamond from '../assets/diamond.png';
import arrow from '../assets/arrow.png';

const getAssetURL = (value) => {
	
	switch(value) {
		case DIAMOND:
			return diamond;

		case HINT:
			return arrow;

		default:
			return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
	}
}

const Square = ({value}) => (
	<li>
		<img src={getAssetURL(value)} />
	</li>
);

export default Square;