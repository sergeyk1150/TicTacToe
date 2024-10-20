import PropTypes from 'prop-types';

import styles from './Information.module.css';

export const InformationLayout = ({ info }) => {
	return <div className={styles.information}>{info}</div>;
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
