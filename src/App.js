
import React from 'react'
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToogle from './components/ThemeToogle';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <AuthContextProvider>
      <ThemeContextProvider>
      <Navbar />
      <BookList />
      <ThemeToogle />
      </ThemeContextProvider>
      </AuthContextProvider>
      </BookContextProvider>
    </div>
  );
}

export default App;
