import React, { Component } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext'

export default class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
      <ThemeContext.Consumer>{(themeContext) =>{
      
      const {isAuthenticated, toogleAuth} = authContext;
      const {isLightMode, light, dark} = themeContext;
      const theme = isLightMode ? light : dark;
      
      return (<nav style={{background:theme.ui, color:theme.syntax}}>
       <h1> Context App</h1>
       <div onClick={toogleAuth}>
         {isAuthenticated ? 'Loged in' : 'Loged out'}
       </div>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
      </nav>)
}}
      </ThemeContext.Consumer>)}
      </AuthContext.Consumer>
    )
  }
}
