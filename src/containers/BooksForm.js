/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

        <label className="form-label">
          <input type="text" className="form-control" placeholder="ame" aria-label="Username" aria-describedby="basic-addon1" />
        </label>
        <select className="form-select">
          <option>Action</option>
          <option>Biography</option>
          <option>History</option>
          <option>Horror</option>
          <option>Kids</option>
          <option>Learning</option>
          <option>Sci-Fi</option>
          <option>Action</option>
        </select>
      </div>
    );
  }
}

export default BooksForm;
