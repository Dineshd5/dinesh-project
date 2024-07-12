// src/components/Register.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Registered:', userCredential);
      })
      .catch((error) => {
        console.error('Error registering:', error);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
