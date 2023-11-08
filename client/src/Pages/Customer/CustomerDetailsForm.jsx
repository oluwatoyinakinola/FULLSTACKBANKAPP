import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const CustomerDetailsForm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState(0);

  const history = useHistory();

  const handleCustomerDetails = async (e) => {
    e.preventDefault();

    // Send a POST request to your server to save customer details
    const response = await fetch('http://localhost:4000/api/customer/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountNumber, balance }),
    });

    if (response.status === 201) {
      // Details saved successfully, you can redirect the user to the login page or perform other actions
      history.push('/customer/login');
    } else {
      // Saving details failed, handle error
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

      {/* Add a link to CreateTransactionForm */}
      <Link to="/customer/create-transaction">Create a Transaction</Link>
    </div>
  );
};

export default CustomerDetailsForm;
