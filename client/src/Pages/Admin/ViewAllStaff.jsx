import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewAllStaff = () => {
  const [staff, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an async function to fetch customer data
    const fetchStaffData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/staff/listall');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStaffs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    // Call the async function
    fetchStaffData();
  }, []);

  if (loading) {
    return <div className="container mt-5">Loading staff data...</div>;
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Error loading staff data: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>Staff List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          {staff.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.name}</td>
              <td>{staff.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllStaff;
