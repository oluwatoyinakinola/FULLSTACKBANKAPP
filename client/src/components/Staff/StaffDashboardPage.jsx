import React from 'react';
import useStaffData from '../../Hooks/useStaffData';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StaffDashboardPage = () => {
  const { staffData, loading } = useStaffData();

  if (loading) {
    return <div>Loading staff data...</div>;
  }

  return (
    <Container className="mt-5 bg-light p-4 , minHeight: '100vh'">
      <h2 className="mb-4">Staff Dashboard</h2>
      <div>
        <h3>Welcome, {staffData.name}</h3>
        <p>Role: {staffData.role}</p>
        <p>Shift: {staffData.shift}</p>
      </div>
    </Container>
  );
};

export default StaffDashboardPage;
