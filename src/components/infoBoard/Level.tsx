import React from 'react';
import styles from './Level.module.css'
import { useSelector } from 'react-redux';

const Level = () => {
	const level = useSelector(state => state.activeItems.currentLevel)
	return (
		<div className={styles.lvlLocker}>
			<img
				src="./imgs/square.svg"
				alt=""
				className={styles.imgLevelLocker}
			/>
			<div
				className={styles.nameLevellocker}
			>
				SECURITY LEVEL <br />
				<span
					style={{
						fontSize: "28px",
						verticalAlign: "middle",
					}}>
					{level}
				</span>
			</div>
		</div>
	);
}

export default Level;
