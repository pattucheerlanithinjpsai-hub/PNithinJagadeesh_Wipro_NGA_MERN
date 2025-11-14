import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onSelect, viewMode }) => {
  return (
    <div className={viewMode === "grid" ? "row" : ""}>
      {books.map((book) => (
        <div key={book.id} className={viewMode === "grid" ? "col-md-4" : ""}>
          <BookCard book={book} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
