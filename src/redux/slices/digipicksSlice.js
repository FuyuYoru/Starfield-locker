import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const digipicks = createSlice({
	name: 'digipicks',
	initialState,
	reducers: {
		addDigipick: (state, action) => {
			const { digipickId, properties } = action.payload;
			state[digipickId] = properties;
		},
	}
})

export const { addDigipick } = digipicks.actions;
export default digipicks.reducer;