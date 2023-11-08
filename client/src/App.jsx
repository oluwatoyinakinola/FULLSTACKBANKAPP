import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import Homepage from './Pages/Homepage';
import AuthenticatedHomepage from './Pages/Homepage';
import SuccessPage from './Pages/SuccessPage';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import CustomerDashboard from './Pages/Customer/CustomerDashboard';
import StaffDashboard from './Pages/Staff/StaffDashboard';
import ViewCustomerPage from './Pages/Admin/ViewCustomerPage';
import ViewAllStaff from './Pages/Admin/ViewAllStaff';
import HuddleLandingPage from './Pages/HuddleLandingPage';
import CreateCustomer from './Pages/Customer/SignUpForm';
import CreateTransaction from './Pages/Customer/CreateTransactionForm';
import LoginForm from './Pages/LoginFormPage';
import CreateStaff from './Pages/Staff/CreateNewStaff';

import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 

const appStyle = {
  backgroundColor: 'cyan', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  height: '100vh',
  width: '1400px',
  

  
};


function App() {
  return (
    <Router>
      <div style={appStyle}>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Bank Application
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customer" className="nav-link">
                Customer Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staff" className="nav-link">
                Staff/Banker Dashboard
              </Link>
            </li>
          </ul>
        </nav> */}
        <div className="container mt-5 sidebar"> 
          <Routes>
            {/* <Route path="/" element={<AuthenticatedHomepage  />} /> */}
            <Route index element={<HuddleLandingPage/>}></Route>
            <Route path="/Successpage" element={<SuccessPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/customer" element={<CustomerDashboard />} />
            <Route path="/staff" element={<StaffDashboard />} />
            <Route path="/viewCustomers" element={<ViewCustomerPage />} />
            <Route path="/viewallstaff" element={<ViewAllStaff />} />
          
            <Route path="/Createcustomer" element={<CreateCustomer />} />
            <Route path="/createtransaction" element={<CreateTransaction />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/createnewstaff" element={<CreateStaff />} />

         
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
