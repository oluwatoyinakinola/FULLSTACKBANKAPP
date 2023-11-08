import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const linkStyle = {
  textDecoration: 'underline', 
};


const AdminDashboard = () => {

  
  return (
    <div className="container mt-5 "> 
      <h1>Admin Dashboard</h1>
      <Link to="/" style={linkStyle}>BACK TO HOMEPAGE</Link>
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
      <Link to="../viewallstaff" className="btn btn-danger">View All Staff</Link>
      <br />
      <br />
      
    </div>
  );
};

export default AdminDashboard;
