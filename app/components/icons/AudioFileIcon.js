import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AudioFileIcon({ size, color = "#ff6361", ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18.13 24.17"
      {...props}
    >
      <Path
        data-name="Icon awesome-file-audio"
        d="M10.576 6.42V0H1.133A1.13 1.13 0 000 1.133v21.9a1.13 1.13 0 001.133 1.137H17a1.13 1.13 0 001.133-1.133V7.553h-6.424a1.136 1.136 0 01-1.133-1.133zM7.554 19.072a.568.568 0 01-.968.4L4.91 17.75H3.588a.568.568 0 01-.567-.566V14.54a.568.568 0 01.567-.566H4.91l1.676-1.724a.567.567 0 01.968.4zm1.567-2.247a1.125 1.125 0 000-1.577 1.133 1.133 0 011.624-1.581 3.4 3.4 0 010 4.74 1.133 1.133 0 01-1.624-1.581zm4.06-5.528a6.794 6.794 0 010 9.479 1.133 1.133 0 01-1.624-1.581 4.527 4.527 0 000-6.316 1.133 1.133 0 011.625-1.579zm4.949-5.542v.288h-6.043V0h.288a1.132 1.132 0 01.8.33L17.8 4.957a1.129 1.129 0 01.33.798z"
        fill={color}
      />
    </Svg>
  );
}

export default AudioFileIcon;
