const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel'); 
const generateAccountNumber = require('../utils/accountNumberGenerator');
const bcrypt = require('bcrypt');

// Create a new customer with password hashing
const createnewCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check password length
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the salt rounds as needed

    // Create the new customer with the hashed password
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
    const customerId = req.params.id; // Get the ID parameter from the request
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

const getCustomerByAccountNumber = async (req, res) => {
  const accountNumber = req.params.accountnumber;

  // if (!accountNumber) {
  //   return res.status(400).json({ error: "Account number query parameter is required" });
  // }

  try {
    // Perform a database search based on the account number
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

  // if (!accountNumber) {
  //   return res.status(400).json({ error: "Account number query parameter is required" });
  // }

  try {
    // Perform a database search based on the account number
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





// Update a customer by ID
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

// Delete a customer by ID
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
    const customer = await Customer.findOne({ email });

    if (customer) {
      // Customer is authenticated
      const passwordCorrect = bcrypt.compare(password, customer.password)
      if (passwordCorrect) {
        res.json({ message: 'Login successful', customer });
      }
      else{
        throw new Error("incorrect password")
      }
      
    } else {
      // Authentication failed
      throw new Error("invalid email")
    }
  } catch (error) {
    console.error('Error during customer login:', error);
    res.status(400).json({ error });
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
};

