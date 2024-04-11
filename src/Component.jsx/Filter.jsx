/* eslint-disable react/prop-types */
// import React, { useState } from 'react';

import { useState } from "react";

const Filter = ({ onFilter }) => {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const handleTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setFilterRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filterTitle, filterRating); // Call parent function with filters
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={filterTitle}
        onChange={handleTitleChange}
      />
      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        value={filterRating}
        onChange={handleRatingChange}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;