import { useState, useEffect } from 'react';
import axios from 'axios';

const useStaffData = () => {
  const [staffData, setStaffData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get('http://localhost:4500/api/staff/listall');
        setStaffData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch staff data:', error);
      }
    };

    fetchStaffData();
  }, []);

  return { staffData, loading };
};

export default useStaffData;
