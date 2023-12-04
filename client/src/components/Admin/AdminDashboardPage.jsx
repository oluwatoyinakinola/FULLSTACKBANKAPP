import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ background: 'lightblue', minHeight: '100vh' , width: '210vh' }}>
     
      <div className="text-center">

      <h1>Admin Dashboard</h1>
      <Link to="/" className="btn btn-primary">BACK TO HOMEPAGE</Link>
      <br />
      <br />
      <Link to="../viewCustomers" className="btn btn-primary">View Customers</Link>
      <br />
      <br />
      <Link to="../Createcustomer" className="btn btn-primary">Create Customers</Link>
      <br />
      <br />
      <Link to="../createnewstaff" className="btn btn-primary">Create Staff</Link>
      <br />
      <br />
      <Link to="../createnewadmin" className="btn btn-primary">Create Admin</Link>
      <br />
      <br />
    
      <Link to="../createtransaction" className="btn btn-primary">Transfers</Link>
      <br />
      <br />
      </div>
    </Container>
  );
};

export default AdminDashboard;