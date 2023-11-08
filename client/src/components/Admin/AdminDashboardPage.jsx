import React from 'react';
import useAdminData from '../../Hooks/useAdminData';
// import 'bootstrap/dist/css/bootstrap.min.css';


function AdminDashboardPage() {
  const { adminData, loading } = useAdminData();

  const containerStyle = {
    backgroundColor: 'steelblue',
    padding: '20px', 
  };

  if (loading) {
    return <div>Loading admin data...</div>;
  }

  return (
    <div className="container mt-5" style={containerStyle}>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Welcome, {adminData.username}</h3>
        <p>Email: {adminData.email}</p>
        <p>Role: {adminData.role}</p>
        
      </div>
      
    </div>
  );
}

export default AdminDashboardPage;
