import React from 'react';

export default props => {
  const handleChange = event =>
    props.changeShelf(event.nativeEvent.target.value);

  return (
    <select defaultValue={props.onShelf || 'none'} onChange={handleChange}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
}