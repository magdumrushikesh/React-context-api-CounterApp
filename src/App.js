import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Display from './Components/Display';
import { CounterContext } from './Context/CounterContext';
import { useState } from 'react';

function App() {
  const [count, setCount] =useState(0);
  return (
    <div className="App">
      <CounterContext.Provider value={{count, setCount}}>
      <Counter/>
      <Display/>
      </CounterContext.Provider>

    </div>
  );
}

export default App;
