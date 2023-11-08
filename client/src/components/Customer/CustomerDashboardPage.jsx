import React from 'react';
import useCustomerData from '../../Hooks/useCustomerData';
// import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerDashboardPage() {
  const { customerData, loading } = useCustomerData();

  const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
  };


  if (loading) {
    return <div>Loading customer data...</div>;
  }

  return (
    <div className="container mt-5"  style={containerStyle}>
      <h2>Customer Dashboard</h2>
      <div>
        <h3>Welcome, {customerData.username}</h3>
        <p>Email: {customerData.email}</p>
        <p>Account Balance: {customerData.accountBalance}</p>
       
      </div>
      
    </div>
  );
}

export default CustomerDashboardPage;
