import { useState } from 'react';
import './App.css';
import Parent from './Propdrilling/Parent';
import Parentcolor from './ThemeChanger/Parentcolor';
import ParentColor from './BackgroundChanger/ParentColor';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParentColor/>
      <Parentcolor/>
      <Parent />
    </>
  );
}

export default App;
