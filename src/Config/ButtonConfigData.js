import { Colors } from "./Theme"
import { BackIcon, SecondaryBackIcon, PlusMinusIcon, SecondaryPlusMinusIcon } from "../Assets/Icons/index";

const data = [
    {
        id : 1,
        buttons : [
            {
                id : 1,
                symbol : '+',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE
            },
            {
                id : 2,
                symbol : '+/-',
                icon1 : () => <PlusMinusIcon />,
                icon2 : () => <SecondaryPlusMinusIcon />,
                isIcon : true,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE
            },
            {
                id : 2,
                symbol : '%',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE
            },
            {
                id : 4,
                symbol : '/',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.PRIMARY_COLOR,
                bgColor2 : Colors.WHITE
            }
        ]
    }
]