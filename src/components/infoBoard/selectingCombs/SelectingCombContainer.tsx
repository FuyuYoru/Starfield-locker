import React from 'react';
import styles from './SelectingCombContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Digipick } from '../../digipick/Digipick';
import { setCurrentDigipick } from '../../../redux/slices/activeItemsSlice';
// import { setupStore } from '../../../redux/store';

const SelectingCombContainer = () => {
	const digipicks = useSelector(state => state.digipicks)
	const dispatch = useDispatch()
	// store.subscribe(() => console.log(store.getState()));
	return (
		<div className={styles.selectingComb}>
			<div className={styles.topCountComb}>
				<div className="topCountCombName">DIGIPICKS</div>
				<div className={styles.topCountCombCount}>
					{Object.keys(digipicks).filter((value) => !digipicks[value].isUsed, []).length}
				</div>
			</div>
			<div className={styles.changeComb}>
				{(Object.keys(digipicks)).map((value, index) =>
					!digipicks[value].isUsed ?
						(<span
							key={index}
							onClick={() => dispatch(setCurrentDigipick({ digipickID: value }))}
						>
							<Digipick
								radius={30}
								markersPosition={digipicks[value].indexes}
								isAdaptive={false}
							/>
						</span>)
						:
						(<span
							key={index}
						>
							<Digipick
								radius={30}
								markersPosition={[]}
								isAdaptive = {true}
							/>
						</span>)
				)}
			</div>
		</div>
	);
}

export default SelectingCombContainer;
