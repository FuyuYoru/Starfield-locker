import React, { useState } from "react";
import styles from './Victory.module.css'
import useGameState from "../../hooks/gameState";
import { RowSelector } from "../rowSelector/RowSelector.jsx";
import { Button } from "../button/Button.jsx";

export const VictoryModal = (props) => {
	const [selectedLevel, setSelectedLevel] = useState(null);
	const { startGame } = useGameState(selectedLevel)

	const handleStartGame = () => {
		if (props.onClick) {
			props.onClick()
		}
		startGame()
	}
	return (
		<div className={styles.overlay}>
			<div className={styles.modalContainer}>
				<h2> Мои поздравления.. </h2>
				<RowSelector onChange={setSelectedLevel} selectedItem={selectedLevel} />
				<Button onClick={handleStartGame}>
					{'Ещё разок? Выбери уровень'}
				</Button>
			</div>
		</div>
	)
}
