import React from 'react';
import Results from './components/Results.js';
import SearchForm from './components/SearchForm.js';
import { connect } from "react-redux";

function App({hasResults}) {
  return (
      <div className="App">
      <h1>Github Activity Viewer</h1>
      { !hasResults ? <SearchForm/> : <Results/> }
    </div>
  );
}

const mapStateToProps = state => ({
  hasResults: state.hasResults
});

export default connect(
  mapStateToProps
)(App);
