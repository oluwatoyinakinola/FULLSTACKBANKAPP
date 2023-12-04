import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import AuthenticatedHomepage from './Pages/Homepage';
import SuccessPage from './Pages/SuccessPAge';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import CustomerDashboard from './Pages/Customer/CustomerDashboard';
import StaffDashboard from './Pages/Staff/StaffDashboard';
import ViewCustomerPage from './Pages/Admin/ViewCustomerPage';
import CreateCustomer from './Pages/Customer/SignUpForm';
import CustomerDetailsForm from './Pages/Customer/CustomerDetailsForm';
import CreateTransactionForm from './Pages/Customer/CreateTransactionForm';
import CreateTransaction from './Pages/Customer/CreateTransactionForm';
import LoginForm from './Pages/LoginFormPage';
import RedirectPage from './Pages/RedirectPage';
import LogoutPage from './Pages/logoutpage';
import CreateStaff from './Pages/Staff/CreateNewStaff';
import CreateAdmin from './Pages/Admin/CreateNewAdmin';
import AwardAccountPage from './Pages/Staff/AwardAccountPage';
import UpdateTransactionPage from './Pages/Staff/UpdateTransactionPage';
import ViewCustomerTransactionPage from './Pages/Customer/ViewCustomerTransactionPage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container fluid className="mt-5 style={{ backgroundColor: 'blue' , minHeight: '100vh'">
        <Routes>
          <Route path="/" element={<AuthenticatedHomepage />} />
          <Route path="/Successpage" element={<SuccessPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/viewCustomers" element={<ViewCustomerPage />} />
          <Route path="/Createcustomer" element={<CreateCustomer />} />
          <Route path="/createtransaction" element={<CreateTransaction />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/redirect" element={<RedirectPage />} />
           <Route path="/createnewstaff" element={<CreateStaff />} />
          <Route path="/createnewadmin" element={<CreateAdmin />} />
          <Route path="/awardaccountpage" element={<AwardAccountPage />} />
          <Route path="/updatetransaction" element={<UpdateTransactionPage />} />
          <Route path="/viewcustomertransaction" element={<ViewCustomerTransactionPage />} />
          <Route path="/createtransactionform" element={<CreateTransactionForm />} />
          <Route path="/customerdetailsform" element={<CustomerDetailsForm />} />
          <Route path="/logout" element={<LogoutPage />} />

        </Routes>
      </Container>
    </Router>
  );
}

export default App;
