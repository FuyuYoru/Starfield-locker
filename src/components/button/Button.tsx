import React from "react";
import styles from './Button.module.css'

export const Button = (props: any) => {
	return (
		<button
			className={`${styles.button}  ${props.className ? props.className : ''}`}
			onClick={props.onClick}
			style={props.iconPosition && props.iconPosition === 'left' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}
			onMouseDown={props.onMouseDown}
			onMouseUp={props.onMouseUp}
		>
			<span className={styles.buttonText}>{props.children}</span>
			{props.icon ? <span className={styles.buttonIcon}>{props.icon}</span>: null}
		</button>
	)
}