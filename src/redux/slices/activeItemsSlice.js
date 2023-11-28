import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeDigipick: null,
	currentLevel: null,
	currentSection: null,
};

const activeItems = createSlice({
	name: 'activeItems',
	initialState,
	reducers: {
		setCurrentDigipick: (state, action) => {
			const { digipickID } = action.payload;
			state.activeDigipick = digipickID;
		},
		setCurrentLevel: (state, action) => {
			const { level } = action.payload;
			state.currentLevel = level;
		},
		clearActiveItems: (state) => {
			return { ...initialState }
		},
	}
})

export const { setCurrentDigipick, setCurrentLevel, clearActiveItems } = activeItems.actions;
export default activeItems.reducer;