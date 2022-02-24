
import React from 'react'
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToogle from './components/ThemeToogle';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <Navbar />
      <BookList />
      <ThemeToogle />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
