import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    // bookShelf : [{cuccurent: []}]
    books: [],

  }

  componentDidMount(){
    BooksAPI.getAll().then((res)=>{
        // console.log('res', res);
        this.setState({ books:res});
        // console.log('books[1].keys', Object.keys(this.state.books[1]));
        // console.log('books[1].keys', this.state.books[1].readingModes);
        // console.log('books[1].keys', this.state.books[1].imageLinks);
        // console.log('books[1].keys', this.state.books[6].shelf);


        // shelf: currentlyReading  wantToRead read  
        // readingModes
        // imageLinks => {smallThumbnail}

    })
  }


  onShelfChange = (book, newStatus)=>{

    let newBooks =  this.state.books;
    let i;
    for(i in newBooks){
      if (newBooks[i].id === book.id){
        break;
          // todo: change database
      }
    }
    newBooks[i].shelf = newStatus;
    // newBooks[i].shelf = 
    // change a parameter of one element in an array
    console.log('newBooks[i]', newBooks[i]);
    console.log('newStatus', newStatus);


    BooksAPI.update(newBooks[i], newStatus).then(

          (res) => {
              console.log(res);
              this.setState({ books: newBooks})
          }

    )
  
    //  console.log('newBooks' , newBooks);
    //  BooksAPI.getAll().then(
    //    res=>console.log(res)
    //  )
   
  }

  

  render() {

    let currentlyReading = [], wantToRead = [], read = [], none=[];
    let {books} =  this.state;

    for(let book of books){
        switch(book.shelf){
          case 'currentlyReading':
            currentlyReading.push(book);
            break;
          case 'wantToRead':
              wantToRead.push(book);
            break;
          case 'read':
              read.push(book);
            break;
          case 'none':
              none.push(book);
            break;
          default:
            break; 
        }
    }

    // console.log('currentlyReading', currentlyReading);



    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf onShelfChange={this.onShelfChange} shelfName="Currently Reading" books={currentlyReading} />
                <BookShelf onShelfChange={this.onShelfChange} shelfName="Wanted Reading" books={wantToRead} />
                <BookShelf onShelfChange={this.onShelfChange} shelfName="Read" books={read} />
            </div>

            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
