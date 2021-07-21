import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="row">
    <div className="col-3">
      <h5>{book.Id}</h5>
    </div>
    <div className="col-3">
      <h5>
        title:
        {book.title}
      </h5>
    </div>
    <div className="col-3">
      <h5>
        category:
        {book.category}
      </h5>
    </div>
    <button className="card__link" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
  </div>
);
Book.propTypes = {
  book: propTypes.shape({
    Id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: propTypes.func.isRequired,
};
export default Book;
