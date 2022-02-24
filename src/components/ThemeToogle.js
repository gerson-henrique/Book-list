import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class ThemeToogle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(themeContext) => {
      const  { toogleTheme } = themeContext
      return(
      <button onClick={ toogleTheme }>Toogle the Theme</button>
      )}}
      </ThemeContext.Consumer>
      )
  }
}
