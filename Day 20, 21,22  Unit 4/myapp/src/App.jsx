import React from 'react'
import Child from './components/Child'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

const App = () => {

   const navigate = useNavigate()


  function aboutHandler(){
    navigate('/about')
  }
 

  function contactHandler(){
    navigate('/contact')
  }

  return (
    <div>
      {/* <Child/> */}
 
      {/* <p>About</p>
      <p>Contact</p>
      <p>Dashboard</p>   */}

{/*  
        <Link to='/about'>About</Link><br/><br/>
        <Link to='/contact'>Contact</Link><br/><br/>
        <Link to='/dashboard'>Dashboard</Link><br/><br/>
        <Link to='/'>Home</Link><br/><br/> */}


        <NavLink to='/about'> About </NavLink><br/><br/>
        <NavLink to='/contact'> Contact </NavLink><br/><br/>
        <NavLink to='/dashboard'> Dashboard </NavLink><br/><br/>



        <button   onClick={aboutHandler}>About</button>
        <button   onClick={contactHandler}>contact</button>
        <button>  Dashboard   </button>

   

        <Routes>

          <Route path='/about'  element={<About/>}/>

          <Route path='/contact' element={<Contact/>}/>


          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>

 


    </div>
  )
}

export default App