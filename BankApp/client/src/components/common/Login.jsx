import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/login', formData);
      console.log('Login successful!', response.data);
      // Redirect to the dashboard or user-specific page after successful login
      history.push('/dashboard'); // Replace with the appropriate page
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" >Log In</button>
      </form>
      <p className="mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default Login;
