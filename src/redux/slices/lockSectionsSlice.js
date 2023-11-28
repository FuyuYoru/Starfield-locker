import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeSection: null,
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
				'opened': false,
			};
		},
		changeSection: (state, action) => {
			const { sectionNumber, newSegments } = action.payload;
			const section = `section_${sectionNumber}`
			if (newSegments.length > 0) {
				state[section].segments = newSegments;
			} else {
				state[section].opened = true
				if (sectionNumber !== Object.keys(state).length) {
					state.activeSection = sectionNumber + 1
				}
				console.log(state.activeSection)
			}
		},
		setCurrentSection: (state, action) => {
			const { section } = action.payload;
			state.activeSection = section;
		},
		clearLockSections: (state) => {
			return { ...initialState }
		}
	}
})

export const { addSection, changeSection, setCurrentSection, clearLockSections } = lockSections.actions;
export default lockSections.reducer;