import React, { useState } from "react";
import { Button } from "../button/Button.jsx";
import styles from './ControlPanel.module.css'

export const ControlPanel = ({ onRotateRight, onRotateLeft }) => {
	const [intervalID, setIntervalID] = useState(false);

	const onMouseDown = (event) => {
		const id = setInterval(() => {
			event.target.click()
		}, 150);
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
				onClick={onRotateLeft ? () => onRotateLeft(1) : null}
				iconPosition='left'
			>
				Влево
			</Button>
			<Button
				onMouseDown={(event) => onMouseDown(event)}
				onMouseUp={onMouseUp}
				onClick={onRotateRight ? () => onRotateRight(1) : null}
				iconPosition='right'
			>
				Вправо
			</Button>
		</div>
	)
}