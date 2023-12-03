import React, { useState, FC } from "react";
import styles from './digipick.module.css'

interface IDigipick {
	radius: number,
	markersPosition: number[],
	isAdaptive: boolean,

}

const calculateCoordinates = (radius: number, angle: number) => ({
	x: radius * Math.cos((angle * Math.PI) / 180),
	y: radius * Math.sin((angle * Math.PI) / 180),
});

export const Digipick: FC<IDigipick> = ({ radius, markersPosition, isAdaptive }) => {

	return (
		<svg
			className={isAdaptive ? styles.svg : ''}
			style={{
				width: `${radius * 2}`,
				height: `${radius * 2}`,
				overflow: 'visible',
			}}
		>
			<g
				style={{ transform: `translate(25%, 25%)` }}
			>
				{/* radius / 2 */}
				<circle cx={radius / 2} cy={radius / 2} r={radius} fill="transparent" stroke={'rgba(255, 255, 255, 0.5)'} strokeWidth={radius > 100 ? radius * 0.0225 : 2} />
				{markersPosition.map((value, index) => {
					const angle = (11.25 * value) + 11.25 / 2;
					return (
						<line
							key={index}
							x1={radius / 2 + calculateCoordinates(radius + 0.05 * radius, angle).x} y1={radius / 2 + calculateCoordinates(radius + 0.05 * radius, angle).y}
							x2={radius / 2 + calculateCoordinates(radius - 0.075 * radius, angle).x} y2={radius / 2 + calculateCoordinates(radius - 0.075 * radius, angle).y}
							stroke={'rgba(255, 255, 255, 0.8)'}
							strokeWidth={radius > 100 ? radius * 0.0225 : 2}
						/>)
				}
				)}
			</g>
		</svg>
	)
}
