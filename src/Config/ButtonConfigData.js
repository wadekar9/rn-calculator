import { Colors } from "./Theme"
import { BackIcon, SecondaryBackIcon, PlusMinusIcon, SecondaryPlusMinusIcon } from "../Assets/Icons/index";
import { BACK, CLEAR, ADD, DIVIDE, MODULE, MULTIPLY, SUBSTRACT, UNKNOWN, EQUAL, CONCAT } from '../Context/ActionTypes';

const data = [
    {
        id: 1,
        buttons: [
            {
                id: 1,
                symbol: 'C',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: true,
                buttonAction: CLEAR
            },
            {
                id: 2,
                symbol: '+/-',
                icon1: () => <PlusMinusIcon />,
                icon2: () => <SecondaryPlusMinusIcon />,
                isIcon: true,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: true,
                buttonAction: UNKNOWN
            },
            {
                id: 2,
                symbol: '%',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: true,
                buttonAction: MODULE
            },
            {
                id: 4,
                symbol: '/',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.PRIMARY_COLOR,
                bgColor2: Colors.PRIMARY_COLOR,
                isOperator: true,
                buttonAction: DIVIDE
            }
        ]
    },
    {
        id: 2,
        buttons: [
            {
                id: 1,
                symbol: '7',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 2,
                symbol: '8',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 3,
                symbol: '9',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 4,
                symbol: 'X',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.PRIMARY_COLOR,
                bgColor2: Colors.PRIMARY_COLOR,
                isOperator: true,
                buttonAction: MULTIPLY
            }
        ]
    },
    {
        id: 3,
        buttons: [
            {
                id: 1,
                symbol: '4',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 2,
                symbol: '5',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 3,
                symbol: '6',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 4,
                symbol: '-',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.PRIMARY_COLOR,
                bgColor2: Colors.PRIMARY_COLOR,
                isOperator: true,
                buttonAction: SUBSTRACT
            }
        ]
    },
    {
        id: 4,
        buttons: [
            {
                id: 1,
                symbol: '1',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 2,
                symbol: '2',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 3,
                symbol: '3',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 4,
                symbol: '+',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.PRIMARY_COLOR,
                bgColor2: Colors.PRIMARY_COLOR,
                isOperator: true,
                buttonAction: ADD
            }
        ]
    },
    {
        id: 5,
        buttons: [
            {
                id: 1,
                symbol: '.',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: true,
                buttonAction: CONCAT
            },
            {
                id: 2,
                symbol: '0',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: false,
                buttonAction: CONCAT
            },
            {
                id: 3,
                symbol: '--',
                icon1: () => <BackIcon />,
                icon2: () => <SecondaryBackIcon />,
                isIcon: true,
                bgColor1: Colors.DARK_BUTTON_MEDIUM,
                bgColor2: Colors.WHITE,
                isOperator: true,
                buttonAction: BACK
            },
            {
                id: 4,
                symbol: '=',
                icon1: () => null,
                icon2: () => null,
                isIcon: false,
                bgColor1: Colors.PRIMARY_COLOR,
                bgColor2: Colors.PRIMARY_COLOR,
                isOperator: true,
                buttonAction: EQUAL
            }
        ]
    }
]

export { data };