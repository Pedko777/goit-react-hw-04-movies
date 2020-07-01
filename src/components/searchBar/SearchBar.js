import React, { Component } from 'react';
import styles from './searchBar.module.css';

const {
    Searchbar,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput,
  } = styles;

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {inputValue} = this.state;
    if (inputValue.trim()) {
        this.props.onSubmit(inputValue)
    }
    this.setState({inputValue: ""})
  };

  render() {
    return (
      <div className={Searchbar}>
        <form className={SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            required
            placeholder="Search..."
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit" className={SearchFormButton}>
            <span className={SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
