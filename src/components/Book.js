import React from 'react';
import BookshelfSelector from './BookshelfSelector';

export default props => {
  const book = props.book;

  return (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
      <div className="book-shelf-changer">
        <BookshelfSelector />
      </div>
    </div>
  <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors.join(', ')}</div>
  </div>
)};