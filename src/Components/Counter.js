import React, { useContext, useState } from 'react'
import { CounterContext } from '../Context/CounterContext'

function Counter() {
    const {setCount , count} =useContext(CounterContext);
  return (
    <>
      <button onClick={()=>{
        setCount(count+1);
      }}>Counter</button>
    </>
  )
}

export default Counter
