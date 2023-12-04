import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    sessionStorage.clear();

    // Redirecting to the login page

    navigate('/login');
  }, [history]);

  return (
    <div>
      <p>Logging out...</p>
      
    </div>
  );
};

export default LogoutPage;
