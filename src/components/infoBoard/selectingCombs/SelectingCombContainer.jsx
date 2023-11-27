import React from 'react';
import styles from './SelectingCombContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Digipick } from '../../digipick/Digipick.jsx';
import { setCurrentDigipick } from '../../../redux/slices/activeDigipickSlice.js';
import shuffle from '../../../utils/shuffleArray.js';

const SelectingCombContainer = () => {
	const digipicks = useSelector(state => state.digipicks)
	const dispatch = useDispatch()
	return (
		<div className={styles.selectingComb}>
			<div className={styles.topCountComb}>
				<div className="topCountCombName">DIGIPICKS</div>
				<div className={styles.topCountCombCount}>7</div>
			</div>
			<div className={styles.changeComb}>
				{/* <img src="./imgs/circle.svg" alt="" />
				<img src="./imgs/circle.svg" alt="" />
				<img src="./imgs/circle.svg" alt="" />
				<img src="./imgs/circle.svg" alt="" /> */}
				{shuffle(Object.keys(digipicks)).map((value, index) =>
					<span
						key={index}
						onClick={() => dispatch(setCurrentDigipick({ digipickID: value }))}
					>
						<Digipick
							radius={20}
							markersPosition={digipicks[value].indexes}
							markerColor='red'
							circleColor='white'
						/>
					</span>
				)}
			</div>
		</div>
	);
}

export default SelectingCombContainer;
