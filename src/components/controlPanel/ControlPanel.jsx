import React, { useState } from "react";
import { Button } from "../button/Button.jsx";
import styles from './ControlPanel.module.css'
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useGameState from "../../hooks/gameState.js";

export const ControlPanel = ({ onRotateRight, onRotateLeft, onTryUnlock }) => {
	const [intervalID, setIntervalID] = useState(false);
	const navLinkRef = useRef()
	const { stopGame } = useGameState()
	
	const HandleHomeTransition = () => {
		stopGame()
		navLinkRef.current.click()
	}

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
				onClick={onTryUnlock}
				iconPosition='right'
			>
				Try
			</Button>
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
			<Button
				iconPosition='right'
				onClick={HandleHomeTransition}
			>
				На главную
			</Button>
			<NavLink to={"/"} style={{ display: 'none' }} ref={navLinkRef} />
		</div>
	)
}