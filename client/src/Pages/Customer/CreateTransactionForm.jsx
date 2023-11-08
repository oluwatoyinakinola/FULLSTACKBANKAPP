import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const CreateTransactionForm = () => {
  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState(0);



  const handleCreateTransaction = async (e) => {
    e.preventDefault();

    // Send a POST request to your server to create a transaction
    const response = await fetch('http://localhost:4000/api/transactions/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipientAccount, amount }),
    });

    if (response.status === 201) {
      // Transaction created successfully, you can perform other actions
    //  history.push('/customer/dashboard'); // Redirect to customer dashboard or any other page
    } else {
      // Transaction creation failed, handle error
      console.log('Transaction creation failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Transaction</h2>
      <form onSubmit={handleCreateTransaction}>
        <div className="mb-3">
          <label htmlFor="recipientAccount" className="form-label">Recipient Account Number:</label>
          <input
            type="text"
            id="recipientAccount"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div  className="mb-3">
          <label htmlFor="amount" className="form-label">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Transaction</button>
      </form>
    </div>
  );
};

export default CreateTransactionForm;
