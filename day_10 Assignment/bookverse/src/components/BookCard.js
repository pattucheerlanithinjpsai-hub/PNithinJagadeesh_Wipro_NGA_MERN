import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ title, author, price }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
};

export default BookCard;
