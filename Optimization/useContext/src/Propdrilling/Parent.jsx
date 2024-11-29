import React, { createContext } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

export const MyContext = createContext(); // Correct export of context

export default function Parent() {
  const user = { name: 'Dinesh', age: '21' };
  return (
    <>
      <h1>This is the useContext example</h1>
      <h1>Parent Component</h1>
      <MyContext.Provider value={user}>
        <Child1 />
        <Child2 />
      </MyContext.Provider>
    </>
  );
}
