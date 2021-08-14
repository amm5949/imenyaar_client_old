import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DescriptionIcon({ size = 20, color = "#58508d", ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19.149 25.533"
      {...props}
    >
      <Path
        data-name="Icon material-description"
        d="M17.968 3H8.394a2.475 2.475 0 00-2.382 2.553L6 25.979a2.475 2.475 0 002.382 2.553h14.374a2.485 2.485 0 002.394-2.553V10.66zm2.394 20.426h-9.575v-2.553h9.575zm0-5.107h-9.575v-2.553h9.575zm-3.591-6.383V4.915l6.583 7.021z"
        transform="translate(-6 -3)"
        fill={color}
      />
    </Svg>
  );
}

export default DescriptionIcon;
