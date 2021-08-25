import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ProjectPersonIcon({ size, color = "#58508d", ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24.457 19.565"
      {...props}
    >
      <Path
        data-name="Icon awesome-user-check"
        d="M8.56 9.783a4.891 4.891 0 10-4.891-4.892A4.891 4.891 0 008.56 9.783zm3.424 1.223h-.638a6.652 6.652 0 01-5.572 0h-.638A5.137 5.137 0 000 16.141v1.59a1.835 1.835 0 001.834 1.834h13.451a1.835 1.835 0 001.834-1.834v-1.59a5.137 5.137 0 00-5.135-5.135zM24.327 6.1l-1.062-1.075a.453.453 0 00-.642 0L18.618 9l-1.739-1.75a.453.453 0 00-.642 0l-1.074 1.058a.453.453 0 000 .642l3.122 3.145a.453.453 0 00.642 0l5.4-5.358a.457.457 0 000-.642z"
        fill={color}
      />
    </Svg>
  );
}

export default ProjectPersonIcon;
