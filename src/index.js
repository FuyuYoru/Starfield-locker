import React from 'react';
import { CircleComponent } from './components/CircleComponent.jsx';
import ReactDOM from 'react-dom';
import { Board } from './pages/board/Board.jsx';
import './index.css'



ReactDOM
	.render(
		<Board/>,
		document.getElementById('root')
	);