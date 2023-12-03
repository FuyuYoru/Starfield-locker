import { createSelector } from "@reduxjs/toolkit";
const selectSections = (state) => state.lockSections;

export const allSections = createSelector(
	[selectSections],
	sectionsSlice => {
		const { activeSection, sections } = sectionsSlice;
		return sections;
	}
);