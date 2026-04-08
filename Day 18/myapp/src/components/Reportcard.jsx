import React, { useState } from 'react'
import students from '../data'
import '../App.css'

const Reportcard = () => {

  const[studentData, setStudentData] = useState(students)
  console.log(students)
  // let name = 'pratik'
  // let marks = 90

  console.log(studentData.length)

  let studentObj = {
    name:'',
    marks:''
  }

  function submitHandler(event){
    event.preventDefault()

    studentObj.name = event.target.name.value
    studentObj.marks = event.target.marks.value

    console.log(studentObj)


    // students.push(studentObj)
    
    // console.log(students)
    
    setStudentData((preData)=>{
        return [...preData, studentObj]
    })
     
  }


  let isLogin = false

  let TotalStudents = studentData.length

  let PassedStudent = studentData.filter((item)=>{
    return item.marks >= 40
  }).length


  return (
    <div>
      <h1>Report Card</h1>

      <p>Total Students : {TotalStudents}</p>

      <p>Passed students :  {PassedStudent}</p>
      <p>Failed students :  {TotalStudents - PassedStudent}</p>
      <p>Avg. Marks : </p>


      {/* <p>Name :   {data[0].name}  </p>
      <p>Marks :  {data[0].marks}</p>

      <p>Name :   {data[1].name}  </p>
      <p>Marks :  {data[1].marks}</p>

      <p>Name :   {data[2].name}  </p>
      <p>Marks :  {data[2].marks}</p>

      <p>Name :   {data[3].name}  </p>
      <p>Marks :  {data[3].marks}</p> */}

      <form onSubmit={submitHandler}>
          <input placeholder='name'  name='name'/>
          <input placeholder='marks' name='marks'/>
          <button type='submit'>Add</button>
      </form>

     <div  id='reportCard'>
       {
        studentData.map((item,index)=>{
          return <div key={index}>
            <p>Name : {item.name}</p>
            <p>Marks : {item.marks}</p>
          </div>
        })

      }
     </div>




{/* 
      {
        
          isLogin ?   <button>Login</button> : <button>Logout</button>
      } */}

      {/* {
        isLogin && <button>Login</button>
      }

     
     {
        !isLogin && <button>Logout</button>
     } */}
      


    </div>
  )
}

export default Reportcard