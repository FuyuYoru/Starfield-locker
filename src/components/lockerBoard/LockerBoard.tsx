import React, { FC, useState } from "react";
import { LockSvgComponent } from "../lockSection/LockSectionComponent";
import styles from './LockerBoard.module.css';
import { Digipick } from "../digipick/Digipick";
import { ControlPanel } from "../controlPanel/ControlPanel";
import { useSelector, useDispatch } from "react-redux";
import { getActiveDigipick } from "../../redux/selectors/activeDigipick.js";
import { changePosition, setIsUsed } from "../../redux/slices/digipicksSlice";
import { changeSection } from "../../redux/slices/lockSectionsSlice";
import { RootState } from "../../redux/slices";
import { createPortal } from "react-dom";
import infoboardStyles from "../../pages/board/Board.module.css";

export const LockerBoard = ({ sections }: any) => {
	const dispatch = useDispatch();
	const digipick = useSelector(state => getActiveDigipick(state));
	const currSection = useSelector((state: RootState) => state.lockSections.activeSection)

	const handleTryUnlock = (digipickMarkers: number[], sectionMarkers: number[], digipickID: number): void => {
		if (!currSection) {
			return;
		}
		for (let i = 0; i < digipickMarkers.length; i++) {
			if (!sectionMarkers.includes(digipickMarkers[i])) {
				return;
			}
		}
		const newSegments = sectionMarkers.filter((value) => !digipickMarkers.includes(value), []);
		dispatch(setIsUsed({ digipickID: digipickID }))
		dispatch(changeSection({
			sectionNumber: currSection,
			newSegments: newSegments,
		}))
	}

	const handleRotateLeft = (markers: number[] | null, displacement: number) => {
		if (!digipick || !markers) {
			return
		}
		const tmp = rotateMarkers('left', markers, displacement)
		dispatch(changePosition({
			digipickID: digipick.id,
			newPosition: tmp
		}))
	};

	const handleRotateRight = (markers: number[], displacement: number) => {
		if (!markers || !digipick) {
			return;
		}
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
					onRotateLeft={digipick ? () => handleRotateLeft(digipick.properties.indexes, 1) : null}
					onTryUnlock={digipick ? () => handleTryUnlock(digipick.properties.indexes, sections[`section_${currSection}`].segments, digipick.id) : null}
					onRotateRight={digipick ? () => handleRotateRight(digipick.properties.indexes, 1) : null}
				/>
			</div>
		</>
	)
}

function rotateMarkers(type: string, markers: number[], displacement: number = 1): Array<number> {
	let result: number[] = []
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
	return result;
}