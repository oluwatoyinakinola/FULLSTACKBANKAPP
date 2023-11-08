const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

// Import your models
const Admin = require('../models/adminModel');
const Customer = require('../models/customerModel');
const Staff = require('../models/staffModel');

// Function to handle user authentication
async function authenticateUser(email, password, userType) {
  try {
    let user;
    let userModel;

    switch (userType) {
      case 'admin':
        userModel = Admin;
        break;
      case 'customer':
        userModel = Customer;
        break;
      case 'staff':
        userModel = Staff;
        break;
      default:
        return { status: 400, error: 'Invalid userType' };
    }

    user = await userModel.findOne({ email });

    if (!user) {
      return { status: 401, error: 'User not found' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { status: 401, error: 'Invalid password' };
    }

    return { status: 200, user };
  } catch (error) {
    console.error(error);
    return { status: 500, error: 'Internal server error' };
  }
}

module.exports = { authenticateUser };
