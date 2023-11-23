import React from "react";
import styles from './Home.module.css'
import { NavLink } from "react-router-dom";

export const Home = () => {
	return (
		<div className={styles.HomeContainer}>
			<h1>Lorem, ipsum dolor.</h1>
			<div> Slider container</div>
			<NavLink to={"game"}>
				<button>Start</button>
			</NavLink>
		</div>
	)
};