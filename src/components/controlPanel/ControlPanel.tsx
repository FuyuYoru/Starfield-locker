import React, { RefObject, Ref, useState } from "react";
import { Button } from "../button/Button";
import styles from './ControlPanel.module.css'
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useGameState from "../../hooks/gameState.js";

interface IControlPanel {
	onRotateRight: (() => void) | null,
	onRotateLeft: (() => void) | null,
	onTryUnlock: (() => void) | null,
}

export const ControlPanel = ({ onRotateRight, onRotateLeft, onTryUnlock }: IControlPanel) => {
	const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
	const navLinkRef = useRef<HTMLAnchorElement>(null);
	// const myRef: MutableRefObject<HTMLAnchorElement | undefined> = navLinkRef as MutableRefObject<HTMLAnchorElement | undefined>;
	const { stopGame } = useGameState()

	const HandleHomeTransition = () => {
		stopGame()
		if (navLinkRef.current) {
			navLinkRef.current.click()
		}
	}

	const onMouseDown = (event: any) => {
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
				onMouseDown={(event: Event) => onMouseDown(event)}
				onMouseUp={onMouseUp}
				onClick={onRotateLeft}
				iconPosition='left'
			>
				Влево
			</Button>
			<Button
				onMouseDown={(event: Event) => onMouseDown(event)}
				onMouseUp={onMouseUp}
				onClick={onRotateRight}
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
			<NavLink to={"/"} style={{ display: 'none' }} ref={navLinkRef} >

			</NavLink>
		</div>
	)
}