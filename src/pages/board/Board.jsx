import React from "react";
import styles from './Board.module.css'
import { CircleComponent } from "../../components/CircleComponent.jsx";

export const Board = () => {

	return (
		<div>
			<div className={styles.gameBoard}>
				<CircleComponent/>
				<CircleComponent/>
			</div>
			<div>

			</div>
		</div>
	)
}