import { createSlice } from "@reduxjs/toolkit";
import shuffle from "../../utils/shuffleArray";
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
		addDigipicks: (state, action) => {
			const { arrayObjects } = action.payload;
			shuffle(arrayObjects).map((value, index) => {
				const id = `digipick_${index + 1}`
				state[id] = {
					indexes: value.indexes,
					distances: value.distances
				};
			})
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

export const { addDigipick, addDigipicks, changePosition } = digipicks.actions;
export default digipicks.reducer;