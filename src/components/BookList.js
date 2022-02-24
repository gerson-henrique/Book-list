import React, {  useContext } from 'react'
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext'

export default function BookList() {
  const {books} = useContext(BookContext)
  const {isLightMode,light,dark} = useContext(ThemeContext)
  const theme = isLightMode ? light : dark;
  return (
    <div className='book-list' style={{color:theme.syntax, background:theme.bg}}>
        <ul>
          {books.map(book => {
            return(
              <li key={book.id} style={{ background: theme.ui}}>{book.title}</li>
            )
          })}
        </ul>
      </div>
  )
}
