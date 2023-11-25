import React, { useState } from "react";
const calculateCoordinates = (radius, angle) => ({
	x: radius * Math.cos((angle * Math.PI) / 180),
	y: radius * Math.sin((angle * Math.PI) / 180),
});

export const Digipick = ({ radius, markersPosition = [0, 15, 31] }) => {

	return (
		<svg style={{
			width: `${radius * 2}`,
			height: `${radius * 2}`

		}}>
			<g
				style={{ transform: `translate(${radius / 2}px, ${radius / 2}px` }}
			>
				<circle cx={radius / 2} cy={radius / 2} r={radius} fill="transparent" stroke="black" strokeWidth={2} />
				{markersPosition.map((value, index) => {
					const angle = (11.25 * value) + 11.25 / 2;
					return (
						<line
							key={index}
							x1={radius / 2 + calculateCoordinates(radius + 5, angle).x} y1={radius / 2 + calculateCoordinates(radius + 5, angle).y}
							x2={radius / 2 + calculateCoordinates(radius - 20, angle).x} y2={radius / 2 + calculateCoordinates(radius - 20, angle).y}
							stroke="red"
							strokeWidth={10}
						/>)
				}
				)}
			</g>
		</svg>
	)
}
