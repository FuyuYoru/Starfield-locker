import React from "react";
import styles from './Home.module.css'
import { NavLink } from "react-router-dom";
import { RowSelector } from "../../components/rowSelector/RowSelector";
import { Button } from "../../components/button/Button.jsx";
import { useState, useRef } from "react";
import useGameState from "../../hooks/gameState.js";

export const Home = () => {
	// const dispatch = useDispatch()
	const [selectedItem, setSelectedItem] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const navLinkRef = useRef();
	const { startGame } = useGameState(selectedItem);

	const handleStartGame = () => {
		if (selectedItem !== null) {
			startGame(selectedItem)
			navLinkRef.current.click()
		} else {
			setErrorMessage('Выберите один из уровней')
		}
	}
	return (
		<div className={styles.HomeContainer}>
			<h1>StarField Locker</h1>
			<RowSelector onChange={setSelectedItem} selectedItem={selectedItem} />
			<Button onClick={handleStartGame}>Start</Button>
			<NavLink to={"game"} style={{ display: 'none' }} ref={navLinkRef} />
			<h2>{errorMessage}</h2>
		</div>
	)
};