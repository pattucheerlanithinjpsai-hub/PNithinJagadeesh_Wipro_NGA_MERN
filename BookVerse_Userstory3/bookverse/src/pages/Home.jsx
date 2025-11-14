import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookStore from '../flux/BookStore';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(BookStore.getBooks());

    const update = () => setBooks([...BookStore.getBooks()]);
    BookStore.subscribe(update);
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.map(book => (
        <div key={book.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          <p>Price: Rs {book.price}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
      <Link to="/add-book">Add New Book</Link>
    </div>
  );
};

export default Home;
