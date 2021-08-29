
import * as React from "react";
import Svg, { G, Path, Polygon } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: link, style */

function BackwardArrowIcon({ size, color }) {
  return (
    <Svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size}
    height={size}
    fill={color}
	  viewBox="0 0 256 256" >
      <G>
        <G>
          <Polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		"/>
        </G>
      </G>
    </Svg>
  );
}

export default BackwardArrowIcon;