import * as React from "react";
import Svg, { G, Path, Polygon } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: link, style */

function ForwardArrowIcon({ size, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 256 256"
    >
      <G>
        <G>
          <Polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128 		" />
        </G>
      </G>
    </Svg>
  );
}

export default ForwardArrowIcon;
