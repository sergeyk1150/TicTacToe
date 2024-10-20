import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';
import { getInfoAboutGame } from '../../utils/utils';

export const InformationContainer = (props) => {
	const info = getInfoAboutGame(props.isDraw, props.isGameEnded, props.currentPlayer);

	return <InformationLayout info={info} />;
};

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
