import React, { useEffect, useState } from 'react';

const MyBookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBooks);
  }, []);

  return (
    <div>
      <h1 className="App">My Bookshelf</h1>
      
      <div className="booksearch">
         {bookshelf.map((book, index) => (
          <div key={index} className='mybookshelf'>
             <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          </div>
        ))}
       </div>
    </div>
  );
};

export default MyBookshelf;
