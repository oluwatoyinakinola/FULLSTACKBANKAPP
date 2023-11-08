import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLoginPage = () => {
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
      const response = await axios.post('http://localhost:4000/api/admin/login', formData);

      if (response.status === 200) {
        // Admin login successful, redirect to the admin dashboard
        history.push('/admin/dashboard');
      } else {
        // Admin login failed, handle the error (display a message, etc.)
        console.error('Admin login failed');
      }
    } catch (error) {
      console.error('Admin login error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email"  className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password"  className="form-label">Password</label>
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
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
      <p className="mt-3">Don't have an account? <Link to="/admin/signup">Sign up</Link></p>
    </div>
  );
};

export default AdminLoginPage;
