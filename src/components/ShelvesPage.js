import React from 'react';
import ListBooksHeader from './ListBooksHeader';
import { Link } from 'react-router-dom';
import BookShelf from './Bookshelf';

export default class ShelvesPage extends React.Component{
  render() {
    return (
      <div className="list-books">
        <ListBooksHeader />
        <div className="list-books-content">
          <BookShelf title='Currently Reading' />
          <BookShelf title='Want to Read' />
          <BookShelf title='Read' />
        </div>
        <Link className="open-search" to="/search">
          Add a book
        </Link>
      </div>
    );
  }
}