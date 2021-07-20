import React from 'react';
import propTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select className="form-select" id="category" onChange={handleFilterChange}>
      {categories.map((value) => (
        <option
          key={value}
          value={value}
        >
          {value}
        </option>
      ))}
    </select>
  );
};
CategoryFilter.propTypes = {
  handleFilterChange: propTypes.func.isRequired,

};
