import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './slices'

export const setupStore = () => configureStore({
	reducer: rootReducer,
})

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];