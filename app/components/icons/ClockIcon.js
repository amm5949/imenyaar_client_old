import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ClockIcon({ size, props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      {...props}
    >
      <Path
        data-name="Icon awesome-clock"
        d="M11.563.563a11 11 0 1011 11 11 11 0 00-11-11zM14.1 16.091l-3.912-2.843a.536.536 0 01-.217-.43V5.353a.534.534 0 01.532-.532h2.129a.534.534 0 01.532.532v6.107l2.817 2.049a.532.532 0 01.115.745l-1.256 1.722a.536.536 0 01-.74.115z"
        transform="translate(-.563 -.563)"
        fill="#ffa600"
      />
    </Svg>
  );
}

export default ClockIcon;
