import React, { useContext } from 'react'
import {MyContext} from './Parent'

export default function Child2() {
    const user2 = useContext(MyContext);
  return (
    <>
        <h1>This the Child2 component: </h1>
        <h3>The name is : {user2.name}</h3>
        <h3>The age is : {user2.age}</h3>
    </>
  )
}
