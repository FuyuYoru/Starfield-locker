import React from "react";
import { LockSvgComponent } from "./CustomSVGComponent.jsx";
export const CircleComponent = () => {
	const size = 100;
	return (
		<>
			<div style={
				{
					position: 'absolute',
					width: size * 2,
					height: size * 2,
					left: '25%',
					top: '25%',
				}
			}>
				<div>
					<LockSvgComponent outerRadius={100} innerRadius={90} segmentsCount={32} />
				</div>
			</div>
		</>
	)
}
