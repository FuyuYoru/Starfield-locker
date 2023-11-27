import React from "react";
import styles from './Home.module.css'
import { NavLink } from "react-router-dom";
import { RowSelector } from "../../components/rowSelector/RowSelector.jsx";
import { Button } from "../../components/button/Button.jsx";
import { createLockerSegments, createDigipicks } from "../../utils/LockerSegments.js";
import { addDigipick, addDigipicks } from "../../redux/slices/digipicksSlice.js";
import calculateDistance from "../../utils/CalculateDistance.js";
import { useDispatch } from "react-redux";
import { addSection } from "../../redux/slices/lockSectionsSlice.js";
import { store } from "../../redux/store.js";
import { useState, useRef } from "react";
import { levelProps } from "../../resources/data/levelPropreties.js";
import { setCurrentLevel } from "../../redux/slices/activeDigipickSlice.js";

export const Home = () => {
	const dispatch = useDispatch()
	const [selectedItem, setSelectedItem] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const navLinkRef = useRef();
	console.log(styles);
	const handleStartGame = () => {
		const digipicksArray = [];
		if (selectedItem !== null) {
			Array.from({ length: levelProps[selectedItem].sectionsCount }).forEach((_, index) => {
				const sectionProperties = createLockerSegments(levelProps[selectedItem]);
				dispatch(addSection({
					sectionNumber: `section_${index + 1}`,
					segments: sectionProperties,
					distances: calculateDistance(sectionProperties),
				}));

				const digipicks = createDigipicks(sectionProperties);
				console.log(digipicks);
				Object.values(digipicks).map((element) => digipicksArray.push(element))
			});
			dispatch(addDigipicks({ arrayObjects: digipicksArray }))
			dispatch(setCurrentLevel({ level: selectedItem }));
			navLinkRef.current.click()
		} else {
			setErrorMessage('Выберите один из уровней')
		}
	}


	return (
		<div className={styles.HomeContainer}>
			<h1>Lorem, ipsum dolor.</h1>
			<RowSelector onChange={setSelectedItem} selectedItem={selectedItem} />
			<Button onClick={handleStartGame}>Start</Button>
			<NavLink to={"game"} style={{ display: 'none' }} ref={navLinkRef} />
			<h2>{errorMessage}</h2>
		</div>
	)
};