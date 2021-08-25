import * as React from "react";
import Svg, { Path } from "react-native-svg";

function QuestionMarkIcon({ size, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 15.655 25.2"
      {...props}
    >
      <Path
        data-name="Icon open-question-mark"
        d="M7.78 0a8.14 8.14 0 00-5.922 2.079A6.873 6.873 0 000 6.111l3.15.409a3.817 3.817 0 01.976-2.173c.6-.6 1.543-1.2 3.654-1.2a5.558 5.558 0 013.843 1.071 2.633 2.633 0 01.882 2.082c0 2.614-1.071 3.339-2.646 4.725s-3.654 3.4-3.654 7.087v.788h3.15v-.787c0-2.614.976-3.339 2.551-4.725s3.748-3.4 3.748-7.087A6.051 6.051 0 0013.8 1.858C12.442.63 10.426 0 7.78 0zM6.205 22.05v3.15h3.15v-3.15z"
        fill="#071c33"
      />
    </Svg>
  );
}

export default QuestionMarkIcon;
