import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RepeatIcon({ size, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 8.569 8.569"
      {...props}
    >
      <Path
        data-name="Path 189"
        d="M2.678 5.356c.268 0 .375.161.161.375l-.8.8a3.207 3.207 0 002.246.969A3.239 3.239 0 007.5 4.713a.542.542 0 011.071.107v.107a4.283 4.283 0 01-4.286 3.642 4.479 4.479 0 01-3.053-1.231l-.857.857C.161 8.409 0 8.3 0 8.034v-2.41a.253.253 0 01.268-.268zm3.213-2.142c-.268 0-.375-.161-.161-.375l.8-.8a3.207 3.207 0 00-2.249-.964 3.239 3.239 0 00-3.21 2.781.509.509 0 01-.536.428A.506.506 0 010 3.749v-.107A4.283 4.283 0 014.285 0a4.479 4.479 0 013.053 1.232l.857-.857c.214-.214.375-.107.375.161v2.41a.253.253 0 01-.268.268z"
        fill="#ff6361"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default RepeatIcon;
