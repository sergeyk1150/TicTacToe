import { getIsWinner } from '../utils/utils';
import { checkField } from '../utils/utils';
import { WIN_PATTERNS } from '../constants/win-patterns';

export const handler = (props, index) => {
	const newField = props.field;
	newField[index] = props.currentPlayer;
	if (newField[index] === '' && props.isGameEnded === false) {
		props.setField(newField);
	}
	const isWinner = getIsWinner(WIN_PATTERNS, newField, props.currentPlayer);
	props.setIsGameEnded(isWinner);
	if (checkField(newField) === true && isWinner === false) {
		props.setIsDraw(true);
	}
	if (checkField(newField) === false && isWinner === false) {
		props.currentPlayer === 'X'
			? props.setCurrentPlayer('0')
			: props.setCurrentPlayer('X');
	}
};
