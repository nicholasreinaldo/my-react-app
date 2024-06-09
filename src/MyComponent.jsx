import React, { useState, useEffect } from 'react'

function MyComponent() {
  const [count, setCount] = useState(0)
  count[(color, setColor)] = useState('Green')

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  function addCount() {
    setCount((c) => c + 1)
  }

  function substractCount() {
    setCount((c) => c - 1)
  }

  function changeColor() {
    setColor((c) => (c === 'green' ? 'red' : 'green'))
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={substractCount}>Substract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default MyComponent
