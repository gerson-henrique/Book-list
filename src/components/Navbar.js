import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(themeContext) =>{
      
      const {isLightMode, light, dark} = themeContext;
      const theme = isLightMode ? light : dark;
      
      return (<nav style={{background:theme.ui, color:theme.syntax}}>
       <h1> Context App</h1>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
      </nav>)
}}
      </ThemeContext.Consumer>
    )
  }
}
