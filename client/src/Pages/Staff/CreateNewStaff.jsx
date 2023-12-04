import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function StaffPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staffMembers, setStaffMembers] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCreateStaff = async () => {
    try {
      const response = await axios.post('http://localhost:4500/api/staff/new', {
        name,
        email,
        password,
      });


 
      navigate("/admin?message=Staff Created Successfully!!");
      
      console.log('New staff member created:', response.data);


    } catch (err) {
     
      setError('Failed to create staff member');
      console.error(err);
    }
  };

  const fetchStaffMembers = async () => {
    try {
      const response = await axios.get('http://localhost:4500/staff');
      setStaffMembers(response.data);
    } catch (err) {
      setError('Failed to retrieve staff members');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStaffMembers();
  }, []); 

  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: '100vh', background: 'royalblue', color: 'white', padding: '20px' }}
  >
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

          <br/>
          <br/>

          <Button variant="danger" onClick={handleCreateStaff}>
            Create Staff
          </Button>
          
        </div>

        <br/>

        <ul>
          {staffMembers.map((staffMember) => (
            <li key={staffMember._id}>{staffMember.name} - {staffMember.email}</li>
          ))}
        </ul>
        
      </div>
    </Container>
  );
}

export default StaffPage;
