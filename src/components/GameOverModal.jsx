import React from 'react';

const GameOverModal = ({ score }) => (
	<div className="modal-overlay">
		<div className="modal-content">
			<h2>GAME OVER!</h2>
			<h4> Score: {score} </h4>
			<button
				onClick={() => {
					window.location.reload();
				}}
			> 
				Restart
			</button>
		</div>
	</div>
);

export default GameOverModal;