import React from 'react';
import SearchBar from './SearchBar'
import BookGrid from './BookGrid';
import * as BooksAPI from '../BooksAPI'

export default class SearchPage extends React.Component {
  state = {
    query: '',
    searchBooks: []
  }

  updateQuery = query => {
    this.setState({query});
    query === '' 
      ? this.setState({books: []}) 
      : this.updateSearchBooks(query);
  };

  getShelfById = id => {
    const book = this.props.shelfBooks.find(book => book.id === id);
    return book ? book.shelf : null;
  };

  // The method below adds the shelf value of the books in shelfs
  // to the books in the search result
  addShelfToBooks = books => books.error ? [] 
    : books.map(book => {
      book.shelf = this.getShelfById(book.id);
      return book;
    });

  updateSearchBooks = query =>
    BooksAPI.search(query).then(books => 
      this.setState({ searchBooks: this.addShelfToBooks(books)}));

  render() {
    return (
      <div className="search-books">
        <SearchBar updateQuery={this.updateQuery}/>
        <div className="search-books-results">
          {this.state.query !== '' && 
            <BookGrid books={this.state.searchBooks} 
                      updateBooks={this.props.updateShelfBooks} />}
        </div>
      </div>
    );
  }
}