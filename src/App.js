// src/App.js

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <div>
        {/* Header for navigation */}
        <header>
          <nav>
            <Link to="/">Home</Link> | <Link to="/search">Search</Link>
          </nav>
        </header>

        {/* Main content area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
