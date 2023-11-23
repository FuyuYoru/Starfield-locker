import React, { useState } from "react";
import styles from './RowSelector.module.css'

export const RowSelector = ({ onChange }) => {
	const [selectedItem, setSelectedItem] = useState(null);
	const levels = ['easy', 'medium', 'hard']
	function changeSelectedItem(value) {
		setSelectedItem(value)
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