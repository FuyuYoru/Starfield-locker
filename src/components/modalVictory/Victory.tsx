import React, { useState, FC } from "react";
import styles from './Victory.module.css'
import useGameState from "../../hooks/gameState.js";
import { RowSelector } from "../rowSelector/RowSelector";
import { Button } from "../button/Button";

interface IVictoryModal {
	onClick?: () => void,
}

export const VictoryModal: FC<IVictoryModal> = ({ onClick }) => {
	const [selectedLevel, setSelectedLevel] = useState<string | null>('');
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const { startGame } = useGameState(selectedLevel)

	const handleStartGame = () => {
		if (selectedLevel === null) {
			setErrorMessage('Нужно выбрать уровень..')
			return
		}
		if (onClick) {
			onClick()
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
