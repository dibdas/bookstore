import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removebook } from '../actions/index';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const {
    removebook, books, changefilter, filter,
  } = props;

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    changefilter(filter);
  };

  const handleRemoveBook = (id) => {
    removebook(id);
  };

  return (
    <>
      <CategoryFilter handleFilterChange={(event) => handleFilterChange(event)} />

      <div className="container">

        {books.filter((book) => book.category === filter || filter === 'All').map((book) => (
          <Book
            book={book}
            key={book.Id}
            handleRemoveBook={handleRemoveBook}
          />
        ))}
      </div>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
  changefilter: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.bookreducer,
  filter: state.changeFilterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removebook(Id) { dispatch(removebook(Id)); },

});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
