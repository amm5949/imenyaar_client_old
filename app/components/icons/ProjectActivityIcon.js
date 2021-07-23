import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: link, style */

function ProjectActivityIcon({ size, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      enableBackground="new 0 0 512 512"
      {...props}
    >
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M79 165.188a2.5 2.5 0 01-2.5-2.5V76a2.5 2.5 0 012.5-2.5h60.333a2.5 2.5 0 010 5H81.5v84.188a2.5 2.5 0 01-2.5 2.5zM183 182.5H90.312a2.5 2.5 0 010-5H180.5v-57.783a2.5 2.5 0 115 0V180a2.5 2.5 0 01-2.5 2.5z"
        fill="#7a7c83"
        data-original="#ebe7f2"
        opacity={0.8}
      />
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M61 182.875a2.5 2.5 0 01-2.5-2.5V58a2.5 2.5 0 012.5-2.5h77.174a2.5 2.5 0 010 5H63.5v119.875a2.5 2.5 0 01-2.5 2.5zM201 200.5H72.312a2.5 2.5 0 010-5H198.5v-80.63a2.5 2.5 0 015 0V198a2.5 2.5 0 01-2.5 2.5z"
        fill="#7a7c83"
        data-original="#65c1d6"
        opacity={0.8}
      />
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M94.371 177.44a2.49 2.49 0 01-1.767-.732L79.292 163.4a2.5 2.5 0 113.535-3.535l13.312 13.312a2.5 2.5 0 01-1.768 4.267zM80.281 191.531a2.492 2.492 0 01-1.767-.732L65.2 177.487a2.5 2.5 0 013.535-3.536l13.313 13.312a2.5 2.5 0 01-1.768 4.268zM67.269 204.543a2.493 2.493 0 01-1.768-.732L52.189 190.5a2.5 2.5 0 113.536-3.535l13.311 13.312a2.5 2.5 0 01-1.767 4.267z"
        fill="#7a7c83"
        data-original="#ebe7f2"
        opacity={0.8}
      />
      <G xmlns="http://www.w3.org/2000/svg" fill="#7a7c83">
        <Path
          d="M169.434 66.506a2.5 2.5 0 01-1.768-.732l-17.775-17.765a2.5 2.5 0 113.535-3.536l16.664 16.655 9.106-3.187a2.5 2.5 0 011.653 4.72l-10.589 3.7a2.515 2.515 0 01-.826.145zM209.759 106.842a2.493 2.493 0 01-1.769-.733l-17.765-17.776a2.5 2.5 0 01-.591-2.593l3.706-10.588a2.5 2.5 0 014.719 1.651l-3.187 9.107 16.655 16.665a2.5 2.5 0 01-1.768 4.267zM196.274 120.326a2.492 2.492 0 01-1.767-.732l-16.664-16.655-9.107 3.187a2.5 2.5 0 01-1.652-4.719l10.589-3.707a2.507 2.507 0 012.594.591l17.775 17.766a2.5 2.5 0 01-1.768 4.268zM152.233 90.59a2.5 2.5 0 01-2.359-3.326l3.187-9.107-16.656-16.665a2.5 2.5 0 013.537-3.534l17.766 17.776a2.5 2.5 0 01.591 2.593l-3.706 10.588a2.5 2.5 0 01-2.36 1.675z"
          data-original="#65c1d6"
          opacity={0.8}
        />
      </G>
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M220.038 94.392L207.56 81.914l4.448-4.448a2.5 2.5 0 000-3.535l-29.939-29.939a2.5 2.5 0 00-3.535 0l-4.448 4.449-12.479-12.479a2.572 2.572 0 00-3.535 0L129.09 64.945a2.5 2.5 0 000 3.535L151.1 90.5l-62.45 62.45a2.461 2.461 0 00-2.9.451L47.451 191.7a11.926 11.926 0 000 16.846 11.927 11.927 0 0016.848 0l38.3-38.305a2.491 2.491 0 00.451-2.9l62.45-62.45 22.015 22.015a2.5 2.5 0 003.535 0l28.983-28.984a2.5 2.5 0 000-3.535zM180.3 49.3l26.4 26.4-2.68 2.681-26.4-26.4zM60.764 205.013a6.923 6.923 0 01-9.778 0 6.921 6.921 0 010-9.776L87.525 158.7l9.777 9.776zm38.85-41.3l-7.33-7.331L154.64 94.03l7.33 7.33zm89.673-42.11l-54.894-54.89 25.447-25.447 54.9 54.894z"
        fill="#7a7c83"
        data-original="#846f75"
        opacity={0.8}
      />
    </Svg>
  );
}

export default ProjectActivityIcon;
