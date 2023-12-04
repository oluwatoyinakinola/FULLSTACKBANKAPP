import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const UpdateTransactionPage = () => {
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');

  const navigate = useNavigate();

  const handleUpdateTransaction = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:4500/api/customer/updatetransaction', {
        customerId,
        amount,
      });
  
      if (response.status === 200) {
        console.log('Transaction updated successfully:', response.data);
      
      } else {
        console.error('Failed to update transaction');
      
      }
    } catch (error) {
      console.error('Error updating transaction:', error);
      
    }
    
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
