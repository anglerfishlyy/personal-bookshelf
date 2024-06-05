import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import '../App.css'; // Import the CSS file

const BookSearch = ({ onAdd }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setBooks(response.data.docs);
    } else {
      setBooks([]);
    }
  };

  const handleAddBook = (book) => {
    onAdd(book);
    setMessage(`${book.title} added to cart`);
    setTimeout(() => setMessage(''), 2000); // Reset after 2 seconds
  };

  return (
    <div>
      <h1 className="App">Book Search</h1>
      <div >
        <input className="inputbox"
          type="text"
          value={query}
           onChange={handleSearch}
            placeholder="Search for books"
        />
      </div>
      {message && <div className="message">{message}</div>}
      <div className="booksearch">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onAdd={handleAddBook} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
