const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel'); 
const generateAccountNumber = require('../utils/accountNumberGenerator');
const bcrypt = require('bcrypt');

// Creating a new customer with password hashing

const createnewCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check password length
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // Hashing the password

    const hashedPassword = await bcrypt.hash(password, 10); 

    // Creating the new customer with the hashed password

    const customer = new Customer({
      name,
      email,
      password: hashedPassword,
    });

    const savedCustomer = await customer.save();

    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customerId = req.params.id; 
    const customer = await Customer.findById(customerId);

    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    console.error('Error getting customer by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const getCustomerByAccountNumber = async (req, res, accountNumber) => {
  try {

    
    console.log('sender in searc by accountnumber ......', accountNumber);
    

    const customer = await Customer.findOne({ accountNumber });

    if (customer) {
      console.log('customer balance  ......', customer);
      
      return res.status(200).json(customer);
    } else {
      return res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    console.error("Error searching for customer by account number:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getCustomerAccountNumber = async function (res, accountNumber) {
  try {
    console.log('sender in search by account number ......', accountNumber);

    const customer = await Customer.findOne({ accountNumber });
    
    if (customer) {
      console.log('customer balance  ......', customer);
      
      const { name, balance, accountNumber, email } = customer;

      return { name, balance, accountNumber, email };
      
    } else {
      return res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    console.error("Error searching for customer by account number:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


const updateCustomerByAccountNumber = async (req, res) => {
  const accountNumber = req.params.accountnumber;

  try {
    
    const customer = await Customer.findOne({ accountNumber });

    if (customer) {
      return res.status(200).json(customer);
    } else {
      return res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    console.error("Error searching for customer by account number:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


const getCustomerByEmail= async (req, res) => {
  const email = req.params.email;

  try {
    
    const customer = await Customer.findOne({ email });

    if (customer) {
      return res.status(200).json(customer);
    } else {
      return res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    console.error("Error searching for customer by account number:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};





// Updating a customer by id

const updateCustomerbyID =  async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// delete a customer by id

const deleteCustomerbyID =  async (req, res) => {
  try {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json({ message: 'Customer deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


const listAllCustomers =  async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    console.error('Error getting all customers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const customerLogin = async (req, res) => {
  const { email, password } = req.body; 

  // Check if the email and password match a customer record in the database

  try {
    const customer = await Customer.findOne({ email, password });

    if (customer) {
      // Customer is authenticated

      res.json({ message: 'Login successful', customer });
    } else {

      // Authentication failed
      
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during customer login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

 module.exports = {
  createnewCustomer,
  listAllCustomers,
  updateCustomerbyID,
  deleteCustomerbyID,
  getCustomerById,
  getCustomerByAccountNumber,
  customerLogin,
  getCustomerByEmail,
  updateCustomerByAccountNumber,
  getCustomerAccountNumber,
};
;
