// useEffect(function, [dependencies])

import React, { useState, useEffect } from 'react'

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log('EVENT LISTENER ADDED')
  }, [])

  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <>
      <p>Window Width: {width} px</p>
      <p>Window Heihgt: {height} px</p>
    </>
  )
}

export default MyComponent
