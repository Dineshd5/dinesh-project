// src/components/Book.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';

const Book = ({ book }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [coverImageUrl, setCoverImageUrl] = useState(book.coverImageUrl);

  const updateBook = () => {
    db.collection('books').doc(book.id).update({
      title,
      author,
      description,
      coverImageUrl
    });
    setEditing(false);
  };

  const deleteBook = () => {
    db.collection('books').doc(book.id).delete();
  };

  return (
    <div>
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <input value={coverImageUrl} onChange={(e) => setCoverImageUrl(e.target.value)} />
          <button onClick={updateBook}>Save</button>
        </>
      ) : (
        <>
          <h3>{book.title}</h3>
          <p>by {book.author}</p>
          <p>{book.description}</p>
          <img src={book.coverImageUrl} alt={book.title} />
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={deleteBook}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Book;
