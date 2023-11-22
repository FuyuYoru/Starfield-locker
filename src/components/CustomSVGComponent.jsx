import React from 'react';

const calculateCoordinates = (radius, angle) => ({
	x: 100 + radius * Math.cos((angle * Math.PI) / 180),
	y: 100 + radius * Math.sin((angle * Math.PI) / 180),
});

const describeArc = (radius, startAngle, endAngle, sweepFlag) => {
	const start = calculateCoordinates(radius, startAngle);
	const end = calculateCoordinates(radius, endAngle);

	const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

	return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`;
};

const describeCircle = (outerRadius, innerRadius, segmentsCount) => {
	const resultPath = [];
	for (let i = 0; i < segmentsCount; i++) {
		const startAngle = (360 / segmentsCount) * i;
		const endAngle = (360 / segmentsCount) * (i + 1);;
		const segmentPath = `
    ${describeArc(outerRadius, startAngle, endAngle, 1)}
    L ${calculateCoordinates(innerRadius, endAngle).x} ${calculateCoordinates(innerRadius, endAngle).y}
    ${describeArc(innerRadius, endAngle, startAngle, 0)}
    L ${calculateCoordinates(outerRadius, startAngle).x} ${calculateCoordinates(outerRadius, startAngle).y}
  	`;
		resultPath.push(segmentPath)
	}
	return resultPath
}

export const LockSvgComponent = ({ outerRadius, innerRadius, segmentsCount = 32, disabledSegments = [5, 9, 15] }) => {
	const pathData = describeCircle(outerRadius, innerRadius, segmentsCount)

	return (
		<svg style={{
			width: `${outerRadius * 2}`,
			height: `${outerRadius * 2}`
		}} xmlns="http://www.w3.org/2000/svg">
			<g 
			>
				{pathData.map((path, index) => {
					if (disabledSegments.includes(index)) {
						return <path d={`${path}`} fill="transparent" stroke="transparent" strokeWidth="0.5" />
					} else {
						return <path d={`${path}`} fill="yellow" stroke="black" strokeWidth="0.5" />
					}
				})}
			</g>
		</svg>
	);
};


