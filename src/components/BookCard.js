import React, { useState } from 'react';
import '../App.css'; // Import the CSS file

const BookCard = ({ book, onAdd }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAdd(book);
     setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
        <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      <button
          onClick={handleAdd}
        className={isAdded ? 'added' : ''}
          disabled={isAdded}
      >
        {isAdded ? 'Added' : 'Add to Cart'}
       </button>
    </div>
  );
};

export default BookCard;
