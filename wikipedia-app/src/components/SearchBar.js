import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div id="searchBar">
      <input
          type="text"
          name="query"
          className="query-input"
          value={props.query}
          autoComplete="off"
          onChange={(event) => props.search(event.target.value)}
          >
      </input>
      {props.loading ? (
        <div className="loading">Loading ...</div>
      ) : props.hasError ? (
        <ul>
          <li>
            <i>{props.message}</i>
          </li>
        </ul>
      ) : (
        <ul>
          {props.data.length > 0 && props.data.map((search, i) => (
            <li key={i} onClick={() => props.select(i)}>
              {search.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar;
