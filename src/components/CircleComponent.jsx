import React, { useState } from "react";
import { LockSvgComponent } from "./CustomSVGComponent.jsx";
import styles from './CircleComponent.module.css';
import { Digipick } from "./digipick/Digipick.jsx";
import { ControlPanel } from "./controlPanel/ControlPanel.jsx";
import { getLockerSegments } from "../utils/LockerSegments.js";

export const CircleComponent = () => {
	const [currentDigipickMarkers, setCurrentDigipickMarkers] = useState([20, 10, 15])

	const handleRotateLeft = (markers, displacement) => {
		const tmp = rotateMarkers('left', markers, displacement)
		setCurrentDigipickMarkers(tmp);
	}

	const handleRotateRight = (markers, displacement) => {
		const tmp = rotateMarkers('right', markers, displacement)
		setCurrentDigipickMarkers(tmp);
	}
	return (
		<div className={styles.allContainer}>
			<div className={styles.anyContainer}
				style={{
					width: `${220 * 2}px`,
					height: `${220 * 2}px`,
				}}>
				<Digipick radius={220} markersPosition={currentDigipickMarkers} />
				<LockSvgComponent outerRadius={200} innerRadius={180} segmentsCount={32} disabledSegments={getLockerSegments()}/>
				<LockSvgComponent outerRadius={178} innerRadius={158} segmentsCount={32} disabledSegments={getLockerSegments()}/>
				<LockSvgComponent outerRadius={156} innerRadius={136} segmentsCount={32} disabledSegments={getLockerSegments()}/>
			</div>
			<ControlPanel
				onRotateLeft={(displacement) => handleRotateLeft(currentDigipickMarkers, displacement)}
				onRotateRight={(displacement) => handleRotateRight(currentDigipickMarkers, displacement)}
			/>
		</div>
	)
}

function rotateMarkers(type, markers, displacement = 1) {
	let result = []
	if (type === 'left') {
		result = [...markers].map((value) => {
			const tmp = value + displacement;
			return (tmp <= 31 ? tmp : 0)
		})
	} else if (type === 'right') {
		result = [...markers].map((value) => {
			const tmp = value - displacement;
			return (tmp >= 0 ? tmp : 31)
		})
	}
	return result
}