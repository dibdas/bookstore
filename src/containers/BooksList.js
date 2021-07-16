/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';
import { removebook } from '../actions/index';
import Book from '../components/Book';

const BooksList = (props)=> {
  const {removebook, books} =props

  handleRemoveBook = (book) => {
    removebook(book.Id);
  }

  render() {
   
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Book Id</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Title</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Category</h3>
          </div>
        </div>
        {books.map((book) => (
          <Book
            book={book}
            key={book.Id}
            handleRemoveBook={handleRemoveBook}
          />
        )) }
      </div>

    );
  }
}
BooksList.propTypes = {
  books: propTypes.arrayOf(propTypes.object).isRequired,
  removebook: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};

export default BooksList;
