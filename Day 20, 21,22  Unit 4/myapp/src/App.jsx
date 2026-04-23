import React, { useContext, useState } from 'react'
import Child from './components/useEffect/Child'
import About from './components/React Router/pages/About'
import Contact from './components/React Router/pages/Contact'
import Dashboard from './components/React Router/pages/Dashboard'
import { Form, Link, NavLink, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom'
import FormBox from './components/React Form/FormBox'
 
import Card1 from './components/Context api Cards/cards/Card1'
import Card2 from './components/Context api Cards/cards/Card2'
import Card3 from './components/Context api Cards/cards/Card3'
import { ThemeContext } from './components/Context api Cards/context/ThemeContextProvider'
import Card from './components/API Call/Card'
import ProductList from './components/API Call/ProductList'
import ParentCard from './components/Context api Cards/cards/ParentCard'
import Home from './components/React Router/pages/Home'

const App = () => {

  






  return (
    <div  >
      {/* <Child/> */}

    





     {/* api calling examples.............. */}
      {/* <ProductList/> */}



    {/* context api examples..... */}

      {/* <ParentCard/> */}
      

    {/* React Form................. */}
      {/* <FormBox/> */}



      {/* React Router.............. */}

        {/* <Home/> */}



      {/* Use effect hook using....... */}

        {/* <Child/> */}






    {/* examples for types of components rendering...... */}

      {/* <Card3 dark={dark} />



            <Card3>
              {dark}
            </Card3> */}




    </div>
  )
}

export default App