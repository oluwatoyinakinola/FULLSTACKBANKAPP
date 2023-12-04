import axios from 'axios';

// Replace 'YOUR_SERVER_BASE_URL' with the actual URL of your server.

const SERVER_BASE_URL = 'http://localhost:4500';

const api = axios.create({
  baseURL: 'http://localhost:4500',
 
});



 export const createCustomer = async (data) => 
 {
  console.log(data);
  const response = await fetch(`http://localhost:4500/api/customer/new`, {
   
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
      console.log('Inside Authenticate user');
      console.log('EMail ', email);
      console.log('Password ', password);
      console.log('UserType ', userType);
      
      console.log('URL.......', `${SERVER_BASE_URL}/api/login/authenticate`);

      const response = await axios.post(`${SERVER_BASE_URL}/api/login/authenticate`, {
        
        email: email,
        password: password,
        userType: userType,
      });

      console.log('Reponse Data .......', response.data);
  
      return response.data;

    } catch (error) {
      if (error.request) {
        
        console.error('Error:', error.response.data);

        return { status: error.response.status, error: error.response.data };

      } else if (error.request) {
        
        console.error('No response from the server.', error.request);

        return { status: 500, error: 'No response from the server' };

      } else {
        
        console.error('Request failed:', error.message);
        return { status: 500, error: error.message };
      }
    }
  },


  loginUser: async(email, password, userType)=>{
    
    let data = JSON.stringify({
      "email": email,
      "password": password,
      "userType": userType
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4500/api/login/authenticate',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    



  },
  
  // function to getting customer by email

   getCustomerByEmail : async (email) => {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/api/customer/${email}`);
      return response.data; 
    } catch (error) {
      if (error.response) {
        
        console.error('Error:', error.response.data);
        return null; 
      } else if (error.request) {
      
        console.error('No response from the server.');
        return null; 
      } else {
        
        console.error('Request failed:', error.message);
        return null; 
      }
    }
  },

  getadmindetails:  async (email) => {
    try 
    {
      const response = await axios.get(`${SERVER_BASE_URL}/api/admin/${email}`);
      return response.data; 
    } catch (error) 
    {
      if (error.response) {
        
        console.error('Error:', error.response.data);
        return null; 
      } else if (error.request) {
        
        console.error('No response from the server.');
        return null; 
      } else {
        
        console.error('Request failed:', error.message);
        return null; 
      }
    }
  },
};



export default authService;