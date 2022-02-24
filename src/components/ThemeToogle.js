import React, {  useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export default function ThemeToogle() {
  const {toogleTheme} = useContext(ThemeContext)
  return (
    <button onClick={ toogleTheme }>Toogle the Theme</button>
  )
}
