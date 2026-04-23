import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

const GrandChild = () => {

  const { clickHandler } = useContext(ThemeContext)
  function btnHandler() {
    // props.clickHandler()
    clickHandler()
  }

  return (
    <div style={{ backgroundColor: 'red', height: '100px', width: '100px' }}>
      <p>GrandChild</p>
      <button onClick={btnHandler}>click</button>
    </div>
  )
}

export default GrandChild