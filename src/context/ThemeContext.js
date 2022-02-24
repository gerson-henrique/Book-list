import React, { createContext, Component } from 'react'

export const ThemeContext = createContext();

 class ThemeContextProvider extends Component {
   state = {
    isLightMode: true,
    light: { syntax: '#555', ui:'#ddd', bg:'#eee'},
    dark: { syntax: '#ddd', ui:'#333', bg:'#555'},
   }
   toogleTheme = () => {
     const {isLightMode} = this.state
     this.setState({
       isLightMode: !isLightMode,
     })
   }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toogleTheme: this.toogleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
