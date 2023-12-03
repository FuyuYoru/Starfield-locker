import React, { FC, useState } from "react";
import { LockSvgComponent } from "../lockSection/LockSectionComponent.tsx";
import styles from './LockerBoard.module.css';
import { Digipick } from "../digipick/Digipick.tsx";
import { ControlPanel } from "../controlPanel/ControlPanel.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getActiveDigipick } from "../../redux/selectors/activeDigipick.js";
import { changePosition, setIsUsed } from "../../redux/slices/digipicksSlice.js";
import { changeSection } from "../../redux/slices/lockSectionsSlice";
import { createPortal } from "react-dom";
import infoboardStyles from "../../pages/board/Board.module.css";

interface IHandleTry {
	digipickMarkers: number[],
	sectionMarkers: number[],
	digipickID: number,
}
interface IRotate {
	markers: number[],
	displacement?: number, 
}

export const LockerBoard = ({ sections }) => {
	const dispatch = useDispatch();
	const digipick = useSelector(state => getActiveDigipick(state));
	const currSection = useSelector(state => state.lockSections.activeSection)

	const handleTryUnlock = ({digipickMarkers, sectionMarkers, digipickID}: IHandleTry): void => {
		for (let i = 0; i < digipickMarkers.length; i++) {
			if (!sectionMarkers.includes(digipickMarkers[i])) {
				return
			}
		}
		const newSegments = sectionMarkers.filter((value) => !digipickMarkers.includes(value), []);
		dispatch(setIsUsed({ digipickID: digipickID }))
		dispatch(changeSection({
			sectionNumber: currSection,
			newSegments: newSegments,
		}))
	}

	const handleRotateLeft = ({markers, displacement}: IRotate) => {
		const tmp = rotateMarkers('left', markers, displacement)
		dispatch(changePosition({
			digipickID: digipick.id,
			newPosition: tmp
		}))
	};

	const handleRotateRight = ({markers, displacement}: IRotate) => {
		const tmp = rotateMarkers('right', markers, displacement)
		dispatch(changePosition({
			digipickID: digipick.id,
			newPosition: tmp
		}))
	};

	return (
		<>
			<div className={styles.allContainer}>
				<div className={styles.anyContainer}
					style={{
						width: `${220 * 2}px`,
						height: `${220 * 2}px`,
					}}>
					{digipick !== null && !digipick.properties.isUsed ?
						<Digipick radius={220} markersPosition={digipick.properties.indexes} isAdaptive={true} />
						: null}
					{Object.keys(sections).map((value, index) => {
						if (!sections[value].opened) {
							return (
								<LockSvgComponent
									key={index}
									outerRadius={200 - (20 * index) - 5 * index}
									innerRadius={180 - (20 * index) - 2.5 * index}
									segmentsCount={32}
									disabledSegments={sections[value].segments} />
							)
						}
					})}
				</div>
				<ControlPanel
					onRotateLeft={digipick ? (displacement) => handleRotateLeft(digipick.properties.indexes, displacement) : null}
					onTryUnlock={digipick ?
						() => handleTryUnlock({
							digipickMarkers: digipick.properties.indexes,
							sectionMarkers: sections[`section_${currSection}`].segments,
							digipickID: digipick.id,
						})
						: null}
					onRotateRight={digipick ? (displacement) => handleRotateRight(digipick.properties.indexes, displacement) : null}
				/>
			</div>
		</>
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