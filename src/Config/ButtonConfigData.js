import { Colors } from "./Theme"
import { BackIcon, SecondaryBackIcon, PlusMinusIcon, SecondaryPlusMinusIcon } from "../Assets/Icons/index";

const data = [
    {
        id : 1,
        buttons : [
            {
                id : 1,
                symbol : 'C',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : true
            },
            {
                id : 2,
                symbol : '+/-',
                icon1 : () => <PlusMinusIcon />,
                icon2 : () => <SecondaryPlusMinusIcon />,
                isIcon : true,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : true
            },
            {
                id : 2,
                symbol : '%',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : true
            },
            {
                id : 4,
                symbol : '/',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.PRIMARY_COLOR,
                bgColor2 : Colors.PRIMARY_COLOR,
                isOperator : true
            }
        ]
    },
    {
        id : 2,
        buttons : [
            {
                id : 1,
                symbol : '7',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 2,
                symbol : '8',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 3,
                symbol : '9',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 4,
                symbol : 'x',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.PRIMARY_COLOR,
                bgColor2 : Colors.PRIMARY_COLOR,
                isOperator : true
            }
        ]
    },
    {
        id : 3,
        buttons : [
            {
                id : 1,
                symbol : '4',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 2,
                symbol : '5',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 3,
                symbol : '6',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 4,
                symbol : '-',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.PRIMARY_COLOR,
                bgColor2 : Colors.PRIMARY_COLOR,
                isOperator : true
            }
        ]
    },
    {
        id : 4,
        buttons : [
            {
                id : 1,
                symbol : '1',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 2,
                symbol : '2',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 3,
                symbol : '3',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 4,
                symbol : '+',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.PRIMARY_COLOR,
                bgColor2 : Colors.PRIMARY_COLOR,
                isOperator : true
            }
        ]
    },
    {
        id : 5,
        buttons : [
            {
                id : 1,
                symbol : '.',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : true
            },
            {
                id : 2,
                symbol : '0',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : false
            },
            {
                id : 3,
                symbol : '--',
                icon1 : () => <BackIcon />,
                icon2 : () => <SecondaryBackIcon />,
                isIcon : true,
                bgColor1 : Colors.DARK_BUTTON_MEDIUM,
                bgColor2 : Colors.WHITE,
                isOperator : true
            },
            {
                id : 4,
                symbol : '=',
                icon1 : () => null,
                icon2 : () => null,
                isIcon : false,
                bgColor1 : Colors.PRIMARY_COLOR,
                bgColor2 : Colors.PRIMARY_COLOR,
                isOperator : true
            }
        ]
    }
]

export { data };