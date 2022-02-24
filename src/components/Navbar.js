import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
 const {isLightMode, light,dark} = useContext(ThemeContext)
 const {isAuthenticated, toogleAuth} = useContext(AuthContext)
 const theme = isLightMode ? light : dark;
  return (
    <nav style={{background:theme.ui, color:theme.syntax}}>
       <h1> Context App</h1>
       <div onClick={toogleAuth}>
         {isAuthenticated ? 'Loged in' : 'Loged out'}
       </div>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
      </nav>
  )
}
