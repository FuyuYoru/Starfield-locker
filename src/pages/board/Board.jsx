import React from "react";
import styles from './Board.module.css'
import { CircleComponent } from "../../components/CircleComponent.jsx";

export const Board = () => {

	return (
		<div className={styles.gameField}>
			<div className={styles.gameBoard}>
				<CircleComponent/>
			</div>
			<div className={styles.infoBoard}>
				<div className={styles.topBarMenu}>
					<div className="nameLocker">
						DIGPICK LINKED<br/>
						DOOR 
					</div>
					<div className="lvlLocker">
						SECURITY LEVEL <br/>
						EXPERT
					</div>
					<div className={styles.selectingComb}>
						<div className="topCountComb">
							<div className="topCountCombName">DIGIPICKS</div>
							<div className="topCountCombCount">7</div>
						</div>
						<div className="changeComb">
							<div className="comb1"></div>
							<div className="comb2"></div>
						</div>
					</div>
				</div>
				<div className="botBarKey">qwerty</div>
			</div>
		</div>
	)
}