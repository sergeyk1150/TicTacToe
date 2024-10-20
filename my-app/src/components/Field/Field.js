import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const FieldContainer = (props) => {
	return <FieldLayout {...props} />;
};

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
