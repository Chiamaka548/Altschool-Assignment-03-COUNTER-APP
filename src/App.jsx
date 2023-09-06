import { useState } from 'react'
import React from 'react'
import { ChevronUp, ChevronsUp, RotateCcw, Hash, ChevronDown, ChevronsDown } from 'react-feather'

const app = () => {
  const [count, setCount] =useState(0)

  const plusOne = () => {
    setCount (count + 1)
  }
  const plusTen = () => {
    setCount (count + 10)
  }
  const reset = () => {
    setCount (0)
  }
  const random = () => {
    setCount (Math.floor(Math.random() * 100)+ 1)
  }
  const minusTen = () => {
    setCount (count - 10)
  }
  const minusOne = () => {
    setCount (count - 1)
  }

  return (
    <section className="container">
      <div className="value">
        <small>Current value:</small>
        <h1 className="count">{count}</h1>
      </div>
      <div className='buttons'>
        <button onClick={plusOne}><ChevronUp/></button>
        <button onClick={plusTen}><ChevronsUp/></button>
        <button onClick={reset}><RotateCcw/></button>
        <button onClick={random}><Hash/></button>
        <button onClick={minusTen}><ChevronsDown/></button>
        <button onClick={minusOne}><ChevronDown/></button>
      </div>
    </section>
  )
}

export default app