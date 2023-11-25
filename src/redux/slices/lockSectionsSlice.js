import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const lockSections = createSlice({
	name: 'lockSections',
	initialState,
	reducers: {
		addSection: (state, action) => {
			const { sectionNumber, segments } = action.payload;
			state[sectionNumber] = segments;
		},
	}
})

export const { addSection } = lockSections.actions;
export default lockSections.reducer;