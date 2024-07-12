// src/App.js
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ReviewList from './components/ReviewList';
import AddReview from './components/AddReview';

function App() {
  return (
    <div>
      <h1>Book Review Application</h1>
      <Register />
      <Login />
      <AddBook />
      <BookList />
      {/* Pass bookId to ReviewList and AddReview */}
      {/* Replace 'bookId' with actual book ID */}
      <ReviewList bookId="bookId" />
      <AddReview bookId="bookId" />
    </div>
  );
}

export default App;
