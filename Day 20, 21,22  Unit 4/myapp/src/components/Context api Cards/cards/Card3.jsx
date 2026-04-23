import React from 'react'

const Card3 = (  ) => {
    function btnHandler(){
        // props.clickHandler()
    }

    // console.log('child',children)
  return (
    <div style={{backgroundColor:'pink', height:'200px', width:'200px' ,margin:'10px', border:'2px solid '}}>
        <p>Card3</p>
        <button onClick={btnHandler}>click</button>
    </div>
  )
}

export default Card3