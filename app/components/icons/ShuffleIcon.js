import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ShuffleIcon({ size, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 8.569 8"
      {...props}
    >
      <Path
        data-name="Rectangle 1459"
        transform="translate(.077)"
        fill="none"
        d="M0 0H8V8H0z"
      />
      <Path
        data-name="Union 48"
        d="M6.552 6.049H5.8a2.579 2.579 0 01-2.271-1.413l-.907-1.764a1.49 1.49 0 00-1.363-.856H0V1.009h1.259a2.58 2.58 0 012.27 1.412l.907 1.764A1.486 1.486 0 005.8 5.04h.756V4.032l2.013 1.513-2.017 1.512zM0 6.049V5.04h1.259a1.481 1.481 0 001.11-.455l.2.5a2.816 2.816 0 00.253.4 2.362 2.362 0 01-1.564.554zm6.552-4.033H5.8a1.487 1.487 0 00-1.11.455l-.2-.5a2.736 2.736 0 00-.253-.4A2.362 2.362 0 015.8 1.009h.756V0l2.013 1.511-2.017 1.515z"
        transform="translate(0 .817)"
        fill="#ff6361"
      />
    </Svg>
  );
}

export default ShuffleIcon;
