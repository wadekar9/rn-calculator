import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SecondaryPlusMinusIcon = (props) => (
    <Svg
        width={33}
        height={32}
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5821 7.55469L24.1367 6.72264L22.4726 5.61324L21.9179 6.44529L9.91795 24.4453L9.36325 25.2773L11.0273 26.3867L11.5821 25.5547L23.5821 7.55469ZM9.75 5.99999V6.99999V8.99999H11.75H12.75V11H11.75H9.75V13V14H7.75V13V11H5.75H4.75V8.99999H5.75H7.75V6.99999V5.99999H9.75ZM21.75 21H20.75V23H21.75H27.75H28.75V21H27.75H21.75Z"
            fill="black"
        />
    </Svg>
);

export default SecondaryPlusMinusIcon;