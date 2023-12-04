import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      
      if (!sessionStorage.getItem('email')) {
        
        navigate('/login');
      }
    }, [navigate]);

    
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
