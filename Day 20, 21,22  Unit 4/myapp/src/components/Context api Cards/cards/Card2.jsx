import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

const Card2 = ( ) => {

    const { clickHandler} = useContext(ThemeContext)
    function btnHandler(){
        clickHandler()
    }
  return (
    <div style={{backgroundColor:'pink', height:'200px', width:'200px'  ,margin:'10px', border:'2px solid '}}>
        <p>Card2</p>
        <button onClick={btnHandler}>click</button>
    </div>
  )
}

export default Card2