import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import shuffle from "../../utils/shuffleArray";

interface IDigipick {
	indexes: Array<number>;
	distances: Array<number>;
	isUsed: boolean;
}

interface DigipicksState {
	[key: string]: IDigipick;
}

const initialState: DigipicksState = {

}

const digipicks = createSlice({
	name: 'digipicks',
	initialState,
	reducers: {
		addDigipick: (state, action: PayloadAction<IDigipick>) => {
			const { indexes, distances } = action.payload;
			const id = `digipick_${Object.keys(state).length + 1}`
			state[id] = {
				indexes: indexes,
				distances: distances,
				isUsed: false,
			};
		},
		addDigipicks: (state, action: PayloadAction<{ arrayObjects: IDigipick[] }>) => {
			const { arrayObjects } = action.payload;
			shuffle(arrayObjects).forEach((value, index) => {
				const id = `digipick_${index + 1}`;
				state[id] = {
					indexes: value.indexes,
					distances: value.distances,
					isUsed: false,
				};
			});
		},
		changePosition: (state, action: PayloadAction<{ digipickID: string; newPosition: Array<number> }>) => {
			const { digipickID, newPosition } = action.payload;
			state[digipickID].indexes = newPosition
		},
		setIsUsed: (state, action: PayloadAction<{ digipickID: string; }>) => {
			const { digipickID } = action.payload;
			state[digipickID].isUsed = true;
		},
		clearDigipicks: (state) => {
			return { ...initialState }
		}
	}
})

export const { addDigipick, addDigipicks, changePosition, setIsUsed, clearDigipicks } = digipicks.actions;
export default digipicks.reducer;