import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book }) => (

  <div className="row">
    <div className="col-3">
      <h5>{book.ID}</h5>
    </div>
    <div className="col-3">
      <h5>{book.title}</h5>
    </div>
    <div className="col-3">
      <h5>{book.category}</h5>
    </div>
  </div>
);

Book.propTypes = {
  book: propTypes.string.isRequired,
};

export default Book;
