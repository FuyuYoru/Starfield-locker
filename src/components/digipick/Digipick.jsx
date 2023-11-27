import React, { useState } from "react";
const calculateCoordinates = (radius, angle) => ({
	x: radius * Math.cos((angle * Math.PI) / 180),
	y: radius * Math.sin((angle * Math.PI) / 180),
});

export const Digipick = ({ radius, markersPosition = [0, 15, 31], markerColor = 'red', circleColor = 'black' }) => {

	return (
		<svg style={{
			width: `${radius * 2}`,
			height: `${radius * 2}`,
			overflow: 'visible',

		}}>
			<g
				style={{ transform: `translate(${radius / 2}px, ${radius / 2}px` }}
			>
				<circle cx={radius / 2} cy={radius / 2} r={radius} fill="transparent" stroke={circleColor} strokeWidth={radius > 100 ? radius * 0.02 : 2} />
				{markersPosition.map((value, index) => {
					const angle = (11.25 * value) + 11.25 / 2;
					return (
						<line
							key={index}
							x1={radius / 2 + calculateCoordinates(radius + 0.1 * radius, angle).x} y1={radius / 2 + calculateCoordinates(radius + 0.1 * radius, angle).y}
							x2={radius / 2 + calculateCoordinates(radius - 0.1 * radius, angle).x} y2={radius / 2 + calculateCoordinates(radius - 0.1 * radius, angle).y}
							stroke={markerColor}
							strokeWidth={radius > 100 ? radius * 0.05 : 2}
						/>)
				}
				)}
			</g>
		</svg>
	)
}
