import React from 'react';
import propTypes from 'prop-types';
// import '../styles/Book.css';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const Book = ({ book, handleRemoveBook }) => (
  <div className="row my-5 py-3 book justify-content-between align-items-center mt-3 bg-white">
    <div className="col-4 d-flex flex-column align-items-start">
      <div className="first d-flex flex-column nalign-items-start">
        <h6>{book.category}</h6>
        <h4>{book.title}</h4>
        <p>Author</p>
      </div>
      <div className="second">
        <button className="btn" type="button">Comments</button>
        <button className="btn" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
        <button className="btn" type="button">Edit</button>
      </div>
    </div>
    <div className="col-3">
      <div className="oval-2">
        <div className="circular">
          <CircularProgressbar value={69} />
        </div>
        <div className="mx-3">
          <span className=" text d-block">{`${69}%`}</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
    <div className="col-3 d-flex flex-column align-items-start">
      <p className="chapter">CURRENT CHAPTER</p>
      <p>CHAPTER 16</p>
      <button style={{ backgroundColor: '#0290ff', color: 'white' }} type="button" className="btn">UPDATE PROGRESS</button>
    </div>
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
