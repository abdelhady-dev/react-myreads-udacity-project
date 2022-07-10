import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BookList extends Component {

    

    render() {
        const { books, update } = this.props

        return (    
            <div className='list-books'>
        
                {/* header */}
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                {/* header */}

                {/* list */}
                <div className='list-books-content'>
                    
                    <div>
                        
                        {/* Currently Reading */}
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map( (book) => (
                                        book.shelf === "currentlyReading" && (
                                            <li key={book.id}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        {book.imageLinks && (
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                        )}
                                                        <div className="book-shelf-changer">
                                                            <select value={book.shelf} onChange={(event) => update(event.target.value, book)}>
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
                                        )
                                    ))}  
                                    
                                </ol>
                            </div>
                        </div>
                        {/* Currently Reading */}

                        {/* Want to Read */}
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map( (book) => (
                                        book.shelf === "wantToRead" && (
                                            <li key={book.id}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        {book.imageLinks && (
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                        )}  
                                                        <div className="book-shelf-changer">
                                                            <select value={book.shelf} onChange={(event) => update(event.target.value, book)}>
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
                                        )
                                    ))}  
                                    
                                </ol>
                            </div>
                        </div>
                        {/* Want to Read */}
                
                        {/* Read */}
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map( (book) => (
                                        book.shelf === "read" && (
                                            <li key={book.id}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        {book.imageLinks && (
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                        )}
                                                        <div className="book-shelf-changer">
                                                            <select value={book.shelf} onChange={(event) => update(event.target.value, book)}>
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
                                        )
                                    ))}  
                                    
                                </ol>
                            </div>
                        </div>
                        {/* Read */}

                    </div>

                </div>
                {/* list */}
                
                {/* open search */}
                <div className="open-search">
                    
                        <Link
                            to='/search'
                        >
                            <button>Add a book</button>
                        </Link>
                    
                </div>
                {/* open search */}
                
            </div>
        )
    }
}

export default BookList;