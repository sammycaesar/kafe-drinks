import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className='search-container'>
    <div className='search-box'>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  </div>
);
