import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ViewCustomerTransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Fetch transaction data from your server
        const response = await fetch('http://localhost:4500/api/transaction/listall');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTransactions(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div className="container mt-5">Loading transaction history...</div>;
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Error loading transaction history: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-5" style={{ background: 'teal', color: 'white', padding: '20px' , height: '360vh', width: '100vw' }}>

      <h1>Transaction History</h1>

      <Link to="/customer" className="btn btn-success mb-3">Back to Homepage</Link>


      <table className="table table-bordered table-striped">
        <thead style={{ fontWeight: 'bold' }}>
          <tr>
            <th style={{color: "whitesmoke"}}>Account Number</th>
            <th style={{color: "whitesmoke"}}> Transaction Type</th>
            <th style={{color: "whitesmoke"}}>Amount</th>
            <th style={{color: "whitesmoke"}}>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={{color: "whitesmoke"}}>{transaction.accountNumber}</td>
              <td style={{color: "whitesmoke"}}>{transaction.transactionType}</td>
              <td style={{color: "whitesmoke"}}>{transaction.amount}</td>
              <td style={{color: "whitesmoke"}}>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCustomerTransactionPage;
