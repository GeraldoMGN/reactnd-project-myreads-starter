import React from 'react';
import SearchBar from './SearchBar'
import BookGrid from './BookGrid';
import * as BooksAPI from '../BooksAPI'

export default class SearchPage extends React.Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = query => {
    this.setState({query});
    this.updateBooks(query);
  };

  updateBooks = query => {
    BooksAPI.search(query)
      .then(books => {
        books = books.error ? [] : books;
        this.setState({books});
      });
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar updateQuery={this.updateQuery}/>
        <div className="search-books-results">
          <BookGrid books={this.state.books} />
        </div>
      </div>
    );
  }
}