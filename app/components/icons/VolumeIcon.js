import * as React from "react";
import Svg, { Path } from "react-native-svg";

function VolumeIcon({ size, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 8 8.569"
      {...props}
    >
      <Path
        data-name="Rectangle 976"
        transform="translate(0 .255)"
        fill="none"
        d="M0 0H8V8H0z"
      />
      <Path
        data-name="Path 260"
        d="M4.45.257V8.4a.184.184 0 01-.171.171.265.265 0 01-.171-.086L1.793 6.256H.165c-.086 0-.086 0-.171-.086s0-.086 0-.171V2.571c0-.086 0-.086.086-.171a.3.3 0 01.171-.086h1.628L4.193 0h.171c.086.086.086.086.086.257z"
        transform="translate(2.225)"
        fill="#ff6361"
      />
    </Svg>
  );
}

export default VolumeIcon;
