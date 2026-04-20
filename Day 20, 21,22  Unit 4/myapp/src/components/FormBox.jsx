import React, { useState } from 'react'

const FormBox = () => {


//     let value = 'pratik';

//   let key = name;

//   let obj = {
//     [key]: value
//   }
  
//  console.log(obj)

  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    mobile: '',
    password: '',
    gender: '',
    dsa:false,
    python:false,
    webdev:false,
    aiml:false

  })


  function changeHandler(e) {
    // console.log('first')
    //  console.log(e.target.value)
    // console.log(e.target.name)
    // console.log(e.target.checked)
 
    const {name, type, checked, value} = e.target
    // console.log({
    //     [e.target.name] : e.target.value
    //   })




    setFormData((preItem) => {
      return {
        ...preItem,
          // [e.target.name]: e.target.type === 'checkbox'? e.target.checked: e.target.value

          [name]: type === 'checkbox'? checked: value
       
      }
    })
  }





  function submitHandler(e){
    e.preventDefault()
    console.log(formData)
  }


  return (
    <div>
      <h1>React Form </h1>

      <form onSubmit={submitHandler}>
        <input onChange={changeHandler} type='text' placeholder='firstname' name='firstname' />
        <input onChange={changeHandler} type='email' placeholder='Email' name='email' />
        <input onChange={changeHandler} type='password' placeholder='Password' name='password' />
        <input onChange={changeHandler} type='text' placeholder='Mobile' name='mobile' /><br />
        <label>
          Gender :
        </label>
        <div>
          <label>Male</label>
          <input onChange={changeHandler} value='male' type='radio' name='gender' /><br />
          <label>Female</label>
          <input onChange={changeHandler} value='female' type='radio' name='gender' />
        </div>


        <div>
          <label>Skills :</label>
          <label>DSA</label>
          <input onChange={changeHandler} name='dsa' type='checkbox'/>
          <label>Python</label>
          <input onChange={changeHandler} name='python' type='checkbox'/>
          <label>Web dev</label>
          <input onChange={changeHandler} name='webdev' type='checkbox'/>
          <label>AIML</label>
          <input onChange={changeHandler} name='aiml' type='checkbox'/>

        </div>

        <button>Submit</button>

      </form>

    </div>
  )
}

export default FormBox