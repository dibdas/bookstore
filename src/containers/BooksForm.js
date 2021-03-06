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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  }

    handleSubmit=(e) => {
      e.preventDefault();
      const { createBook } = this.props;
      const { title, category } = this.state;
      createBook(title, category);
    };

    render() {
      const categories = ['Action', 'Biography', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
      const { title } = this.state;
      return (
        <div className="container border-top pt-4 mb-2 ">
          <h3>Add book</h3>
          <div className="row d-flex justify-content-between ">
            <div className="col-8">
              <input value={title} onChange={(e) => this.handleTitleChange(e)} type="text" className="form-control col-3" placeholder="bookname" />
            </div>
            <div className="col-2">
              <select className="form-select col-3" id="category" onChange={(e) => this.handleCategoryChange(e)}>
                <option value="select">Select a category</option>
                {categories.map((value) => (
                  <option
                    key={value}
                    value={value}
                  >
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end ">
              <button style={{ backgroundColor: '#0290ff', color: 'white' }} onClick={this.handleSubmit} type="button" className=" px-5 btn ">ADD BOOK </button>
            </div>
          </div>
        </div>

      );
    }
}
BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  createBook: (title, category) => { dispatch(createbook(title, category)); },
});
export default connect(null, mapDispatchToProps)(BooksForm);
