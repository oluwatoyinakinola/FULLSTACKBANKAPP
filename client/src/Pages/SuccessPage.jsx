import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuccessPage = () => {
  return (
    <div className="container mt-5">
      <h2>Successful Action</h2>
      <p>Your action was completed successfully.</p>
      <p>Here, you can provide details about the successful action or any next steps for the user.</p>
      
      <Link to="/" className="btn btn-primary mt-3">
        Back to Homepage
      </Link>
    </div>
  );
};

export default SuccessPage;
