import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function generateRandomId(length = 8) {
  let randomId = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}
function AdminPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); 

 
  const handleCreateAdmin = async (e) => {
    e.preventDefault();

    try {
      const adminid =  generateRandomId();

      

      const data = {
        id: adminid,
        name: name,
        email: email,
        password: password,
      };

      console.log(data);

      const response = await axios.post('http://localhost:4500/api/admin/new', data);

      setSuccessMessage('Admin Created Successfully!!!');
      console.log('New admin created:', response.data);

    } catch (err) {
      setError('Failed to create admin');
      console.error(err);
    }
  };

  return (
    <div  style={{ backgroundColor: 'lightseagreen', minHeight: '100vh', padding: '20px', color: 'white' }}>
      <h1>Create a New Admin</h1>
      <div>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <form onSubmit={handleCreateAdmin}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <br/>

          <button style={{ backgroundColor: 'tomato', color: "white" }} type="submit">Create Admin</button>
          {error && <p>Error: {error}</p>}

        </form>

        <br />
        <br />
        <Link to="/admin">
          <Button variant="success">Back to Admin Dashboard</Button>
        </Link>

      </div>
    </div>
  );
}

export default  AdminPage;
