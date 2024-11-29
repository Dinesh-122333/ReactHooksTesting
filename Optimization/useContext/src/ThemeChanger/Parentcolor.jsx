import React, { useState } from 'react'
import { createContext } from 'react'
import Screen1 from './Screen1';
import Screen2 from './Screen2';

export const ThemeContext = createContext();
export default function Parentcolor() {
    const[theme, setTheme] = useState('light');
  return (
    <>
    <ThemeContext.Provider value={{theme, toggler: () => setTheme(theme === 'light' ? 'dark' : 'light')}}>
        <Screen1/>
        <Screen2/>
    </ThemeContext.Provider>
    </>
  )
}
