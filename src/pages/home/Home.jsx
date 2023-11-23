import React from "react";
import styles from './Home.module.css'
import { NavLink } from "react-router-dom";
import { RowSelector } from "../../components/rowSelector/RowSelector.jsx";
import { Button } from "../../components/button/Button.jsx";
export const Home = () => {
	return (
		<div className={styles.HomeContainer}>
			<h1>Lorem, ipsum dolor.</h1>
			<RowSelector />
			<NavLink to={"game"}>
				<Button>Start</Button>
			</NavLink>
		</div>
	)
};