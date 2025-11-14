import React, { useRef, useState } from "react";
import { books } from "./data";
import BookList from "./components/BookList";
import AuthorInfo from "./components/AuthorInfo";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // Grid/List toggle
  const [search, setSearch] = useState(""); // Controlled search input

  const searchRef = useRef(null); // Ref for focusing input

  const focusSearch = () => searchRef.current.focus();

  // Filter books based on search
  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">BookVerse</h2>

      {/* Search Input */}
      <input
        type="text"
        ref={searchRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search books..."
        className="form-control mb-3"
      />
      <button onClick={focusSearch} className="btn btn-dark mb-3 me-2">
        Focus Search Input
      </button>

      {/* Toggle View Mode */}
      <button
        onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
        className="btn btn-secondary mb-3"
      >
        Switch to {viewMode === "grid" ? "List" : "Grid"} View
      </button>

      {/* Book List */}
      <BookList
        books={filteredBooks}
        onSelect={setSelectedAuthor}
        viewMode={viewMode}
      />

      {/* Author Info */}
      {selectedAuthor && <AuthorInfo author={selectedAuthor} />}
    </div>
  );
}

export default App;
