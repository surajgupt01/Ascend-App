import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function IconBG() {
  return (
    <Svg
      width="45"
      height="32"
      viewBox="0 0 45 32"
      fill="none"
    >
      <Path
        d="M45 24.3472V13.6333C45 10.3315 42.6928 7.47869 39.4641 6.7881L8.46411 0.157546C4.10723 -0.774341 0 2.5473 0 7.00272V24.3472C0 28.2132 3.13401 31.3472 7 31.3472H38C41.866 31.3472 45 28.2132 45 24.3472Z"
        fill="url(#paint0_linear_283_1659)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_283_1659"
          x1="22.5"
          y1="-1.65283"
          x2="22.5"
          y2="31.3472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F35233" />
          <Stop offset="1" stopColor="#FF9480" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}