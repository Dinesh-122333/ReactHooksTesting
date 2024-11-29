import React, { useState, createContext } from 'react';
import Screen from './Screen';

export const ThemeChanger = createContext();

export default function ParentColor() {
    const [theme, setTheme] = useState('light');
  
    const toggler = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <h1>Background Color Changer: </h1>
            <ThemeChanger.Provider value={{ theme, toggler }}>
                <Screen />
            </ThemeChanger.Provider>
        </>
    );
}
