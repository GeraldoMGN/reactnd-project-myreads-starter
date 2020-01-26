import React from 'react';
import Book from './Book'

//TODO: This will be responsable for updating the books
export default class BookContainer extends React.Component {
  render() {
    return <Book book={this.props.book} />
  }
}