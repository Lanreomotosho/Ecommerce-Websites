import React, { createContext, useContext, useState} from "react";

const DarkmodeContext = createContext();

const DarkModeProvider = ({  children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <DarkmodeContext.Provider value={{ darkMode, toggleDarkMode}} >
            {children}
        </DarkmodeContext.Provider>
    );
};

const useDarkMode = () => {
    const context = useState(DarkmodeContext);
    if(!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider')
    }
    return context;
}

export { DarkModeProvider, useDarkMode};




