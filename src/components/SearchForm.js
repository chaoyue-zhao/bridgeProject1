import React, {useState} from 'react';
import { connect } from "react-redux";
import {SET_HAS_RESULTS, UPDATE_USERNAME} from "../action";

function SearchForm ({updateUsername, setHasResults}) {

  const [searchQuery, setSearchQuery] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    setHasResults(true);
    updateUsername(searchQuery);
  }

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="SearchForm">
      <form
        action="#"
        className="SearchForm__form"
        onSubmit={handleFormSubmit}
      >
        <label
          htmlFor="useName"
          className="SearchForm__label"
        >
          Github Username:
        </label>
        <input
          type="text"
          name="userName"
          className="SearchForm__input"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          className="SearchForm__button"
          type="submit">
          Get User
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateUsername: (useName) => dispatch(UPDATE_USERNAME(useName)),
  setHasResults: () => dispatch(SET_HAS_RESULTS())
});

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);