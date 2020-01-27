import React from 'react';
import BookGrid from './BookGrid';

export default class BookShelf extends React.Component {
  render() {
    const { title, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookGrid books={books} updateBooks={this.props.updateBooks}/>
        </div>
      </div>
    );
  }
}