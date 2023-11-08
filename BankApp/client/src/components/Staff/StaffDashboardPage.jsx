import React from 'react';
import useStaffData from '../Hooks/useStaffData';
import 'bootstrap/dist/css/bootstrap.min.css';

const StaffDashboardPage = () => {
  const { staffData, loading } = useStaffData();

  if (loading) {
    return <div>Loading staff data...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Staff Dashboard</h2>
      <div>
        <h3>Welcome, {staffData.name}</h3>
        <p>Role: {staffData.role}</p>
        <p>Shift: {staffData.shift}</p>
        {/* Display other staff-related information as needed */}
      </div>
      {/* Add additional components and functionality for the staff dashboard */}
    </div>
  );
};

export default StaffDashboardPage;
