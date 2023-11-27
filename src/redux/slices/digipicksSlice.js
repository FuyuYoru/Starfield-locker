import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const digipicks = createSlice({
	name: 'digipicks',
	initialState,
	reducers: {
		addDigipick: (state, action) => {
			const { indexes, distances } = action.payload;
			const id = `digipick_${Object.keys(state).length + 1}`
			state[id] = {
				indexes: indexes,
				distances: distances
			};
		},
		changePosition: (state, action) => {
			const { digipickID, newPosition } = action.payload;
			state[digipickID].indexes = newPosition
		},
		refreshState: (state) => {
			state = initialState
		}
	}
})

export const { addDigipick, changePosition } = digipicks.actions;
export default digipicks.reducer;