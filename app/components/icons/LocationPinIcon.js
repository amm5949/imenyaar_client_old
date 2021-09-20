import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function LocationPinIcon({ size = 92, props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 92.592 111.094"
      {...props}
    >
      <Defs></Defs>
      <G filter="url(#a)">
        <Path
          data-name="Path 26"
          d="M104.146 0A15.391 15.391 0 0093.2 26.216l-6.252 24.877 16.11-20.708a1.331 1.331 0 001.088.4 15.395 15.395 0 000-30.789zm10.826 20.093c-1.412.1-2.75-2.544-2.985-5.9s.722-6.157 2.135-6.258 2.751 2.544 2.987 5.9-.723 6.16-2.138 6.258z"
          transform="translate(-56.95 42)"
          fill="#d45087"
        />
      </G>
    </Svg>
  );
}

export default LocationPinIcon;
