import { createSelector } from "@reduxjs/toolkit";

const selectActiveItems = (state) => state.activeItems;
const selectDigipicks = (state) => state.digipicks

export const getActiveDigipick = createSelector(
	[selectActiveItems, selectDigipicks],
	(active, digipicks) => {
		if (active === null || !Object.keys(digipicks).includes(active.activeDigipick)) {
			return null;
		}
		return {
			id: active.activeDigipick,
			properties: digipicks[active.activeDigipick],
			// currentSection: 
		};
	}
);