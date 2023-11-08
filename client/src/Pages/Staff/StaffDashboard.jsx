import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const linkStyle = {
  textDecoration: 'underline', 
};


const StaffDashboard = () => {
  return (
    <div className="container mt-5"> 
      <h1>Staff/Banker Dashboard</h1>
      <Link to="/" style={linkStyle}>Back to Homepage</Link>
      <br />
      <br />
      <button className="btn btn-primary">Staff/Banker Action</button>
      <br />
      <br />
      <Link to="/staff/customer-details" className="btn btn-info">Customer Account Details</Link>
      <br />
      <br />
      <Link to="/staff/update-transaction" className="btn btn-info">Update Transactions</Link>
     
    </div>
  );
};

export default StaffDashboard;
