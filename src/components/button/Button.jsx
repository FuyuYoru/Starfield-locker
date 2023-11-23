import React from "react";
import styles from './Button.module.css'
export const Button = (props) => {
	return (
		<button
			className={`${styles.button}  ${props.className?props.className:''}`}
			onClick={props.onClick}
		>
			<span className={styles.buttonText}>{props.children}</span>
			<span className={styles.buttonIcon}>{props.icon}</span>
		</button>
	)
}