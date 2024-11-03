// src/components/NoteSearch.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NoteSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search notes..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default NoteSearch;
