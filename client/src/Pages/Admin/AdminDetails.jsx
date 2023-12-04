import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDetails = () => {
  const [adminData, setAdminData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get('http://localhost:4500/api/admin/details');
        setAdminData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch admin details:', error);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading admin data...</div>
      ) : (
        <div>
          <h2>Admin Dashboard</h2>
          <div>
            <h3>Welcome, {adminData.username}</h3>
            <p>Email: {adminData.email}</p>
            <p>Role: {adminData.role}</p>
            
          </div>
          
        </div>
      )}
    </div>
  );
};

export default AdminDetails;
