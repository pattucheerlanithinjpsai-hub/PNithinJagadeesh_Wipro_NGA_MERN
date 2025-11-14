import React, { useState } from 'react';
import "./styles/App.css";
import BookList from "./components/BookList";
import ViewToggle from "./components/ViewToggle";
import booksData from "./assets/booksData";



function App() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = (mode) => {
    setViewMode(mode);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1> BookVerse</h1>
      <p>Welcome to BookVerse! Discover our featured collection of timeless classics and modern favorites.</p>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ViewToggle currentView={viewMode} onToggle={handleToggle} />
      </div>

      <BookList books={filteredBooks} viewMode={viewMode} />
    </div>
  );
}

export default App;
