import React from "react";
import { LockSvgComponent } from "./CustomSVGComponent.jsx";
import styles from './CircleComponent.module.css';
export const CircleComponent = () => {
	const size = 100;
	return (
		<div className={styles.allContainer}>
			<div className={styles.anyContainer}>
				<LockSvgComponent outerRadius={100} innerRadius={90} segmentsCount={32} />
				<LockSvgComponent outerRadius={80} innerRadius={70} segmentsCount={32} />
				<LockSvgComponent outerRadius={60} innerRadius={50} segmentsCount={32} />
			</div>
			<div className={styles.anyContainer}>
				<LockSvgComponent outerRadius={100} innerRadius={90} segmentsCount={32} />
				<LockSvgComponent outerRadius={80} innerRadius={70} segmentsCount={32} />
				<LockSvgComponent outerRadius={60} innerRadius={50} segmentsCount={32} />
			</div>
		</div>
	)
}
