
import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: link, style */

function ForwardArrow({ size, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <Path
      xmlns="http://www.w3.org/2000/svg"
      data-original="#000000"
      fill={color}
      d="M328 112L184 256l144 144"/>
    </Svg>
  );
}

export default ForwardArrow;