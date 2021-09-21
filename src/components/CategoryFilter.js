import React from 'react';
import propTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <select className="form-select pr-3" id="category" onChange={handleFilterChange}>
        {categories.map((value) => (
          <option
            key={value}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
CategoryFilter.propTypes = {
  handleFilterChange: propTypes.func.isRequired,

};
export default CategoryFilter;
