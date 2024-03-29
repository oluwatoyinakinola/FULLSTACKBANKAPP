import React, { useState } from 'react';
import { createCustomer } from '../../Utils/apiCalls'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';

const SignUpForm = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate()

  const handleCreation = async (e) => {
    e.preventDefault();
    try {
      const customerData = {
        name: Name,
        email: email,
        password: password,
      
      };

      const response = await createCustomer(customerData);
     

      if (response.error) {
        setError(response.error);
      } else {

       // Setting the success message and reset the form

        setSuccessMessage('Customer Saved Successfully !!!');
        setName('');
        setEmail('');
        setPassword('');
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setError('Internal server error');
    }
  };

  return (
    <div className="container mt-5" style={{ background: 'steelblue', padding: '20px', color: "gold" }}>
      <h2>Customer Sign Up/Create</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleCreation}>

        <div className="mb-3">

          <label htmlFor="Name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
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
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
