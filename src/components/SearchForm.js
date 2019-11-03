import React, {useState } from 'react';

function SearchForm (props) {
  const [searchQuery, setSearchQuery ] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchQuery);
    console.log('SEARCH_QUERY', searchQuery);
    props.getUserName(searchQuery);
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

export default SearchForm;