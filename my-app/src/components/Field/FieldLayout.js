import PropTypes from 'prop-types';
import { handler } from '../../handlers/handler';
import styles from './Field.module.css';

export const FieldLayout = (props) => {
	return (
		<div className={styles.field}>
			{props.field.map((item, index) => (
				<button
					className={styles.button}
					disabled={props.field[index]}
					key={index}
					onClick={() => {
						handler(props, index);
					}}
				>
					{props.field[index]}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
