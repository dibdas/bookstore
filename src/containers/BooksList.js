import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removebook } from '../actions/index';
import Book from '../components/Book';

const BooksList = (props) => {
  const {
    removebook, books, filter,
  } = props;

  const handleRemoveBook = (id) => {
    removebook(id);
  };
  return (
    <>
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
BooksList.defaultProps = {
  filter: 'All',
};
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
const mapStateToProps = (state) => ({
  books: state.bookreducer,
  filter: state.filterreducer,
});
const mapDispatchToProps = (dispatch) => ({
  removebook: (Id) => { dispatch(removebook(Id)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
