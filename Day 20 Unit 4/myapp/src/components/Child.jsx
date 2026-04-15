import React, { useEffect, useState } from 'react'

const Child = () => {
    const[first, setFirst] = useState(0)
    const[second, setSecond] = useState(0)

    
    
    useEffect(()=>{
        
        // console.log('welcome to side Effect')


        let interval = setInterval(()=>{
            console.log('interval')
        }, 1000)


        return(()=>{
            clearInterval(interval)
        })

    
    // fetch('').then(()=> )
    },[])


    // setInterval(() => {
    //     console.log('hello')
    // }, 1000);
  
    
    
    function firstHandler(){
        console.log('first')
        setFirst(first + 1)
    }


    function secondHandler(){
        console.log('second')
        setSecond(second - 1)
    }

  return (
    <div>
        <h1>This is child content</h1>

        <p>{first}</p>

        <p>{second}</p>

        <button onClick={firstHandler}>First</button>

        <button onClick={secondHandler}>Second</button>

    </div>
  )
}

export default Child