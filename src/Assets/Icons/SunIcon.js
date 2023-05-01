import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SunIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.7}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2V3V5V6H11V5V3V2H13ZM2 11H3H5H6V13H5H3H2V11ZM19 11H18V13H19H21H22V11H21H19ZM13 18V19V21V22H11V21V19V18H13ZM17.6568 19.0711L18.364 19.7782L19.7782 18.364L19.0711 17.6569L17.6568 16.2427L16.9497 15.5356L15.5355 16.9498L16.2426 17.6569L17.6568 19.0711ZM7.05023 8.46451L6.34312 7.7574L4.92891 6.34319L4.2218 5.63608L5.63602 4.22187L6.34313 4.92897L7.75734 6.34319L8.46445 7.05029L7.05023 8.46451ZM19.0711 6.34309L19.7782 5.63599L18.364 4.22177L17.6568 4.92888L16.2426 6.34309L15.5355 7.0502L16.9497 8.46441L17.6568 7.75731L19.0711 6.34309ZM8.46445 16.9497L7.75734 17.6568L6.34312 19.071L5.63602 19.7781L4.2218 18.3639L4.92891 17.6568L6.34313 16.2426L7.05023 15.5355L8.46445 16.9497ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
        fill="#4B5EFC"
      />
    </G>
  </Svg>
);

export default SunIcon;