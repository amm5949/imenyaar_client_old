import * as React from "react";
import Svg, { Defs, Pattern, Image, Path } from "react-native-svg";

function PersonListIcon({ size = 23, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      {...props}
    >
      <Defs>
        <Pattern
          id="a"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          viewBox={`0 1 ${2 * size} ${2 * size}`}
        >
          <Image
            width={2 * size}
            height={2 * size}
            xlinkHref="data:image/png;base64,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"
          />
        </Pattern>
      </Defs>
      <Path data-name="engineer@2x" fill="url(#a)" d="M0 0H23V23H0z" />
    </Svg>
  );
}

export default PersonListIcon;
