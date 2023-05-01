import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const MoonIcon = (props) => (
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
                d="M8.03239 6.23186C6.2001 7.49474 5 9.60797 5 11.9999C5 15.8659 8.13401 18.9999 12 18.9999C14.3918 18.9999 16.5049 17.8 17.7678 15.9678C17.5146 15.9893 17.2585 16.0002 17 16.0002C12.0294 16.0002 8 11.9708 8 7.00019C8 6.7415 8.01094 6.48524 8.03239 6.23186ZM3 11.9999C3 8.04173 5.55459 4.68279 9.10211 3.47693L10.3707 4.74561C10.1306 5.45177 10 6.20969 10 7.00019C10 10.8662 13.134 14.0002 17 14.0002C17.7904 14.0002 18.5482 13.8696 19.2542 13.6296L20.5228 14.8983C19.3168 18.4455 15.958 20.9999 12 20.9999C7.02944 20.9999 3 16.9705 3 11.9999Z"
                fill="#4B5EFC"
            />
        </G>
    </Svg>
);

export default MoonIcon;