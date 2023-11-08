import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth';

const Homepage = () => {
  return (
    <div className="container mt-5 sidebar">
      <h1>Welcome to the Bank Application</h1>
      <div className="mt-4">
        <Link to="/admin" className="btn btn-primary mx-2">
          Admin Dashboard
        </Link>
        <Link to="/customer" className="btn btn-primary mx-2">
          Customer Dashboard
        </Link>
        <Link to="/staff" className="btn btn-primary mx-2">
          Staff/Banker Dashboard
        </Link>
        <Link to="./login" className="btn btn-primary mx-2">
         Login Here
        </Link>
        {/* Add more links or buttons as needed */}
      </div>
    </div>
  );
};
const NotVerified = () => {
  return (
    <div className="container mt-5 sidebar">
      <h1>Welcome to the Bank Application</h1>
      <div className="mt-4">
     
        <Link to="./login" className="btn btn-primary mx-2">
         Login Here
        </Link>
        {/* Add more links or buttons as needed */}
      </div>
    </div>
  );


};

export default  withAuth(Homepage);


