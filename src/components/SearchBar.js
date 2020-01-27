import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
  handleChangeQuery = event => 
    this.props.updateQuery(event.target.value);

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" 
                placeholder="Search by title or author"
                onChange={this.handleChangeQuery}/>
        </div>
      </div>
    );
  }
}