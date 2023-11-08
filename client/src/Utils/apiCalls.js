import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
 
});

const BASE_URL = 'http://localhost:4000/api';

 export const createCustomer = async (data) => 
 {
  console.log(data);
  const response = await fetch(`http://localhost:4000/api/customer/new`, {
   
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};




const authService = {
  authenticateUser: async (email, password, userType) => {
    try {
      console.log(email);
      const response = await api.post('/api/login/auth', {
        email,
        password,
        userType,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getcustomerdetails: async (email) => {
    try {
      console.log('customer', email);
      const response = await api.post('/api/customer/', {
        email,
        password,
        userType,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getadmindetails: async (email) => {
    try {
      console.log(email);
      const response = await api.post('/api/admin/', {
        email,
        password,
        userType,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};


export default authService;