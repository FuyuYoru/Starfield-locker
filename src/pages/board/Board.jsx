import React from "react";
import styles from "./Board.module.css";
import { CircleComponent } from "../../components/CircleComponent.jsx";
import NameLvl from "../../components/infoBoard/NameLvl.jsx";
import Level from "../../components/infoBoard/Level.jsx";
import SelectingCombContainer from "../../components/infoBoard/selectingCombs/SelectingCombContainer.jsx";

export const Board = () => {
  return (
    <div className={styles.gameField}>
      <div className={styles.gameBoard}>
        <CircleComponent />
      </div>
      <div className={styles.infoBoard}>
        <div className={styles.topBarMenu}>
          <NameLvl/>
          <Level/>
          <SelectingCombContainer/>
        </div>
        <div className="botBarKey">qwerty</div>
      </div>
    </div>
  );
};
