import React, { useState, FC, Dispatch, SetStateAction } from "react";
import styles from './RowSelector.module.css'

interface IRowSelector {
	onChange?: Dispatch<SetStateAction<string | null>>;
	selectedItem: string | null,
}

export const RowSelector: FC<IRowSelector> = ({ onChange, selectedItem }) => {
	const levels: string[] = ['easy', 'medium', 'expert', 'master'];
	function changeSelectedItem(value: string) {
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