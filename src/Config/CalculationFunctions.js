import { BACK, CLEAR, ADD, DIVIDE, MODULE, MULTIPLY, SUBSTRACT, UNKNOWN, EQUAL, CONCAT } from '../Context/ActionTypes';

const OPERATOR_ARR = ['+', '-', '=', '%', 'X']

export const intialState = {
    entireString: '0',
    currentValue: '0',
    previousValue: '0',
    calculation: '0',
    operator: null
}


const handleBackward = (state) => {

    const { entireString, currentValue, previousValue, calculation, operator } = state;

    if (entireString.length == 1) {
        return {
            ...state,
            entireString : '0',
            currentValue : '0'
        }
    }

    let tempVar = '0';

    if (operator != null) {
        const stringLastOperator = entireString[entireString?.length - 1];
        if (OPERATOR_ARR?.includes(stringLastOperator)) {
            tempVar = ''
        }
    }
    return {
        ...state,
        entireString: entireString?.slice(0, entireString?.length - 1),
        currentValue: currentValue?.slice(0, currentValue?.length - 1),
        previousValue: tempVar,
        operator: tempVar == '0' ? operator : null
    }
}

const handleCalculation = (type, state) => {

    const { entireString, operator, calculation } = state;

    if ((entireString.length == 1 || operator != null) && calculation == '0') {
        return {
            ...state
        }
    }



    if (type == '+') {

        return {
            ...state,
            entireString: calculation == '0' ? entireString.concat(type) : `${calculation}+`,
            calculation : '0',
            operator: '+',
            previousValue: calculation == '0' ? parseFloat(entireString) : calculation,
            currentValue: '0'
        }
    } else if (type == '-') {
        return {
            ...state,
            entireString: calculation == '0' ? entireString.concat(type) : `${calculation}-`,
            operator: '-',
            previousValue: calculation == '0' ? parseFloat(entireString) : calculation,
            currentValue: '0'
        }
    } else if (type == 'X') {
        return {
            ...state,
            entireString: calculation == '0' ? entireString.concat(type) : `${calculation}X`,
            operator: 'X',
            previousValue: calculation == '0' ? parseFloat(entireString) : calculation,
            currentValue: '0'
        }
    } else if (type == '/') {
        return {
            ...state,
            entireString: calculation == '0' ? entireString.concat(type) : `${calculation}/`,
            operator: '/',
            previousValue: calculation == '0' ? parseFloat(entireString) : calculation,
            currentValue: '0'
        }
    } else {
        return {
            ...state,
            entireString: calculation == '0' ? entireString.concat(type) : `${calculation}%`,
            operator: '%',
            previousValue: calculation == '0' ? parseFloat(entireString) : calculation,
            currentValue: '0'
        }
    }

}

const handleConcat = (symbol, state) => {

    const { entireString, operator, currentValue, calculation } = state;

    if (operator == null || calculation != '0') {
        return {
            ...state,
            calculation : '0',
            entireString: (symbol == '0' && entireString == '0' && entireString.length == 1) ? '0' : (entireString == '0' && entireString.length == 1) ? symbol : entireString + symbol,
            currentValue: (symbol == '0' && currentValue == '0' && currentValue.length == 1) ? '0' : (currentValue == '0' && currentValue.length == 1) ? symbol : currentValue + symbol
        }
    } else {
        return {
            ...state,
            calculation : '0',
            entireString: (entireString.length == 1) ? symbol : entireString + symbol,
            currentValue: (entireString.length == 1) ? symbol : currentValue + symbol
        }
    }

}

const handleEqual = (symbol, state) => {

    const { entireString, currentValue, previousValue, calculation, operator } = state;

    const prevValue = parseFloat(previousValue);
    const currValue = parseFloat(currentValue);

    if (operator == '+') {
        return {
            ...intialState,
            calculation: prevValue + currValue
        }
    }

    if (operator == '-') {
        return {
            ...intialState,
            calculation: prevValue - currValue
        }
    }

    if (operator == 'X') {
        return {
            ...intialState,
            calculation: prevValue * currValue
        }
    }

    if (operator == '/') {
        return {
            ...intialState,
            calculation: prevValue / currValue
        }
    }

    if (operator == '%') {
        return {
            ...intialState,
            calculation: prevValue % currValue
        }
    }

    if(operator == null){
        return {
            ...state
        }
    }
}

const RootReducer = (symbol, buttonAction, state) => {

    switch (buttonAction) {

        case ADD: return handleCalculation(symbol, state)

        case SUBSTRACT: return handleCalculation(symbol, state)

        case MULTIPLY: return handleCalculation(symbol, state)

        case DIVIDE: return handleCalculation(symbol, state)

        case MODULE: return handleCalculation(symbol, state)

        case EQUAL: return handleEqual(symbol, state)

        case CONCAT: return handleConcat(symbol, state)

        case CLEAR: return {
            ...intialState
        }

        case BACK: return handleBackward(state)

        case UNKNOWN: return {
            ...state
        }

        default: return intialState;
    }
}


export default RootReducer;