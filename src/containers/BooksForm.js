/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createbook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      title: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      category: event.target.value,
    });
  }

    handleSubmit=(state) => {
      const { createbook } = this.props;
      const currentTitle = state.title;
      const currentCategory = state.input;
      createbook(state.title, state.category);
      return {
        input: '',
        title: state.title.concat(currentTitle),
        category: state.category.concat(currentCategory),
      };
    };

    render() {
      const categories = ['Action', 'Biography', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

      return (
        <div className="container">
          <h3>Add book</h3>

          <form className="form-label">
            <input value={this.state.title} onChange={this.handleChange} type="text" className="form-control" placeholder="bookname" />
            <select className="form-select" id="category" onChange={this.handleChange}>
              {categories.map((value) => (
                <option
                  key={value}
                  value={value}
                >
                  {value}
                </option>
              ))}
            </select>
            <button type="submit" onClick={this.handleSubmit}> Submit</button>
          </form>
        </div>
      );
    }
}

BooksForm.propTypes = {

  createbook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook(title, category) { dispatch(createBook(title, category)); },
});

export default connect(mapDispatchToProps)(BooksForm);
