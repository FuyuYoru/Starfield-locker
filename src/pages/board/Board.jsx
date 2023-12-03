import React from "react";
import styles from "./Board.module.css";
import { LockerBoard } from "../../components/lockerBoard/LockerBoard.tsx";
import NameLvl from "../../components/infoBoard/NameLvl.jsx";
import Level from "../../components/infoBoard/Level.jsx";
import SelectingCombContainer from "../../components/infoBoard/selectingCombs/SelectingCombContainer.tsx";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector.js";
import { useEffect, useState } from "react";
import { allSections } from "../../redux/selectors/lockSections.js";
import { createPortal } from "react-dom";
import { VictoryModal } from "../../components/modalVictory/Victory.tsx";
export const Board = () => {
	const lockSections = useSelector(state => allSections(state))
	const [isVictory, setIsVictory] = useState(false);
	useEffect(() => {
		const openedSections = Object.keys(lockSections).filter((value) => lockSections[value].opened === true, []);
		if (openedSections.length === Object.keys(lockSections).length) {
			setIsVictory(true)
		}
	}, [lockSections])

	return (
		<>
			<div className={styles.gameField}>
				<div className={styles.gameBoard}>
					<LockerBoard sections={lockSections} />
				</div>
				<div className={styles.infoBoard}>
					<div className={styles.topBarMenu}>
						<NameLvl />
						<Level />
						<SelectingCombContainer />
					</div>
					<div className="botBarKey">qwerty</div>
				</div>
			</div>
			{isVictory ? createPortal(
				<VictoryModal
					onClick={() => setIsVictory(false)}
				/>
				, document.getElementById('root'))
				: null}
		</>
	);
};
