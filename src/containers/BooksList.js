/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class BooksList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
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
      </div>

    );
  }
}

export default BooksList;
