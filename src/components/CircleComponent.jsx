import React from "react";
import { LockSvgComponent } from "./CustomSVGComponent.jsx";
import styles from './CircleComponent.module.css';
export const CircleComponent = () => {
	const size = 100;
	return (
		<div className={styles.allContainer}>
			<div className={styles.anyContainer}>
				<LockSvgComponent outerRadius={200} innerRadius={190} segmentsCount={32} />
				<LockSvgComponent outerRadius={180} innerRadius={170} segmentsCount={32} />
				<LockSvgComponent outerRadius={160} innerRadius={150} segmentsCount={32} />
			</div>
		</div>
	)
}
