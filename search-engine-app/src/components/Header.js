import React from 'react';
import './Header.css';
import {
  SearchBar
} from '../components.js';

const Header = (props) => {
  return (
    <div className="app-header">
       <h2>Search Engine</h2>
       <SearchBar
         input={props.input}
         onInput={props.onInput}
         searchUrl={props.searchUrl}
         error={props.error}
         />
   </div>
  )
}

export default Header
