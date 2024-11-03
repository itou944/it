// src/pages/SearchResults.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchNotes } from '../services/api';


const SearchResults = () => {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('q');

  useEffect(() => {
    searchNotes(query).then(setResults);
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {results.map(note => (
        <div key={note.title}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
