
import React from 'react'
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToogle from './components/ThemeToogle';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeContextProvider>
      <Navbar />
      <BookList />
      <ThemeToogle />
      </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
