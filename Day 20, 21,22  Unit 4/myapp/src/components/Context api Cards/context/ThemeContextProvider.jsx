import React, { createContext, useState } from 'react'
const ThemeContext = createContext()
const ThemeContextProvider = ({children}) => {

        const[dark, setDark] = useState(false)

        function clickHandler(){
            setDark(!dark)
        }

        let value = {
            dark, clickHandler
        }

  return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
  )
}

export { ThemeContextProvider , ThemeContext}