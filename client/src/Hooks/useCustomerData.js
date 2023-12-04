import { useState, useEffect } from 'react';
import axios from 'axios';

const useCustomerData = () => {
  const [customerData, setCustomerData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get('http://localhost:4500/api/customer/listall');
        setCustomerData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch customer data:', error);
      }
    };

    fetchCustomerData();
  }, []);

  return { customerData, loading };
};

export default useCustomerData;
