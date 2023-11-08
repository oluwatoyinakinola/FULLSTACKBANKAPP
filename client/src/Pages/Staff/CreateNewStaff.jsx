import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StaffPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staffMembers, setStaffMembers] = useState([]);
  const [error, setError] = useState(null);

  const handleCreateStaff = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/staff/new', {
        name,
        email,
        password,
      });

      // Handle success, e.g., show a success message or redirect to another page
      console.log('New staff member created:', response.data);
    } catch (err) {
      // Handle errors, e.g., display an error message
      setError('Failed to create staff member');
      console.error(err);
    }
  };

  const fetchStaffMembers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/staff');
      setStaffMembers(response.data);
    } catch (err) {
      setError('');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStaffMembers();
  }, []); 

  return (
    <div>
      <h1>Create a New Staff Member</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleCreateStaff}>Create Staff</button>
        {error && <p>Error: {error}</p>}
      </div>
      <h1>List of Staff Members</h1>
      <ul>
        {staffMembers.map((staffMember) => (
          <li key={staffMember._id}>{staffMember.name} - {staffMember.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default StaffPage;
