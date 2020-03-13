import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div id="searchBar">
      <input
          type="text"
          name="input"
          className="input"
          autoComplete="off"
          value={props.input}
          onChange={(event) => props.onInput(event.target.value)}
          >
      </input>
      <small className="err-msg">{props.error}</small>
      <button className="search-btn" onClick={() => props.searchUrl()}>Search</button>
    </div>
  )
}

export default SearchBar;
