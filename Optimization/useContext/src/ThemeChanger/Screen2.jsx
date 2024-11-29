import React, { useContext } from 'react'
import { ThemeContext } from './Parentcolor'

export default function Screen2() {
    const {theme, toggler} = useContext(ThemeContext);
  return (
    <>
    <div className="">
        <h1>The Screen2: </h1>
        <p>Current Theme: {theme}</p>
        <button onClick={toggler}>toggle</button>
    </div>
    
    </>
  )
}
