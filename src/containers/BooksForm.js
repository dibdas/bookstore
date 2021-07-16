/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { createbook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Horror',
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

    handleSubmit=(event) => {
      event.preventDefault();
      this.setState({
        title: '',
        category: 'Kids',
      });
    };

    render() {
      const categories = ['Action', 'Biography', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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
