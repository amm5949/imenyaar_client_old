import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: link, style */

function SimpleLocationIcon({ size, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <Path
        d="M256 0C166.035 0 91 72.47 91 165c0 35.202 10.578 66.592 30.879 96.006l121.494 189.58c5.894 9.216 19.372 9.198 25.254 0l122.021-190.225C410.512 232.28 421 199.307 421 165 421 74.019 346.981 0 256 0zm0 240c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75-33.647 75-75 75z"
        fill={color}
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
    </Svg>
  );
}

export default SimpleLocationIcon;
