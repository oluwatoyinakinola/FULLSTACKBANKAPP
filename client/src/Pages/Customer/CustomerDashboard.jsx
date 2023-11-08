import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const linkStyle = {
  textDecoration: 'underline', 
};


const CustomerDashboard = () => {
  return (
    <div className="container mt-5">
      <h1>Customer Dashboard</h1>
      <Link to="/"  style={linkStyle}>Back to Homepage</Link>
      <br />
      <br />
      <Link to="../createtransaction"  style={linkStyle}>Transfers</Link>
      <br />
      <br />
      <Link to="/customer/signup"  style={linkStyle}>View Profile</Link>
      <br />
      <br />
      <Link to="/customer/login"  style={linkStyle}>Log Out</Link>
     
    </div>
  );
};

export default CustomerDashboard;
