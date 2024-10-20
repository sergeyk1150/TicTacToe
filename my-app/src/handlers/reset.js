export const reset = (props) => {
	props.setCurrentPlayer('X');
	props.setIsGameEnded(false);
	props.setIsDraw(false);
	props.setField(['', '', '', '', '', '', '', '', '']);
};
