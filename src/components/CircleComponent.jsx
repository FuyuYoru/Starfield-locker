import React, { useState } from "react";
import { LockSvgComponent } from "./CustomSVGComponent.jsx";
import styles from './CircleComponent.module.css';
import { Digipick } from "./digipick/Digipick.jsx";
import { ControlPanel } from "./controlPanel/ControlPanel.jsx";
import { getLockerSegments } from "../utils/LockerSegments.js";
import { store } from "../redux/store.js";
// import { useSelector, useDI } from "react-redux/es/hooks/useSelector.js";
import { useSelector, useDispatch } from "react-redux";
import { getActiveDigipick } from "../redux/selectors/activeDigipick.js";
import { changePosition } from "../redux/slices/digipicksSlice.js";

export const CircleComponent = ({ sections }) => {
	const dispatch = useDispatch();
	const digipick = useSelector(state => getActiveDigipick(state));
	console.log(sections, digipick);
	const handleRotateLeft = (markers, displacement) => {
		const tmp = rotateMarkers('left', markers, displacement)
		dispatch(changePosition({
			digipickID: digipick.id,
			newPosition: tmp
		}))
	};

	const handleRotateRight = (markers, displacement) => {
		const tmp = rotateMarkers('right', markers, displacement)
		dispatch(changePosition({
			digipickID: digipick.id,
			newPosition: tmp
		}))
	};

	return (
		<div className={styles.allContainer}>
			<div className={styles.anyContainer}
				style={{
					width: `${220 * 2}px`,
					height: `${220 * 2}px`,
				}}>
				{digipick !== null ? <Digipick radius={220} markersPosition={digipick.properties.indexes} /> : null}
				{Object.keys(sections).map((value, index) => {
					return (
						<LockSvgComponent
							key={index}
							outerRadius={200 - (20 * index) - 5 * index}
							innerRadius={180 - (20 * index) - 5 * index}
							segmentsCount={32}
							disabledSegments={sections[value].segments} />
					)
				})}
			</div>
			<ControlPanel
				onRotateLeft={digipick ? (displacement) => handleRotateLeft(digipick.properties.indexes, displacement) : null}
				
				onRotateRight={digipick ? (displacement) => handleRotateRight(digipick.properties.indexes, displacement) : null}
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