import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const userData = JSON.parse(localStorage.getItem('userData')) || {};

    return (
        <Context.Provider value={userData}>
            {children}
        </Context.Provider>
    )
}