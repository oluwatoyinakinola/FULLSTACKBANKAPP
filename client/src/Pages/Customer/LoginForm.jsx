import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // sending a POST request to your server to authenticate the user
    
    const response = await fetch('/api/customer/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      // Authentication successful and redirecting the user to their dashboard 

      console.log('Login successful');
    } else {
      
      console.log('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Customer Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit"  className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
