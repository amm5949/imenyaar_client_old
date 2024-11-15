import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: link, style */

function CalendarIcon({ size, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 511.977 511.977"
    >
      <G xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M14.977 390.988h392c3.516 0 6.914-1.23 9.609-3.472 3.765-3.153 89.652-77.038 94.889-236.528h-421C85.258 295.762 6.16 363.81 5.338 364.489.519 368.561-1.254 375.212.914 381.13c2.153 5.903 7.764 9.858 14.063 9.858zM496.976 60.988h-75v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-76v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-75v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-75c-8.4 0-15 6.6-15 15v45h421v-45c0-8.4-6.6-15-15-15z"
          fill={color}
          data-original="#000000"
        />
        <Path
          d="M435.849 410.515c-8.145 6.782-18.369 10.474-28.872 10.474h-316v45c0 8.291 6.709 15 15 15h391c8.291 0 15-6.709 15-15V297.843c-28.92 70.951-69.276 106.937-76.128 112.672z"
          fill={color}
          data-original="#000000"
        />
      </G>
    </Svg>
  );
}

export default CalendarIcon;
