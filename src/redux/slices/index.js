import { combineReducers } from "@reduxjs/toolkit";
import lockSectionsSlice from "./lockSectionsSlice";
import digipicksSlice from "./digipicksSlice";

export const rootReducer = combineReducers({
	lockSections: lockSectionsSlice,
	digipicks: digipicksSlice,
})