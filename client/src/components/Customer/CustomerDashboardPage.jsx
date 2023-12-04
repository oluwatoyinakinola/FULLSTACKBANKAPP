import React from 'react';
import useCustomerData from '../../Hooks/useCustomerData';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerDashboardPage() {
  const { customerData, loading } = useCustomerData();

  if (loading) {
    return <div>Loading customer data...</div>;
  }

  return (
    <Container className="mt-5 bg-light p-4 , minHeight: '100vh'">
      <h2>Customer Dashboard</h2>
      <div>
        <h3>Welcome, {customerData.username}</h3>
        <p>Email: {customerData.email}</p>
        <p>Account Balance: {customerData.accountBalance}</p>
      </div>
    </Container>
  );
}

export default CustomerDashboardPage;
