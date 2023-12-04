import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      const response = await axios.post('http://localhost:4500/api/signup', formData);
      // Handle response if needed
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <Container className="mt-5 bg-light p-4 , minHeight: '100vh'">
      <h2 className="mb-4">Customer Sign Up</h2>
      <form onSubmit={handleSignUp}>
        
        <Button type="submit" className="btn btn-primary">
          Sign Up
        </Button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
         
    </Container>
  );
};

export default SignUpFormPage;
