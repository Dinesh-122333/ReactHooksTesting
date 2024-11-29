import React, { useContext } from 'react'
import { ThemeContext } from './Parentcolor'

export default function Screen1() {
    const {theme, toggler} = useContext(ThemeContext);
  return (
    <>
    <div className="">
        <h1>The Screen1: </h1>
        <p>Current Theme: {theme}</p>
        <button onClick={toggler}>toggle</button>
    </div>
    
    </>
  )
}
