import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(themeContext) =>{
      
      const {isLightMode, light, dark} = themeContext;
      const theme = isLightMode ? light : dark;
      
      return (<div className='book-list' style={{color:theme.syntax, background:theme.bg}}>
        <ul>
        <li style={{ background: theme.ui}}>p1</li>
        <li style={{ background: theme.ui}}>p2</li>
        <li style={{ background: theme.ui}}>p3</li>
        </ul>
      </div>)
    }}
      </ThemeContext.Consumer>
    )
  }
}
