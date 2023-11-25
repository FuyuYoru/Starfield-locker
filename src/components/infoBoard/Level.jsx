import React from 'react';
import styles from './Level.module.css'

const Level = () => {
    return (
        <div className={styles.lvlLocker}>
            <img
                src="./imgs/square.svg"
                alt=""
                className={styles.imgLevelLocker}
            />
            <div
                className={styles.nameLevellocker}
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
    );
}

export default Level;
