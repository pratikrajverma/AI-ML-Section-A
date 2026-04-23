import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'
import Card1 from './Card1'
import Card2 from './Card2'

const ParentCard = () => {
      const { dark, clickHandler } = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: dark ? 'black' : 'lime' }}>
        <button onClick={()=>clickHandler()}>click</button>
        <p>ParentCard</p>
        
        <Card1 />
      <Card2 />
    </div>
  )
}

export default ParentCard