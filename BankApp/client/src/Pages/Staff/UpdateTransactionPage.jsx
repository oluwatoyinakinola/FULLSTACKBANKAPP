import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateTransactionPage = () => {
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');

  const handleUpdateTransaction = async (e) => {
    e.preventDefault();

    // Send a POST request to update customer transactions
    // Implement the logic to update the customer's transaction here
    // You may need to call your API endpoint
  };

  return (
    <div className="container mt-5">
      <h2>Update Customer Transaction</h2>
      <form onSubmit={handleUpdateTransaction}>
        <div className="mb-3">
          <label htmlFor="customerId"  className="form-label">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Transaction</button>
      </form>
    </div>
  );
};

export default UpdateTransactionPage;
