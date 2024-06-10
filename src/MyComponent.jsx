import React, { useState, useEffect, useRef } from 'react'

function MyComponent() {
  const ref = useRef(null)

  console.log(ref.current)

  useEffect(() => {
    console.log('COMPONENT RENDERED')
    console.log(inputRef)
  })

  function handleClick() {
    ref.current++
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <input />
    </div>
  )
}

export default MyComponent
