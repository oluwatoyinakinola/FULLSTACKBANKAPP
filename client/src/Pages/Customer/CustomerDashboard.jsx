import React, {useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



const CustomerDashboard = () => {

  // Retrieving data from sessionStorage
  const navigate = useNavigate();

  const userType = sessionStorage.getItem('userType');
  const email = sessionStorage.getItem('email');
  const accountNumber = sessionStorage.getItem('accountNumber');
  const accountbalance = sessionStorage.getItem('accountbalance');

  useEffect(() => {
    
    if(userType !== 'customer'){
      navigate('../redirect'); 
     }
    }, [navigate]);

  return (

    <Container fluid className="d-flex align-items-center justify-content-center" style={{ background: '#7FB785', minHeight: '100vh', width: '210vh' }}>
    
     <div className="text-center">

      <h1>Customer Dashboard</h1>
      <b>
        <p>User Type: {userType}</p>
        <p>Email: {email}</p>
        <p>Account Balance: {accountbalance}</p>
        <p>Account Number: {accountNumber}</p>
      </b>
      <br />
      <br />
        <Link to="/" className="btn btn-primary">Back to Homepage</Link>
      <br />
      <br />
      
        <Link to="../viewcustomertransaction" className="btn btn-primary">View Transactions</Link>
      <br/> 
      <br />
         <Link to="../createtransaction" className="btn btn-primary">Transfers</Link>
      <br />
      <br />
      
      <Link to="../logout" className="btn btn-primary">Log Out</Link>

      </div>
    </Container>
  );
};

export default CustomerDashboard;
