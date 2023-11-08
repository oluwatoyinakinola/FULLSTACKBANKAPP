import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Add MDB CSS import

const AdminDashboard = () => {
  return (
    <div className="container mt-5 style={{ background: 'lightblue' }}"> {/* Added sidebar class */}
      <h1>Admin Dashboard</h1>
      <Link to="/">BACK TO HOMEPAGE</Link>
      <br />
      <br />
      <Link to="../viewCustomers" className="btn btn-danger">View Customers</Link>
      <br />
      <br />
      <Link to="../Createcustomer" className="btn btn-danger">Create Customers</Link>
      <br />
      <br />
      <Link to="../createnewstaff" className="btn btn-danger">Create Staff</Link>
      <br />
      <br />
      {/* <Link to="/admin/admin-login" className="btn btn-danger">Admin Login</Link> */}
      {/* Add more links or buttons for admin actions */}
    </div>
  );
};

export default AdminDashboard;
