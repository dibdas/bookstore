
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removebook } from '../actions/index';
import Book from '../components/Book';

const BooksList = (props) => {
  const { removebook, books } = props;

  const handleRemoveBook = (id) => {
    removebook(id);
  };

  return (
    <div>
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
      {books.map((book) => 
        <Book
          book={book}
          key={book.Id}
          handleRemoveBook={handleRemoveBook}
        />
      )}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.bookreducer.books,
});

const mapDispatchToProps = (dispatch) => ({
  removebook(Id) { dispatch(removebook(Id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
