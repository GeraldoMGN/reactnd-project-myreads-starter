import React from 'react';
import ListBooksHeader from './ListBooksHeader';
import { Link } from 'react-router-dom';
import BookShelf from './Bookshelf';

export default class ShelvesPage extends React.Component {
  state = {
    loaded: false
  }
    
  categorizeBooks = books => books.reduce((categorizedBooks, book) => {
      categorizedBooks[book.shelf] = (categorizedBooks[book.shelf] || []).concat(book);
      return categorizedBooks;
  }, {});

  render() {
    const {currentlyReading = [], wantToRead = [], read = []} = this.categorizeBooks(this.props.books);

    return (
      <div className="list-books">
        <ListBooksHeader />
        <div className="list-books-content">
          <BookShelf title='Currently Reading' 
                     books={currentlyReading} 
                     updateBooks={this.props.updateBooks} 
          />
          <BookShelf title='Want to Read' 
                     books={wantToRead} 
                     updateBooks={this.props.updateBooks} 
          />
          <BookShelf title='Read' 
                     books={read} 
                     updateBooks={this.props.updateBooks} 
          />
        </div>
        <Link className="open-search" to="/search">
          Add a book
        </Link>
      </div>
    );
  }
}