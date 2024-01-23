import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

const DarkLightToggle = ({ customButtonStyles = {} }) => {
    const { isDarkMode, toggleTheme, themes } = useContext(ThemeContext);

    useEffect(() => {
        const themeStyles = isDarkMode ? themes.dark : themes.light;
        for (const [key, value] of Object.entries(themeStyles)) {
            document.body.style[key] = value;
        }
    }, [isDarkMode, themes]);

    const buttonStyle = {
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        ...customButtonStyles
    };

    return (
        <button style={buttonStyle} onClick={toggleTheme}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default DarkLightToggle;
