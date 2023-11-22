import React, {useState} from "react";
import { Home } from "./pages/home/Home.jsx";
import { Board } from "./pages/board/Board.jsx";
export const App = () => {
	const [activePage, setActivePage] = useState('Home');

	return (
		activePage === 'Home'? <Home onGameStart={() => setActivePage('Board')}/>
		: <Board onGameEnd={() => setActivePage('Home')}/>
	)
}