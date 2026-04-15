import React from 'react'
import Child from './components/Child'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {

 

  return (
    <div>
      {/* <Child/> */}
 
      {/* <p>About</p>
      <p>Contact</p>
      <p>Dashboard</p>   */}

 
        <Link to='/about'>About</Link><br/><br/>
        <Link to='/contact'>Contact</Link><br/><br/>
        <Link to='/dashboard'>Dashboard</Link><br/><br/>

        <Link to='/'>Home</Link>
        

        <Routes>

          <Route path='/about'  element={<About/>}/>

          <Route path='/contact' element={<Contact/>}/>


          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>

 


    </div>
  )
}

export default App