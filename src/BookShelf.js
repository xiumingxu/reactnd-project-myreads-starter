import React, { Component } from 'react';

class BookShelf extends Component{

    render(){
        let {shelfName, books} = this.props;

        // console.log(Object.keys(books[0]));
        if(books[0]){
           console.log('books' , Object.keys(books[0]));
           console.log('books.imageLinks' , books[0].imageLinks);
           console.log('books.imageLinks.thumbnail' , books[0].imageLinks.thumbnail);
    }
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
             
              <ol className="books-grid">
            
             
              {books.map(book => ( 
                    <li key={book.title}>
                        <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}>
                              <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                          </div>
                          </div>
                          <div className="book-title">{book.title}</div>

                           <div className="book-authors">{book.authors}</div>
                        
                        </div>

                    </li>

            ))}
            </ol>
            </div>
            </div>
                
        );

    }
}

export default BookShelf ;