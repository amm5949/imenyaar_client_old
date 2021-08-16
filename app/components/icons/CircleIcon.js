import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: link, style */

function CircleIcon({ size, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 451.827 451.827"
    >
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M225.922,0C101.351,0,0.004,101.347,0.004,225.917s101.347,225.909,225.917,225.909
			  c124.554,0,225.901-101.347,225.901-225.909C451.823,101.347,350.476,0,225.922,0z"
        data-original="#000000"
        fill={color}
      />
    </Svg>
  );
}

export default CircleIcon;