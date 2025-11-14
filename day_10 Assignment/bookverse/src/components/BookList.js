import React from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

const BookList = ({ books, viewMode }) => {
  return (
    <div className={`book-list ${viewMode}`}>
      {books.map(book => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default BookList;
