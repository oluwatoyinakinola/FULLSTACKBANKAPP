import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RedirectPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    
    <div style={{ textAlign: 'center', marginTop: '5px' , backgroundColor: 'seagreen', color: "white" }}>
      <center>
      <h2>Access Denied</h2>
      <p>You are not allowed to access this page.</p>
      <button className="btn btn-danger" onClick={goBack}>Go Back</button>
      </center>
    </div>
  );
};
export default RedirectPage;
