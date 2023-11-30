import React, { FC } from 'react';
import styles from './LockSection.module.css';

<<<<<<< HEAD
const calculateCoordinates = (radius: number, angle: number): { x: number, y: number } => ({
=======
const calculateCoordinates = (radius: number, angle: number ): {x: number, y: number} => ({
>>>>>>> 226fa75a29118e28d51f27799266f77ccac9d90d
	x: radius * Math.cos((angle * Math.PI) / 180),
	y: radius * Math.sin((angle * Math.PI) / 180),
});

const describeArc = (radius: number, startAngle: number, endAngle: number, sweepFlag: number): string => {
	const start = calculateCoordinates(radius, startAngle);
	const end = calculateCoordinates(radius, endAngle);

	const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

	return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`;
};

const describeCircle = (outerRadius: number, innerRadius: number, segmentsCount: number): Array<string> => {
	const resultPath: Array<string> = [];
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
	return resultPath;
}

interface ILockSvgComponent {
	outerRadius: number,
	innerRadius: number,
	segmentsCount?: number,
	disabledSegments?: number[],
}

export const LockSvgComponent: FC<ILockSvgComponent> = ({ outerRadius, innerRadius, segmentsCount = 32, disabledSegments = [5, 10, 31] }) => {
	const pathData = describeCircle(outerRadius, innerRadius, segmentsCount)
	return (
		<svg
			className={styles.svg}
			style={{
				width: `${outerRadius * 2}`,
				height: `${outerRadius * 2}`

			}}
			xmlns="http://www.w3.org/2000/svg">
			<g
				style={{ transform: `translate(50%, 50%)` }}
			>
				{pathData.map((path, index) => {
					if (disabledSegments.includes(index)) {
						return <path key={index} d={`${path}`} fill="transparent" stroke="transparent" strokeWidth="0.5" />
					} else {
						return <path key={index} d={`${path}`} fill="rgba(0, 255, 255, 0.5)" stroke="black" strokeWidth="0.5" />
					}
				})}
			</g>
		</svg >
	);
};


