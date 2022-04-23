import React from "react";

import "./search-box.styles.css";
import Search from "../../images/search-icon.svg";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className='search-container'>
    <div className='search-box'>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button type='submit' className='search-button' alt='search button'>
        <img className='search-icon' src={Search} alt='Search Button' />
      </button>
    </div>
  </div>
);
