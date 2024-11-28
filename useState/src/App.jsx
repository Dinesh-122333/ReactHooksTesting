import { useState } from 'react'
import img1 from './assets/minpath.jpg'
import './App.css'

function App() {
  var [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  function onIncreamenter(){
    setCount(count + 1)
  }
  function onDecreamter(){
    setCount(count - 1)
  }
  return (
    <>
      <div className="">
        <h1>The incrementer:</h1>
          <button onClick={onIncreamenter}>+</button>
          <h3>{count}</h3>
          <button onClick={onDecreamter}>-</button>
      </div>

      <div className="">
        <h1>Image Shower:</h1>
        <button onClick={() => setVisible(!visible)}>show</button>
        {visible && <img src={img1}></img>}

      </div>
      
    </>
  )
}

export default App
