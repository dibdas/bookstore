import React from 'react';
import propTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book, handleRemoveBook }) => (
  <>

    <div className="row ">
      <div className="card">
        <div className="card_left">
          <div className="category_card col-3">
            {book.category}
          </div>
          <div className="title_card col-3">
            {book.title}
          </div>
        </div>
        <button className="card__link" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
      </div>
    </div>
  </>
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
