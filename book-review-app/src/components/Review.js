// src/components/Review.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';

const Review = ({ review, bookId }) => {
  const [editing, setEditing] = useState(false);
  const [rating, setRating] = useState(review.rating);
  const [comment, setComment] = useState(review.comment);

  const updateReview = () => {
    db.collection('books').doc(bookId).collection('reviews').doc(review.id).update({
      rating,
      comment
    });
    setEditing(false);
  };

  const deleteReview = () => {
    db.collection('books').doc(bookId).collection('reviews').doc(review.id).delete();
  };

  return (
    <div>
      {editing ? (
        <>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          <button onClick={updateReview}>Save</button>
        </>
      ) : (
        <>
          <p>{`Rating: ${review.rating}`}</p>
          <p>{review.comment}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={deleteReview}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Review;
