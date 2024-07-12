// src/components/AddReview.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';

const AddReview = ({ bookId }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const addReview = () => {
    db.collection('books').doc(bookId).collection('reviews').add({
      rating,
      comment
    });
    setRating(1);
    setComment('');
  };

  return (
    <div>
      <h2>Add Review</h2>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
      />
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addReview}>Add Review</button>
    </div>
  );
};

export default AddReview;
