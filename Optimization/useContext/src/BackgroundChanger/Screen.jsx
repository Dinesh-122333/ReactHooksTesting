import React, { useContext } from 'react';
import { ThemeChanger } from './ParentColor';

export default function Screen() {
    const { theme, toggler } = useContext(ThemeChanger);

    // Map theme names to color values
    const backgroundColor = theme === 'light' ? '#fff' : '#000';
    const textColor = theme === 'light' ? '#000' : '#fff';

    return (
        <>
            <div style={{ backgroundColor: backgroundColor, color: textColor, padding: '20px' }}>
                <h1>Color Changer Screen</h1>
                <button onClick={toggler}>Toggle Theme</button>
            </div>
        </>
    );
}
