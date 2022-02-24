import React, { Component, createContext } from 'react'

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = { isAuthenticated: false }

  toogleAuth = () => {
    const {isAuthenticated} = this.state
    this.setState({isAuthenticated: !isAuthenticated})
  }
  render() {
    return (
<AuthContext.Provider value = {{...this.state, toogleAuth: this.toogleAuth}}>
{this.props.children}
</AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
