import React from 'react';

const BubbleComponent = ({ outerRadius, innerRadius, gapWidth, outerBorderColor, segmentColor }) => {
	const calculatePoint = (angle, radius) => {
		const x = Math.cos(angle) * radius;
		const y = Math.sin(angle) * radius;
		return `${x},${y}`;
	};

	const createPath = () => {
		const pathData = [];

		for (let angle = 0; angle < 360; angle += 10) {
			const outerPoint = calculatePoint((angle * Math.PI) / 180, outerRadius);
			const innerPoint = calculatePoint((angle * Math.PI) / 180, innerRadius);

			pathData.push(`${outerPoint} ${innerPoint}`);
		}

		return pathData.join(' ');
	};

	return (
		<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">

			<path
				d="M 100,100 m -80,0 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0"
				fill="transparent"
				stroke="blue"
				stroke-width="1"
			/>




			<path
				d="M 100,40 a 60,60 0 1,0 0,120 a 60,60 0 1,0 0,-120"
				fill="transparent"
				stroke="blue"
				stroke-width="1"
			/>

			<g stroke="black" stroke-width="1" fill="transparent">

				{Array.from({ length: 36 }).map((_, index) => {
					const angle = index * 10; // Каждые 10 градусов
					const startArcX = 100 + 60 * Math.cos((angle * Math.PI) / 180);
					const startArcY = 100 + 60 * Math.sin((angle * Math.PI) / 180);
					const endArcX = 100 + 80 * Math.cos((angle * Math.PI) / 180);
					const endArcY = 100 + 80 * Math.sin((angle * Math.PI) / 180);

					return (
						<path
							key={index}
							d={`M ${startArcX},${startArcY} L ${endArcX},${endArcY}`}
							stroke="black"
							stroke-width="1"
						/>
					);
				})}
			</g>
		</svg>


	);
};

export default BubbleComponent;
