import { createContext, useReducer, useState } from "react";
import { ADD, SUBSTRACT, MODULE, MULTIPLY, DIVIDE, BACK, CLEAR, UNKNOWN } from './ActionTypes';

export const RootContext = createContext();

const intialState = {
    upperString : '',
    bottomString : '12334444+',
    calculation : 0,
    isCalculated : false
}

const RootReducer = (state = intialState,action) => {

    switch (action.type) {
    
        case ADD : return {
            ...state,
            bottomString : action.payload
        }

        case SUBSTRACT : return {
            ...state,
            bottomString : action.payload
        }

        case MULTIPLY : return {
            ...state,
            bottomString : action.payload
        }

        case DIVIDE : return {
            ...state,
            bottomString : action.payload
        }

        case CLEAR : return {
            ...state,
            upperString : '',
            bottomString : '',
            calculation : 0,
            isCalculated : false
        }

        case BACK : return {
            ...state,
            bottomString : state.bottomString.slice(0,state.bottomString.length-1)
        }

        default : return state;
    }
}

export const RootContextProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [globalState, dispatch] = useReducer(RootReducer,intialState);

    return (
        <RootContext.Provider value={{ isDarkMode, setIsDarkMode, globalState, dispatch }} >
            {children}
        </RootContext.Provider>
    )
}