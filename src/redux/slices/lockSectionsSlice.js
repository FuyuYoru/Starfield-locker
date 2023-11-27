import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const lockSections = createSlice({
	name: 'lockSections',
	initialState,
	reducers: {
		addSection: (state, action) => {
			const { sectionNumber, segments, distances } = action.payload;
			state[sectionNumber] = {
				'segments': segments,
				'distances': distances,
			};
		},
		refreshState: (state) => {
			state = initialState
		}
	}
})

export const { addSection } = lockSections.actions;
export default lockSections.reducer;