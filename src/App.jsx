import React, { useState } from "react";
import { Home } from "./pages/home/Home.jsx";
import { Board } from "./pages/board/Board.jsx";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
export const App = () => {
	const [activePage, setActivePage] = useState('Home');

	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />}>
					</Route>
					<Route path='/game' element={<Board/>}>
					</Route>
				</Routes>
			</Router>
		</>
	)
}