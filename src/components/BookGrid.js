import React from 'react';
import BookContainer from './BookContainer'

export default class BookGrid extends React.Component {

  render() {
    return (
      <ol className="books-grid">
        {this.booksGridItems()}
      </ol>
    );
  }

  booksGridItems = () => this.props.books.map(book =>
    <li key={book.id}>
      <BookContainer book={book} updateBooks={this.props.updateBooks}/>
    </li>
  )
}