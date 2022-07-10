import React from 'react'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  
  state = {
    books: [],
  }

  componentDidMount() {
    // get data from server
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books
      }))
    })
  }
  
  // change the book selfs for main page
  updateShelf = (value, book) => {
    this.setState((currentSatate) => ({
      books: currentSatate.books.map((b) => {
        b.id === book.id && (
          b.shelf = value
        )
        return b
      })
    }))
    // update book shelf in server
    BooksAPI.update(book, value)
  }
  setBooks = (newBooks) => {
    this.setState(() => ({
      books: newBooks
    }))
  }

  render() {
    return (
      <div className="app">
        {/* main page */}
        <Route exact path='/' render={ () => (
          <BookList 
            books={this.state.books}
            update={this.updateShelf}
          />    
        ) }/>
        
        {/* search page */}
        <Route exact path='/search' render={ () => (
          <SearchBooks
            books = {this.state.books}
            setBooks = {this.setBooks}
          />      
        ) }/>

      </div>
    )
  }
}

export default BooksApp;