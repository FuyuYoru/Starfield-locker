import React from "react"
export const CircleFragment = () => {
	return (
		<svg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='10' height='8' fill='#F5F5F5' />
			<g clip-path='url(#clip0_0_1)'>
				<rect width='10' height='8' fill='white' />
				<mask id='path-1-inside-1_0_1' fill='white'>
					<path d='M0.5 1C3.9525 1 7.2917 2.18942 9.917 
					4.35432L7.0919 7.54802C5.25419 6.03259 2.91675 5.2 0.5 5.2L0.5 1Z' />
				</mask>
				<path d='M0.5 1C3.9525 1 7.2917 2.18942 9.917 
				4.35432L7.0919 7.54802C5.25419 6.03259 2.91675 5.2 0.5 5.2L0.5 1Z'
					fill='#ADADAD' stroke='black' stroke-width='0.6' mask='url(#path-1-inside-1_0_1)' />
			</g>
			<defs>
				<clipPath id='clip0_0_1'>
					<rect width='10' height='8' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export const CircleFragmentResizable = ({ width = 10, height = 8 }) => {
	return (
		<svg width={width} height={height} viewBox={`0 0 10 8`} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width={width} height={height} fill='#F5F5F5' />
			<g clip-path='url(#clip0_0_1)'>
				<rect width={width} height={height} fill='white' />
				<mask id='path-1-inside-1_0_1' fill='white'>
					<path d={`M0.5 1C3.9525 1 7.2917 2.18942 9.917 
					4.35432L7.0919 7.54802C5.25419 6.03259 2.91675 5.2 0.5 5.2V${height} 1Z`} />
				</mask>
				<path d={`M0.5 1C3.9525 1 7.2917 2.18942 9.917 
					4.35432L7.0919 7.54802C5.25419 6.03259 2.91675 5.2 0.5 5.2V${height} 1Z`}
					fill='#ADADAD' stroke='black' stroke-width='0.6' mask='url(#path-1-inside-1_0_1)' />
			</g>
			<defs>
				<clipPath id='clip0_0_1'>
					<rect width={width} height={height} fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export const CircleSegment = ({ radius, thickness }) => {
  const angle = 10;
  const angleInRadians = (angle * Math.PI) / 180;

  const x2 = radius * Math.sin(angleInRadians);
  const y2 = radius * Math.cos(angleInRadians);

  const x3 = (radius - thickness) * Math.sin(angleInRadians);
  const y3 = (radius - thickness) * Math.cos(angleInRadians);

  const y4 = radius - thickness;

  const svgWidth = Math.round(19.625);
  const svgHeight = thickness * 1.5; // Considering thickness * 0.5 + thickness

  return (
    <svg
      width={`${svgWidth}px`}
      height={`${svgHeight}px`}
      style={{ overflow: 'visible' }}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform={`translate(0, ${-radius + thickness})`}>
        <path
          d={`
            M ${0} ${radius + thickness * 0.5}
            A ${radius} ${radius} 0 0 0 ${x2} ${y2 + thickness * 0.5}
            L ${x3} ${y3 + thickness * 0.5}
            A ${radius - thickness} ${radius - thickness} 0 0 1 ${0} ${y4 + thickness * 0.5}
            Z`}
          fill="green"
          stroke="black"
        />
      </g>
    </svg>
  );
};

export default CircleSegment;
