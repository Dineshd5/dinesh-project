// src/components/AddBook.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');

  const addBook = () => {
    db.collection('books').add({
      title,
      author,
      description,
      coverImageUrl
    });
    setTitle('');
    setAuthor('');
    setDescription('');
    setCoverImageUrl('');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cover Image URL"
        value={coverImageUrl}
        onChange={(e) => setCoverImageUrl(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
