import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import ShelvesPage from './components/ShelvesPage';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

export default class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateBooks = () => BooksAPI.getAll()
    .then(books => { this.setState({
        books,
        loaded: true
      })
    });

  componentDidMount = () => this.updateBooks();

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() =>
          <SearchPage shelfBooks={this.state.books} updateShelfBooks={this.updateBooks}/>}
        />
        <Route exact path="/" render={() => 
          <ShelvesPage books={this.state.books} updateBooks={this.updateBooks} />}
        />
      </div>
    );
  }
}
