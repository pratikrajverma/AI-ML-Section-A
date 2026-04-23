import React from 'react'
import { Route, Routes, useNavigate , Link, NavLink} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Dashboard from './Dashboard'

const Home = () => {

     const navigate = useNavigate()


  function aboutHandler(){
    navigate('/about')
  }


  function contactHandler(){
    navigate('/contact')
  }


  return (
    <div>
        <p>Home Page</p>
  {/* <p>About</p>
      <p>Contact</p>
      <p>Dashboard</p>   */}

    
        <Link to='/about'>About</Link><br/><br/>
        <Link to='/contact'>Contact</Link><br/><br/>
        <Link to='/dashboard'>Dashboard</Link><br/><br/>
        <Link to='/'>Home</Link><br/><br/>  

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

export default Home