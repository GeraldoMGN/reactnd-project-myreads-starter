import React from 'react';
import Book from './Book';
import * as BooksAPI from '../BooksAPI'

export default class BookContainer extends React.Component {
  changeShelf = toShelf => {
    BooksAPI.update(this.props.book, toShelf)
      .then(this.props.updateBooks);
  };

  render() {
    return <Book book={this.props.book} changeShelf={this.changeShelf} />
  }
}