import React from 'react';
import BookshelfSelector from './BookshelfSelector';

export default props => {
  const { book, changeShelf } = props;
  const backgroundImage = book.imageLinks ? book.imageLinks.thumbnail : null;

  return (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" 
           style={{
              width: 128, height: 192, 
              backgroundImage: `url(${backgroundImage})` 
           }}>
      </div>
      <div className="book-shelf-changer">
        <BookshelfSelector onShelf={book.shelf} changeShelf={changeShelf}/>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
      {book.authors &&
      <div className="book-authors">{book.authors.join(', ')}</div>}
    </div>
  );
};