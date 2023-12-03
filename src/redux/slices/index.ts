import { combineReducers } from "@reduxjs/toolkit";
import lockSectionsSlice from "./lockSectionsSlice";
import digipicksSlice from "./digipicksSlice";
import activeDigipickSlice from "./activeItemsSlice";

export const rootReducer = combineReducers({
	lockSections: lockSectionsSlice,
	digipicks: digipicksSlice,
	activeItems: activeDigipickSlice,
})

export type RootState = ReturnType<typeof rootReducer>;