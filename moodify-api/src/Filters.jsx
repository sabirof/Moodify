import React from 'react';

function Filters({ handleGenreChange, handleYearChange, handlePopularityChange }) {
  return (
    <div className="filter-container">
      <select onChange={handleGenreChange}>
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
        <option value="53">Thriller</option>
        {/* Add more genre options here */}
      </select>
      <select onChange={handleYearChange}>
        <option value="">All Years</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        {/* Add more year options here */}
      </select>
      <select onChange={handlePopularityChange}>
        <option value="">All Popularity</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
        {/* Add more popularity options here */}
      </select>
    </div>
  );
}

export default Filters;
