import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewCustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch('http://localhost:4500/api/customer/listall');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCustomerData();
  }, []);

  if (loading) {
    return <div className="container mt-5">Loading customer data...</div>;
  }

  if (error) {
    return (
      <div className="container mt-5">

        <div className="alert alert-danger">

          Error loading customer data: {error}
        </div>
      </div>
    );
  }

  return (
    <div  style={{ background: 'yellow', padding: '10px', height: '160vh', minHeight: '100vh', width: '100vw' }}>

      <h1>Customer List</h1>

      <Link to="/admin" className="btn btn-primary mb-3">

        Back to Admin Dashboard

      </Link>

      <table className="table table-bordered" style={{ borderColor: 'black' }}>
        <thead>
          <tr>
            <th >Name</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCustomerPage;
