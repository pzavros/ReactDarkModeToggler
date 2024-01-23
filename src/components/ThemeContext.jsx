import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, lightTheme, darkTheme }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true';
    });

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const themes = { light: lightTheme, dark: darkTheme };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};
