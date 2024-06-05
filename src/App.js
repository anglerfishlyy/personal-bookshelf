import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BookSearch from './pages/BookSearch';
import MyBookshelf from './pages/MyBookshelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    return JSON.parse(localStorage.getItem('bookshelf')) || [];
  });

  const handleAddBook = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Search Books</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BookSearch onAdd={handleAddBook} />} />
          <Route path="/bookshelf" element={<MyBookshelf />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
