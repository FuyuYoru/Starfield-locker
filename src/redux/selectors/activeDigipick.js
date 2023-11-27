import { createSelector } from "@reduxjs/toolkit";

const selectActiveDigipick = (state) => state.activeDigipick;
const selectDigipicks = (state) => state.digipicks

export const getActiveDigipick = createSelector(
	[selectActiveDigipick, selectDigipicks],
	(active, digipicks) => {
		if (active === null || !Object.keys(digipicks).includes(active.activeDigipick)) {
			return null;
		}
		return {
			id: active.activeDigipick,
			properties: digipicks[active.activeDigipick],
		};
	}
);