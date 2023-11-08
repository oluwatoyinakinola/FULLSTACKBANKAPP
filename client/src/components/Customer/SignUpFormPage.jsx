import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpFormPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/signup', formData);
      // Handle the sign-up success, e.g., redirect to login page
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Customer Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        <p className="mt-3">
        Already have an account? <Link to="/login">Log in</Link>
        </p>
        </div>
  );
};

export default SignUpFormPage;
