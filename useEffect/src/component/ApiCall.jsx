import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function ApiCall(){
    const[data, setData] = useState([])

    useEffect(() => {
        async function datafetcher(){
            const response = await fetch('https://dogapi.dog/api/v2/breeds');
            const result = await response.json();
            setData(result.data);
        } 
        datafetcher()
        
    }, [])
  return (
    <div>
        <>
      <div className="">
        <h1>Show the dog breed name: </h1>
        <ul>
        {data.map((item) => (
        <li key={item.id}>{item.attributes.name}</li>
        ))}
        </ul>
        
      </div>
    </>
    </div>
  )
}
