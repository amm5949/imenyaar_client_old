import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function ManIcon({ size = 33, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={34}
      fill="#d45087"
      {...props}
    >
      <Defs></Defs>
      <G
        id="Icon_ionic-ios-man"
        data-name="Icon ionic-ios-man"
        transform="translate(-9.984 -1.125)"
      >
        <Path d="M17.979 7.5h-.014a3.185 3.185 0 113.2-3.185A3.193 3.193 0 0117.979 7.5z" />
        <Path d="M15.553 34.875a1.921 1.921 0 01-1.9-2.138l.07-19.519h-.7V20.6a1.706 1.706 0 01-.45 1.287 1.494 1.494 0 01-2.138 0 1.694 1.694 0 01-.45-1.287v-8.55a4.061 4.061 0 01.97-2.7A3.591 3.591 0 0113.7 8.086h8.6a3.574 3.574 0 012.742 1.273 4.043 4.043 0 01.97 2.693V20.6a1.667 1.667 0 01-.464 1.287 1.58 1.58 0 01-2.18 0A1.667 1.667 0 0122.9 20.6v-7.381h-.633v19.518a1.948 1.948 0 11-3.881.042v-9.927h-.844v9.907a2 2 0 01-1.989 2.116z" />
      </G>
    </Svg>
  );
}

export default ManIcon;
