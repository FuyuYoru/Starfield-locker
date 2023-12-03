import React, { useState, FC } from "react";

import { Home } from "./pages/home/Home.jsx";
import { Board } from "./pages/board/Board.jsx";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { LockerBoard } from './components/lockerBoard/LockerBoard.jsx';
import ReactDOM from 'react-dom';
import './index.css'
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';
import './index.css'

interface AppState { }

export const App: FC<AppState> = () => {
	const store = setupStore()
	return (
		<>
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path='/' element={<Home />}>
						</Route>
						<Route path='/game' element={<Board />}>
						</Route>
					</Routes>
				</Router>
			</Provider>
		</>
	);
};

ReactDOM
	.render(<App />, document.getElementById('root'));