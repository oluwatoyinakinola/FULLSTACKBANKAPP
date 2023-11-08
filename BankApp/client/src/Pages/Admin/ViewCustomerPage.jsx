import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewCustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an async function to fetch customer data
    const fetchCustomerData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/customer/listall');
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

    // Call the async function
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
    <div className="container mt-5">
      <h1>Customer List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            {/* Add more customer fields as needed */}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.balance}</td>
              {/* Display other customer-related information as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCustomerPage;
