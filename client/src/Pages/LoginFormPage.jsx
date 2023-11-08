import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../Utils/apiCalls';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const LoginFormPage = () => {
 

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'customer', 
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const maxLength = 10; 
  
    
      const password = formData.password;
      const isPasswordValid = (password) => {
        return password.length <= maxLength;
      };

      if (!isPasswordValid(password)) {
        setError("Password is valid.");
     
        console.log("Password is too short.");
      }
      // Authenticate user
      const response = await apiService.authenticateUser(
        formData.email,
        formData.password,
        formData.userType
      );

      if (response.error) {
        setError(response.error);
      } else {
        setError(null);

        // Store user email and userType in session storage
        // sessionStorage.setItem('userEmail', formData.email);
        // sessionStorage.setItem('userType', formData.userType);

        // Get admin , staff or customer details based on userType
        let userDetailsResponse;

        switch (formData.userType) {
          case 'admin':
            userDetailsResponse = await apiService.getadmindetails(formData.email);
            break;
          case 'customer':
            userDetailsResponse = await apiService.getcustomerdetails(formData.email);
            break;
          case 'staff':
            userDetailsResponse = await apiService.getStaffDetails(formData.email);
            break;
          default:
            setError('Invalid userType');
            return;
        }

        if (userDetailsResponse.error) {
          setError(userDetailsResponse.error);
        } else {

          useEffect(() => {

            // Store admin or customer details in session storage
            sessionStorage.setItem('userDetails', JSON.stringify(userDetailsResponse));
            navigate('../');


          }, [navigate]);


        }
      }
    } catch (error) {
      console.error(error);
      setError('Internal server error');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}


      <form onSubmit={handleLogin}>


        <table>
          <tbody>
            <tr>
              <td><label htmlFor="email" className="form-label">   Email:
              </label></td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
              </td>
              <td>      <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="userType" className="form-label">
                User Type:
              </label></td>
              <td> <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
              </select></td>
            </tr>
            <tr>
              <td colSpan={2}><button type="submit" className="btn btn-primary">
                Login
              </button></td>

            </tr>
          </tbody>
        </table>

      </form>

    </div>
  );
};

export default LoginFormPage;
