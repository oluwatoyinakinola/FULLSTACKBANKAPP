import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerDetailsForm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState(0);

  const navigate = useNavigate();

  const handleCustomerDetails = async (e) => {
    e.preventDefault();

    // sending a POST request to your server to save customer details

    const response = await fetch('http://localhost:4500/api/customer/listall', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountNumber, balance }),
    });

    if (response.status === 201) {
      navigate('/customer/login');
    } else {
      console.log('Details saving failed');
    }
  };

  return (
    <div>
      <h2>Customer Details</h2>
      <form onSubmit={handleCustomerDetails}>
        <div>
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="balance">Starting Balance:</label>
          <input
            type="number"
            id="balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Details</button>
      </form>

      <Link to="/createtransaction">Create a Transaction</Link>

       <br/>

      <Link to="/customer">Back to Customer Dashboard</Link>

    </div>
  );
};

export default CustomerDetailsForm;
