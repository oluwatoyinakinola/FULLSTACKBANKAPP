import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Add MDB CSS import

const StaffDashboard = () => {
  return (
    <div className="container mt-5  style={{ background: 'red' }}"> {/* Added sidebar class */}
      <h1>Staff/Banker Dashboard</h1>
      <Link to="/">Back to Homepage</Link>
      <br />
      <button className="btn btn-primary">Staff/Banker Action</button>
      <br />
      <Link to="/staff/customer-details" className="btn btn-info">Customer Account Details</Link>
      <br />
      <Link to="/staff/update-transaction" className="btn btn-info">Update Transactions</Link>
      {/* Add more links or buttons for staff/banker actions */}
    </div>
  );
};

export default StaffDashboard;
