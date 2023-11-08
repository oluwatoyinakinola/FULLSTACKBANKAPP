import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const StaffLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Send a POST request to authenticate staff/banker
    // Replace 'YOUR_API_ENDPOINT' with your actual endpoint
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      // Authentication successful, redirect to staff dashboard
      history.push('/staff/dashboard');
    } else {
      // Authentication failed, handle error
      console.log('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Staff/Banker Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username"  className="form-label" >Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

export default StaffLoginPage;
