import React from 'react';
import { CircleComponent } from './components/lockerBoard/LockerBoard.jsx';
import ReactDOM from 'react-dom';
import { Board } from './pages/board/Board.jsx';
import './index.css'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { App } from './App.jsx';
import './index.css'

ReactDOM
	.render(
		<Provider store={store}>
			<App />
		</Provider>
		,document.getElementById('root')
	);