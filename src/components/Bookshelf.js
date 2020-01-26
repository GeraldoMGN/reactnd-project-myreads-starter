import React from 'react';
import Book from './Book';

export default class BookShelf extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book></Book>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}