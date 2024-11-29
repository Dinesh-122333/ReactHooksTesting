import React, { useContext } from 'react';
import { MyContext } from './Parent'; // Import the correct context

export default function Child1() {
  const user = useContext(MyContext); // Use the correct context

  return (
    <>
      <h1>This is Child1</h1>
      <h3>Welcome, bro: {user.name}</h3>
      <h3>Age: {user.age}</h3>
    </>
  );
}
