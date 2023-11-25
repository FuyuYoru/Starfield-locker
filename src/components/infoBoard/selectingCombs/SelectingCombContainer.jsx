import React from 'react';
import styles from './SelectingCombContainer.module.css';

const SelectingCombContainer = () => {
    return (
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
    );
}

export default SelectingCombContainer;
