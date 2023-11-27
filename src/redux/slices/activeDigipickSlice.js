import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeDigipick: null,
	currentLevel: null,
	curretSection: null
};

const DigipickSlice = createSlice({
	name: 'activeDigipick',
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
		refreshState: (state) => {
			state = initialState
		}
	}
})

export const { setCurrentDigipick, setCurrentLevel, refreshState } = DigipickSlice.actions;
export default DigipickSlice.reducer;