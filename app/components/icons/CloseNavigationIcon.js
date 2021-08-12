import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

function CloseNavigationIcon(props) {
  return (
    <Svg
      data-name="Group 6902"
      xmlns="http://www.w3.org/2000/svg"
      width={59.544}
      height={57.965}
      viewBox="0 0 59.544 57.965"
      {...props}
    >
      <Path
        data-name="Path 4262"
        d="M23.445 0c13.623 0 24.666 6.855 24.666 17.147S37.068 35.3 23.445 35.3C16.2 35.3 14 30.761 9.737 26.777 6.43 23.693 0 19.423 0 14.606c0-5.9 5.608-5.336 11.563-8.926C15.485 3.31 17.628 0 23.445 0z"
        transform="rotate(-40 42.483 15.463)"
        fill="#ffa600"
      />
      <G
        data-name="Icon / Close / Outlined"
        transform="translate(16.615 15.827)"
      >
        <Path fill="none" d="M0 0H26.31V26.31H0z" />
        <Path
          data-name="Path 2079"
          d="M12.2-12.781L10.977-14 6.1-9.122 1.22-14 0-12.781 4.878-7.9 0-3.026l1.22 1.22L6.1-6.684l4.878 4.878 1.222-1.22L7.318-7.9z"
          transform="translate(5.481 19.481)"
          fill="#fff"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
}

export default CloseNavigationIcon;
