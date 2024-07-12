// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import Book from '../Book';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    db.collection('books').onSnapshot((snapshot) => {
      const booksData = [];
      snapshot.forEach((doc) => booksData.push({ ...doc.data(), id: doc.id }));
      setBooks(booksData);
    });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
