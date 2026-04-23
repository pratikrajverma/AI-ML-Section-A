import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { ThemeContext } from '../context/ThemeContextProvider'

const Card1 = () => {

  const { clickHandler } = useContext(ThemeContext)

  function btnHandler() {
    clickHandler()
  }
  return (
    <div style={{ backgroundColor: 'pink', height: '200px', width: '200px', margin: '10px', border: '2px solid ' }}>
      <p>Card1</p>
      <button onClick={btnHandler}>click</button>
      <GrandChild />
    </div>
  )
}

export default Card1