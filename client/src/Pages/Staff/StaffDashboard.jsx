import React, {useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const StaffDashboard = () => {
  

  const navigate = useNavigate();

useEffect(() => {
  const userType = sessionStorage.getItem('userType');
  if(userType !== 'staff'){
    navigate('/redirect'); 
   }
  }, [navigate]);

  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ background: '#FF9900', minHeight: '100vh' , width: '210vh' }}>
    
    <div className="text-center">

      <h1>Staff/Banker Dashboard</h1>
      <br/>
      <Link to="/" className="btn btn-primary">Back to Homepage</Link>
      <br />
      <br />
      
      <Link to="../viewCustomers" className="btn btn-primary">View Customers</Link>
      <br />
      <br />
      
      <Link to="../Createcustomer" className="btn btn-success">Sign Up</Link>

      </div>
    </Container>
  );
};

export default StaffDashboard;
