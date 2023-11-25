import React, { useState } from "react";
import { Button } from "../button/Button.jsx";
import styles from './ControlPanel.module.css'

export const ControlPanel = ({ onRotateRight, onRotateLeft }) => {
	const [intervalID, setIntervalID] = useState(false);

	const onMouseDown = (event) => {
		const id = setInterval(() => {
			event.target.click()
		}, 100);
		setIntervalID(id);
	}

	const onMouseUp = () => {
		clearInterval(intervalID)
	}
	return (
		<div className={styles.controlPanel}>
			<Button
				onMouseDown={(event) => onMouseDown(event)}
				onMouseUp={onMouseUp}
				onClick={() => onRotateLeft(1)}
				iconPosition='left'
			>
				Влево
			</Button>
			<Button
				onMouseDown={(event) => onMouseDown(event)}
				onMouseUp={onMouseUp}
				onClick={() => onRotateRight(1)}
				iconPosition='right'
			>
				Вправо
			</Button>
		</div>
	)
}