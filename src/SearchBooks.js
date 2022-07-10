import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
class SearchBooks extends Component {
    
    state = {
        query: '',
        booksResult: []
    }
    // update shelf in search page
    updateShelf = (value, book) => {
        // updata book shelf apear in search page
        this.setState((currentSatate) => ({
            booksResult: currentSatate.booksResult.map((bs) => {
              bs.id === book.id && (
                bs.shelf = value
              )
              return bs
            })
        }))
        // updata book shelf in server
        BooksAPI.update(book, value)        
        // get books apear in main page
        BooksAPI.getAll().then((books) => {
            this.setState((currentSatate) => ({
                booksResult: currentSatate.booksResult.map((bs) => {
                    books.map((b) => {
                        b.id === bs.id && (
                            bs = b
                        )
                        return b
                    })
                    return bs
                })
            }))
            return books
        }).then((books) => {
            // updata book shelf in main page
            this.props.setBooks(books)
        })
        
    }

    // show result depending on user input
    updateQuery = (query, books) => {
        this.setState(() =>  ({
            query: query
        }))
        
        if (query === '') this.setState(()=> ({booksResult: []}))
        else     
            BooksAPI.search(query)
            .then((booksSearch) => {
                if (Array.isArray(booksSearch))
                    this.setState(() => ({
                        booksResult: booksSearch.map((bs) => {
                            books.map((b) => {
                                b.id === bs.id && (
                                    bs = b
                                )
                                return b
                            })
                            return bs
                        })
                    }))
                else this.setState(()=> ({booksResult: []}))
            })
        
    }
    
    render() {
        const { booksResult, query } = this.state
        let showingResult
        if (query !== '') {
            showingResult = booksResult
        } else {
            showingResult = []
        }

        return (
            <div className="search-books">
                {/* input field */}
                <div className="search-books-bar">
                    {/* back to main */}
                    <Link 
                        to='/'
                        className="close-search"
                    >
                        <button></button>    
                    </Link>
                     {/* back to main */}

                    <div className="search-books-input-wrapper">
                        <input
                            type = "text" 
                            placeholder = "Search by title or author"
                            value= {this.state.query}
                            onChange = {(event) => this.updateQuery(event.target.value, this.props.books)}
                        />
                    </div>
                </div>
                {/* input field */}

                {/* list of results */}
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingResult.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        {book.imageLinks && (
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        )}
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(event) => this.updateShelf(event.target.value, book)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">
                                        {book.authors && (
                                            book.authors.map((author) => (
                                                <div key={author}>{author}</div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                {/* list of results */}
            </div>
        )
    }
}

export default SearchBooks;