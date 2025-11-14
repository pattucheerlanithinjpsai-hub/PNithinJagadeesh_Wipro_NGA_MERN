import React from "react";
import PropTypes from "prop-types";

const BookCard = ({ book, onSelect }) => {
  return (
    <div className="card p-3 mb-3 shadow-sm">
      <h5>{book.title}</h5>
      <p className="text-muted">by {book.author}</p>
      <p>Rs {book.price}</p>
      <button className="btn btn-primary" onClick={() => onSelect(book)}>
        View Author
      </button>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default BookCard;
