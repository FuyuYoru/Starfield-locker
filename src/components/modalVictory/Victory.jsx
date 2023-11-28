import React, { useState } from "react";
import styles from './Victory.module.css'
import useGameState from "../../hooks/gameState";
import { RowSelector } from "../rowSelector/RowSelector.jsx";
import { Button } from "../button/Button.jsx";

export const VictoryModal = (props) => {
	const [selectedLevel, setSelectedLevel] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const { startGame } = useGameState(selectedLevel)

	const handleStartGame = () => {
		if (selectedLevel === null) {
			setErrorMessage('Нужно выбрать уровень..')
			return
		}
		if (props.onClick) {
			props.onClick()
		}
		startGame()
	}
	return (
		<div className={styles.overlay}>
			<div className={styles.modalContainer}>
				<h2> Мои поздравления.. </h2>
				{errorMessage !== null ? <h2>{errorMessage}</h2> : null}
				<RowSelector onChange={setSelectedLevel} selectedItem={selectedLevel} />
				<Button onClick={handleStartGame}>
					{'Ещё разок? Выбери уровень'}
				</Button>
			</div>
		</div>
	)
}
