function Preview() {
  const radius = 130;
  const percent = 66;

  const strokeWidth = radius * 0.2;
  const innerRadius = radius - ( strokeWidth / 2 );
  const circumference = innerRadius * 2 * Math.PI;
  const arc = circumference * (270 / 360);
  const dashArray = `${arc} ${circumference}`;
  const transform = `rotate(135, ${radius}, ${radius})`;

  const percentNormalized = Math.min(Math.max(percent, 0), 100);
  const offset = arc - (percentNormalized / 100) * arc;

  return <>
     <svg
      height={radius * 2}
      width={radius * 2}
   >
     <circle
       className="gauge_base"
       cx={radius}
       cy={radius}
       fill="transparent"
       r={innerRadius}
       stroke="#ccc"
       strokeWidth={strokeWidth}
       strokeDasharray={dashArray}
       transform={transform}
       strokeLinecap="round"
     />
     <circle
       className="gauge_percent"
       cx={radius}
       cy={radius}
       fill="transparent"
       r={innerRadius}
       stroke="orangered"
       strokeWidth={strokeWidth}
       strokeDasharray={dashArray}
       strokeDashoffset={offset}
       transform={transform}
       strokeLinecap="round"
     />
  </svg>
  </>
}

export default Preview;
