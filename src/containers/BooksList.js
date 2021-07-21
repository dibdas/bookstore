import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removebook, changefilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const {
    removebook, books, changeFilter, filter,
  } = props;
  const handleFilterChange = (event) => {
    const filter = event.target.value;
    changeFilter(filter);
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
BooksList.defaultProps = {
  filter: 'All',
};
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
const mapStateToProps = (state) => ({
  books: state.bookreducer,
});
const mapDispatchToProps = (dispatch) => ({
  removebook: (Id) => { dispatch(removebook(Id)); },
  changeFilter: (filter) => { dispatch(changefilter(filter)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
