import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from './components/SearchPage';
import ShelvesPage from './components/ShelvesPage';
import { Route } from 'react-router-dom';

export default class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/" component={ShelvesPage} />
      </div>
    );
  }
}
