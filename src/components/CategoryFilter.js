/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: '',
      filter: [],
    };
    handleFilterChange(event) {
        this.setState({
            input:event.target.value
        })
    }
  }
}
CategoryFilter.propTypes = {
  handleFilterChange: propTypes.func.isRequired

};

Book.propTypes = {
  book: propTypes.string.isRequired,
  handleRemoveBook: propTypes.func.isRequired,
};
