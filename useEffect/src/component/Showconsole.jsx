import React, { useEffect, useState } from 'react'

export default function () {
    const[count, setCount] = useState(0);

    useEffect (() => {
        console.log(count)
    }, [count])


  return (
    <div>
        <h1>Count Incrementer</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  )
}
