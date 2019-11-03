import React, {useState} from 'react';
import Result from './components/Results.js';
import SearchFrom from './components/SearchForm.js';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasResults, setHasResults] = useState(false);

  function handleSearchQuery (query) {
    setSearchQuery(query);
    setHasResults(true);
  }

  return (
    <div className="App">
      <h1>Github Activity Viewer</h1>
      { !hasResults ?
        <SearchFrom
        getUserName={(searchQuery) => handleSearchQuery(searchQuery)}/>
        :
        <Result
          userName={searchQuery}
        />
      }
    </div>
  );
}

export default App;
