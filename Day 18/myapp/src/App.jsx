 import React, { useState } from 'react'
import Reportcard from './components/Reportcard'
 


const App = () => {
  //  let count = true
   const[count, setCount] = useState(true)
  function changeHandler(){
      if(count==true){
      //  count = false
        setCount(false)
      }else{
        // count = true
        setCount(true)
      }

        console.log(count)
  }
 
   return (
     <div style={{backgroundColor: count ?  'red' : 'lime', height:'100vh'}}>
        {/* <Reportcard/> */}
        {/* 
        <h1>This is react</h1>

        <h1>Welcome to Javascript</h1> */}


        {/* {
            count == true ? <h1>This is react</h1> : <h1>Welcome to Javascript</h1>
        } */}


        {
          count && <h1>This is react</h1>
        }  



        {
          !count  && <h1>Welcome to Javascript</h1>
        }


        <button onClick={changeHandler}>Change</button>
     </div>
   )
 }
 
 export default App