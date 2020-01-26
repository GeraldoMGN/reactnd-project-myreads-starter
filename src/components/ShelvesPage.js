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

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books,
          loaded: true
        })
      });
  }

  categorizeBooks = books => {
    return books.reduce((categorizedBooks, book) => {
      categorizedBooks[book.shelf] = (categorizedBooks[book.shelf] || []).concat(book);
      return categorizedBooks;
    }, {});
  }

  render() {
    const {currentlyReading = [], wantToRead = [], read = []} = this.categorizeBooks(this.state.books);

    return (
      <div className="list-books">
        <ListBooksHeader />
        <div className="list-books-content">
          <BookShelf title='Currently Reading' books={currentlyReading} />
          <BookShelf title='Want to Read' books={wantToRead} />
          <BookShelf title='Read' books={read} />
        </div>
        <Link className="open-search" to="/search">
          Add a book
        </Link>
      </div>
    );
  }
}