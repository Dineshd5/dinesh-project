// src/components/ReviewList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import Review from './Review';

const ReviewList = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    db.collection('books').doc(bookId).collection('reviews').onSnapshot((snapshot) => {
      const reviewsData = [];
      snapshot.forEach((doc) => reviewsData.push({ ...doc.data(), id: doc.id }));
      setReviews(reviewsData);
    });
  }, [bookId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review} bookId={bookId} />
      ))}
    </div>
  );
};

export default ReviewList;
