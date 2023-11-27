import { combineReducers } from "@reduxjs/toolkit";
import lockSectionsSlice from "./lockSectionsSlice";
import digipicksSlice from "./digipicksSlice";
import activeDigipickSlice from "./activeDigipickSlice";
export const rootReducer = combineReducers({
	lockSections: lockSectionsSlice,
	digipicks: digipicksSlice,
	activeDigipick: activeDigipickSlice,
})