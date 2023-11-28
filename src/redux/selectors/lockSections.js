import { createSelector } from "@reduxjs/toolkit";
const selectSections = (state) => state.lockSections;

export const allSections = createSelector(
	[selectSections],
	sections => {
		const { activeSection, ...restSections } = sections;
		return restSections;
	}
);