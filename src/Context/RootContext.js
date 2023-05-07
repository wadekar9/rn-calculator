import { createContext, useReducer, useState } from "react";

export const RootContext = createContext();

export const RootContextProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <RootContext.Provider value={{ isDarkMode, setIsDarkMode }} >
            {children}
        </RootContext.Provider>
    )
}