import React, { useState } from "react";
import styles from './RowSelector.module.css'

export const RowSelector = ({ onChange, selectedItem }) => {
	const levels = ['easy', 'medium', 'expert', 'master']
	function changeSelectedItem(value) {
		if (onChange) {
			onChange(value)
		}
	}
	return (
		<>
			<div className={styles.selectorContainer}>
				{levels.map((value, index) =>
					<span
						key={index}
						onClick={() => changeSelectedItem(value)}
						className={value === selectedItem ? styles.selectedItem : styles.selectorItem}
					>
						{value}
					</span>
				)}
			</div>
		</>
	)
}