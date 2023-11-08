import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import Homepage from './Pages/Homepage';
import AuthenticatedHomepage from './Pages/Homepage';
import SuccessPage from './Pages/SuccessPAge';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import CustomerDashboard from './Pages/Customer/CustomerDashboard';
import StaffDashboard from './Pages/Staff/StaffDashboard';
import ViewCustomerPage from './Pages/Admin/ViewCustomerPage';
import CreateCustomer from './Pages/Customer/SignUpForm';
import CreateTransaction from './Pages/Customer/CreateTransactionForm';
import LoginForm from './Pages/LoginFormPage';
import CreateStaff from './Pages/Staff/CreateNewStaff';
// 


import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Add MDB CSS import

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        </nav>
        <div className="container mt-5 sidebar"> {/* Added sidebar class */}
          <Routes>
            <Route path="/" element={<AuthenticatedHomepage  />} />
            <Route path="/Successpage" element={<SuccessPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/customer" element={<CustomerDashboard />} />
            <Route path="/staff" element={<StaffDashboard />} />
            <Route path="/viewCustomers" element={<ViewCustomerPage />} />
            <Route path="/Createcustomer" element={<CreateCustomer />} />
            <Route path="/createtransaction" element={<CreateTransaction />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/createnewstaff" element={<CreateStaff />} />
  //
         
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
