import React from 'react';
import ListBooksHeader from './ListBooksHeader';
import { Link } from 'react-router-dom';
import BookShelf from './Bookshelf';
import * as BooksAPI from '../BooksAPI';

export default class ShelvesPage extends React.Component {
  state = {
    books: [],
    loaded: false
  }

  updateBooks = () => BooksAPI.getAll()
    .then(books => { this.setState({
        books,
        loaded: true
      })
    });

  componentDidMount = () => this.updateBooks();
    
  categorizeBooks = books => books.reduce((categorizedBooks, book) => {
      categorizedBooks[book.shelf] = (categorizedBooks[book.shelf] || []).concat(book);
      return categorizedBooks;
  }, {});

  render() {
    const {currentlyReading = [], wantToRead = [], read = []} = this.categorizeBooks(this.state.books);

    return (
      <div className="list-books">
        <ListBooksHeader />
        <div className="list-books-content">
          <BookShelf title='Currently Reading' 
                     books={currentlyReading} 
                     updateBooks={this.updateBooks} 
          />
          <BookShelf title='Want to Read' 
                     books={wantToRead} 
                     updateBooks={this.updateBooks} 
          />
          <BookShelf title='Read' 
                     books={read} 
                     updateBooks={this.updateBooks} 
          />
        </div>
        <Link className="open-search" to="/search">
          Add a book
        </Link>
      </div>
    );
  }
}