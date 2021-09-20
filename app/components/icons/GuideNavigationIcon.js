import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ size = 24, ...props }) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      enableBackground="new 0 0 100 100"
      {...props}
    >
      <Path
        d="M88.19 50.7l-.18 7.76c-1.68 1.28-3.25.29-4.65-.44-12-6.19-31.56 2.09-31.54 22.13 0 1.4.84 3.01-.84 4.09-6.91 0-13.82-.01-20.72.02-5.07.02-8.94-1.81-10.86-6.78 4.76-2.85 10-.84 14.97-1.49 2.46-.32 5.46.89 6.93-2.34.35-1.17 1.23-2.21.89-3.56-3.23-2.92-7.29-2.88-11.23-3.1-6.26-.35-7.98-1.89-8.06-8.1-.13-8.94-.05-17.88-.02-26.82.01-1.83.09-3.67 1.56-5.07 7.85-1.9 15.72-1.72 23.59-.13 2.04 1.74 1.8 4.17 1.84 6.46.12 6.64-.04 13.29.46 19.94.47-6.22.34-12.45.44-18.68.04-2.61-.43-5.38 1.63-7.58 7.71-2 15.45-1.44 23.2-.35 2.22 1.34 2.03 3.62 2.14 5.74.19 3.47-.17 6.96.36 11.45 1.64-5.91-.52-11.25 1.71-16.08 4.76-1.31 6.83 1.67 8.51 5.3.53 5.88 1.2 11.76-.13 17.63z"
        fill="#fea500"
      />
      <Path
        d="M88.19 50.7c-1.58-5.85.01-11.86-.9-17.74-1.98-6.61-2.17-6.75-6.73-5.32-.09 4.97-.13 9.94-.29 14.91-.05 1.69.69 4.41-1.78 4.44-2.96.04-1.97-2.88-2.04-4.66-.18-4.97-.17-9.94-.24-14.92-.7-.76-1-1.68-1.18-2.69-1-5.81-2-6.55-7.8-5.41-5.67 1.12-10.75 3.41-14.47 8.08-.1 8.79-.16 17.58-.33 26.37-.03 1.65.77 4.33-1.85 4.34-2.63.01-1.87-2.66-1.9-4.33-.15-8.79-.2-17.59-.28-26.38-3.86-4.44-8.75-7.08-14.48-8.15-5.89-1.1-7.43.01-8.26 5.83-.14 1-.57 1.9-.76 2.88-.09 11.24-.16 22.49-.27 33.73-.03 2.81 1.35 3.78 4.05 3.56 4.18-.33 8.26.27 12.18 1.76 1.83.7 3.91 1.34 3.32 4.08-.48 1.2-1.71 1.2-2.53 1.09-5.75-.8-11.49-1.73-17.19-2.73-3.95-.7-4.6-4.27-4.61-7.85-.01-10.15.05-20.3 0-30.43-.48-1.44-.05-3.68-2.56-3.46-2.26.2-2.28 2.2-2.3 3.79-.17 12.06-.15 24.12-.03 36.18.03 2.69 1.12 4.47 4.17 4.29 5.89-.3 11.77-.13 17.65-.1 1.97.01 3.92.31 5.54 1.61 2.01 3.98-1.17 3.6-3.28 3.67-6.55.22-13.1.24-19.65.34-9.25-1.09-9.51-1.39-9.51-10.77 0-12.46-.02-24.92.01-37.37.02-6.31 1.33-7.76 7.41-7.97 2.18-.07 3.66-.13 4.03-2.97.4-3.08 3.08-4.07 5.9-4.4 5.78-.67 11.61.02 16.3 3.23 5.22 3.57 9.18 3.48 14.37-.11 4.5-3.12 10.22-3.74 15.83-3.15 2.61.27 5.45 1.04 5.87 3.76.6 3.85 2.88 3.65 5.66 3.66 3.73.01 5.98 2.05 6.06 5.81.15 6.81.02 13.62.08 20.43.01 2.26-.73 3.51-3.21 3.07z"
        fill="#fcfcfa"
      />
      <Path
        d="M50.97 84.25c-1.79-15.56 6.47-27.18 20.79-29.35 5.89-.89 11.1 1.16 16.25 3.57 8.4 6.83 12.57 15.39 10.03 26.27-2.38 10.18-11.39 17.6-21.67 18.4-10.17.79-19.87-5.33-24-15.18-.51-1.22-.94-2.47-1.4-3.71z"
        fill="#faf8f5"
      />
      <Path
        d="M20.9 31.03c.08 10.24.12 20.48.24 30.72.06 5.66 1.49 7.37 7.1 6.87 5.62-.5 10.47 2.77 15.94 2.46-.62.8-1.24 1.59-1.86 2.39-7.91-.09-15.82-.18-23.72-.26-1.82-1.41-1.81-3.47-1.83-5.45-.08-9.31-.22-18.63.07-27.94.1-3.35-.16-7.2 4.06-8.79z"
        fill="#f5a613"
      />
      <Path
        d="M55.43 84.31c-3.19-6.25.22-17.68 8.62-22.76 8.02-4.85 17.5-3.86 24.17 2.64 2.93 7.17 1.63 14.82-3.3 18.68-2.25 1.76-4.72 3.15-7.78 2.39-2.19-1.27-.99-2.83-.25-4.24.78-1.48 2.08-2.58 3.18-3.83 2.47-2.8 2.96-5.86 1.27-9.22-1.42-2.83-3.79-4.17-6.89-3.98-3.68.22-6.12 2.12-7 5.93 1.71-2.77 3.81-4.75 7.3-4.68 4.75.1 8.29 4.47 5.91 8.41-2.65 4.39-5.48 8.7-8.14 13.12-3.7-.77-7.44-.8-11.19-.81-2.1.01-4.31.2-5.9-1.65z"
        fill="#fda602"
      />
      <Path
        d="M76.75 84.26c8.11-.75 11.22-4.07 11.32-12.09.03-2.66.1-5.32.15-7.98 6.57 5.81 8.59 14.94 5.07 22.93-3.61 8.2-11.88 13-20.83 12.1-8.38-.85-15.22-6.83-17.03-14.9 4.48-.02 8.97-.07 13.45-.03 1.42.01 3.06-.53 4.02 1.17 1.89 1.56 2.34-1.53 3.85-1.2z"
        fill="#071c33"
      />
      <Path
        d="M76.75 84.26c-.71 1.16.31 3.23-1.69 3.63-1.79.35-2.06-1.05-2.16-2.43.1-3.71 1.59-6.69 4.47-9.03 2.21-1.8 3.57-3.99 2.35-6.93-.91-2.2-2.64-3.37-5.05-3.3-3.07.08-4.89 1.64-5.44 4.71-.25 1.39-.84 2.73-2.6 2.06-1.6-.6-1.43-2.13-1.05-3.41 1.11-3.77 3.41-6.46 7.45-7.11 4.17-.67 7.58.77 9.63 4.54 2.02 3.7 1.66 7.35-1.05 10.63-1.77 2.12-4.51 3.5-4.86 6.64z"
        fill="#fef9f0"
      />
      <Path
        d="M76.38 93.61c.1 1.18-.52 1.91-1.61 1.96-1.07.04-1.78-.64-1.75-1.8.02-.89.47-1.55 1.38-1.68 1.12-.17 1.81.37 1.98 1.52z"
        fill="#d5d5d5"
      />
    </Svg>
  );
}

export default SvgComponent;
