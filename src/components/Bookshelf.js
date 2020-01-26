import React from 'react';
import BookContainer from './BookContainer';

export default class BookShelf extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.booksGrid()}
          </ol>
        </div>
      </div>
    );
  }

  booksGrid = () => this.props.books.map(book =>
    <li key={book.id}>
      <BookContainer book={book} />
    </li>
  )
}