import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import ApiCall from './component/ApiCall'
import Showconsole from './component/Showconsole'

function App() {
  return (
    <>
    <Showconsole/>
    <ApiCall/>
    </>
  )
}

export default App