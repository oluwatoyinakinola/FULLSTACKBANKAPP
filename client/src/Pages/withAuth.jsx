import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the session is null (or any other condition)
      if (!sessionStorage.getItem('userEmail')) {
        // If the session is null, navigate to a login page or another page
        navigate('/login');
      }
    }, [navigate]);

    // Render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
