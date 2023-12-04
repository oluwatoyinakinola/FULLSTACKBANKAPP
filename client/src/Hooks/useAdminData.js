import { useState, useEffect } from 'react';
import axios from 'axios';

const useAdminData = () => {
  const [adminData, setAdminData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get('http://localhost:4500/api/admin/listall');
        setAdminData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch admin data:', error);
      }
    };

    fetchAdminData();
  }, []);

  return { adminData, loading };
};

export default useAdminData;
