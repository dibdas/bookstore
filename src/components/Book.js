import React from 'react';
import propTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-bootstrap';

const Book = ({ book, handleRemoveBook }) => (
  <div className="row my-5 py-3 book justify-content-between align-items-center mt-3 bg-white border border-1 ">
    <div className="col-4 d-flex flex-column align-items-start pl-3">
      <div className="d-flex flex-column align-items-start  ">
        <h6>{book.category}</h6>
        <h4>{book.title}</h4>
        <p style={{ color: '#0290ff' }}>Author</p>
      </div>
      <div className=" ">
        <button style={{ color: '#0290ff' }} className="btn" type="button">Comments</button>
        <button style={{ color: '#0290ff' }} className="btn" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
        <button style={{ color: '#0290ff' }} className="btn" type="button">Edit</button>
      </div>
    </div>
    <div className="col-3">
      <div className="oval-2 d-flex ">
        <div className="circular col-4">
          <CircularProgressbar value={69} />
        </div>
        <div className="col-4 text-center d-flex flex-column align-items-center">
          <span className="text-percentage d-block fs-1">{`${23}%`}</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
    <div className="col-2 d-flex flex-column align-items-start ">
      <p className="chapter-current">CURRENT CHAPTER</p>
      <p>CHAPTER 16</p>
      <button style={{ backgroundColor: '#0290ff', color: 'white' }} type="button" className="btn w-100">UPDATE PROGRESS</button>
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
