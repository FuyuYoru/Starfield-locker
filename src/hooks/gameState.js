import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { createLockerSegments, createDigipicks, createFakeDigipick } from "../utils/LockerSegments.js";
import calculateDistance from "../utils/CalculateDistance.js";
import { addDigipicks } from "../redux/slices/digipicksSlice";
import { addSection, setCurrentSection } from "../redux/slices/lockSectionsSlice";
import { setCurrentLevel, clearActiveItems } from "../redux/slices/activeItemsSlice.ts";
import { levelProps } from "../resources/data/levelPropreties.ts";
import { clearDigipicks } from "../redux/slices/digipicksSlice.ts";
import { clearLockSections } from "../redux/slices/lockSectionsSlice";


const useGameState = (selectedItem) => {
	const dispatch = useDispatch();

	const startGame = () => {
		const digipicksArray = [];
		stopGame()
		Array.from({ length: levelProps[selectedItem].sectionsCount }).forEach((_, index) => {
			const sectionProperties = createLockerSegments(levelProps[selectedItem]);
			dispatch(addSection({
				sectionNumber: `section_${index + 1}`,
				segments: sectionProperties,
				distances: calculateDistance(sectionProperties),
			}));

			const digipicks = createDigipicks(sectionProperties);
			Object.values(digipicks).map((element) => digipicksArray.push(element));
			const fakeDigipicks = createFakeDigipick(sectionProperties);
			digipicksArray.push(fakeDigipicks)
		});

		dispatch(addDigipicks({ arrayObjects: digipicksArray }));
		dispatch(setCurrentLevel({ level: selectedItem }));
		dispatch(setCurrentSection({ section: 1 }));
	};

	const stopGame = () => {
		dispatch(clearActiveItems());
		dispatch(clearDigipicks());
		dispatch(clearLockSections());
	};

	return { startGame, stopGame };
};

export default useGameState;