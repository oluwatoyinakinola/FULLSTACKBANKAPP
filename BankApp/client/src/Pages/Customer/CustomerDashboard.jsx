import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Add MDB CSS import

const CustomerDashboard = () => {
  return (
    <div className="container mt-5 style={{ background: 'coral' }}"> {/* Added sidebar class */}
      <h1>Customer Dashboard</h1>
      <Link to="/">Back to Homepage</Link>
      <br />
      <br />
      <Link to="../createtransaction">Transfers</Link>
      <br />
      <Link to="/customer/signup">View Profile</Link>
      <br />
      <Link to="/customer/login">Log Out</Link>
      {/* Add more links or buttons for customer actions */}
    </div>
  );
};

export default CustomerDashboard;
