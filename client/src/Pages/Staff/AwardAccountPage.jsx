import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const AwardAccountPage = () => {
  const [customerId, setCustomerId] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const navigate = useNavigate();

  const handleAwardAccount = async (e) => {
    e.preventDefault();

    try {
        
        const response = await axios.post('http://localhost:4500/api/staff/', {
          customerId,
          accountNumber,
        });
  
        if (response.status === 200) {
          console.log('Account number awarded successfully:', response.data);
          
        } else {
          console.error('Failed to award account number');
        
        }
      } catch (error) {
        console.error('Error awarding account number:', error);
        
      }
    
  };

  return (
    <div className="container mt-5">
      <h2>Award Account Number</h2>
      <form onSubmit={handleAwardAccount}>
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
          <label htmlFor="accountNumber" className="form-label">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Award Account</button>
      </form>
    </div>
  );
};

export default AwardAccountPage;
