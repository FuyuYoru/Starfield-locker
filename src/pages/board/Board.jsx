import React from "react";
import styles from "./Board.module.css";
import { CircleComponent } from "../../components/CircleComponent.jsx";

export const Board = () => {
  return (
    <div className={styles.gameField}>
      <div className={styles.gameBoard}>
        <CircleComponent />
      </div>
      <div className={styles.infoBoard}>
        <div className={styles.topBarMenu}>
          <div className={styles.nameLocker}>
            DIGPICK LINKED
            <br />
            <span
              style={{
                fontSize: "16px",
              }}
            >
              DOOR
            </span>
          </div>
          <div className={styles.lvlLocker}>
            <img
              src="./imgs/square.svg"
              alt=""
              style={{ fill: "red", marginRight: "3px" }}
            />
            <div
              style={{
                fontSize: "18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              SECURITY LEVEL <br />
              <span
                style={{
                  fontSize: "28px",
                  verticalAlign: "middle",
                }}>
                EXPERT
              </span>
            </div>
          </div>
          <div className={styles.selectingComb}>
            <div className={styles.topCountComb}>
              <div className="topCountCombName">DIGIPICKS</div>
              <div className={styles.topCountCombCount}>7</div>
            </div>
            <div className={styles.changeComb}>
              <img src="./imgs/circle.svg" alt="" />
              <img src="./imgs/circle.svg" alt="" />
              <img src="./imgs/circle.svg" alt="" />
              <img src="./imgs/circle.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="botBarKey">qwerty</div>
      </div>
    </div>
  );
};
