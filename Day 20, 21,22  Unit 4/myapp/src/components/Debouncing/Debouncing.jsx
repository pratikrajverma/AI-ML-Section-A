import React, { useEffect, useState } from 'react'

const Debouncing = () => {
    const [data, setData] = useState('')

    useEffect(()=>{
        let t = setTimeout(() => {
                console.log(data)
                console.log('api calling')
        }, 1000);

        return(()=>{
                clearTimeout(t)
        })
    },[data])

    function changeHandler(e){
        // console.log(e.target.value)
        setData(e.target.value)
    }

  return (
    <div>
        <input onChange={changeHandler}/>
        
    </div>
  )
}

export default Debouncing