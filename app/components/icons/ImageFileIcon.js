import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ImageFileIcon({ size, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18.131 24.174"
      {...props}
    >
      <Path
        data-name="Icon awesome-file-image"
        d="M18.131 5.758v.286h-6.044V0h.286a1.133 1.133 0 01.8.332L17.8 4.956a1.133 1.133 0 01.331.802zm-6.421 1.8a1.137 1.137 0 01-1.133-1.133V0H1.133A1.133 1.133 0 000 1.133v21.908a1.133 1.133 0 001.133 1.133H17a1.133 1.133 0 001.133-1.133V7.555zm-6.4.755a2.266 2.266 0 11-2.266 2.266 2.266 2.266 0 012.27-2.269zm9.821 11.332H3.048l.023-2.289 1.866-1.866a.54.54 0 01.778.023l1.865 1.862 4.888-4.888a.567.567 0 01.8 0l1.866 1.866z"
        fill="#003f5c"
      />
    </Svg>
  );
}

export default ImageFileIcon;
