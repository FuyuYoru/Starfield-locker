import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveItemsState {
	activeDigipick: string | null;
	currentLevel: string | null;
	currentSection: string | null;
}

const initialState: ActiveItemsState = {
	activeDigipick: null,
	currentLevel: null,
	currentSection: null,
};

const activeItems = createSlice({
	name: 'activeItems',
	initialState,
	reducers: {
		setCurrentDigipick: (state, action: PayloadAction<{ digipickID: string }>) => {
			const { digipickID } = action.payload;
			state.activeDigipick = digipickID;
		},
		setCurrentLevel: (state, action: PayloadAction<{ level: string }>) => {
			const { level } = action.payload;
			state.currentLevel = level;
		},
		clearActiveItems: (state) => {
			return { ...initialState };
		},
	},
});

export const { setCurrentDigipick, setCurrentLevel, clearActiveItems } = activeItems.actions;
export default activeItems.reducer;
