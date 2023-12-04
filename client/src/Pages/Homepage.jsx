import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth';
import backgroundImage from "@/images/1.jpg";
import "@/App.css";
import {  Container, Navbar, Nav , Button} from 'react-bootstrap';



const Homepage = () => {

  return (

    <Container fluid className="d-flex align-items-stretch homepage-container p-0" style={{ backgroundImage: `url(${backgroundImage})`, 
    height: '160vh' , width: '1500px', backgroundSize: 'cover' }}>

    <div className="text-center w-100">
       
    
    <h1 className="text-info mt-5" style={{ fontSize: '4rem', fontWeight: 'bold' }}>WELCOME TO BANK APPLICATION</h1>
        
        <Navbar bg="primary" variant="dark" expand="lg"  className="position-absolute top-50 start-50 translate-middle p-3">

          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/admin" className="text-warning text-decoration-underline cursor-pointer" style={{ fontSize: '1.22rem', fontWeight: 'bold' }}>Admin Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/customer" className="text-warning  text-decoration-underline cursor-pointer" style={{ fontSize: '1.22rem', fontWeight: 'bold' }}>Customer Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/staff" className="text-warning text-decoration-underline cursor-pointer" style={{ fontSize: '1.22rem', fontWeight: 'bold' }}>Staff/Banker Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <div className="mt-4">
          <Link to="./login" className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ fontSize: '2rem', fontWeight: 'bold' }} >
            Login Here
          </Link>
        </div>
      </div>
    </Container>
  );
};


export default withAuth(Homepage);
