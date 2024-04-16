import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

function Display() {
    const {count} =useContext(CounterContext);
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default Display
