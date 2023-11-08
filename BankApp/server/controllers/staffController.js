const express = require('express');
const router = express.Router();
const Staff = require('../models/staffModel');
const bcrypt = require('bcrypt');

const createStaff = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide name, email, and password' });
    }

    // Check password length
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the salt rounds as needed

    // Create a new staff member
    const staff = new Staff({
      name,
      email,
      password: hashedPassword, // Fixed the property name here
    });

    // Save the staff member to the database
    const newStaff = await staff.save();

    res.status(201).json(newStaff);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to create staff member' });
  }
};

// List all staff members
const listAllStaff = async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.status(200).json(staffMembers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve staff members' });
  }
};

// Update staff details by email
const updateStaffByEmail = async (req, res) => {
  try {
    const { email } = req.params; // Extract email from the request parameters
    const { name, password } = req.body;

    // Find the staff member by email and update their details
    const updatedStaff = await Staff.findOneAndUpdate(
      { email },
      { name, password },
      { new: true } // Return the updated document
    );

    if (!updatedStaff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update staff member' });
  }
};

module.exports = {
  createStaff,
  listAllStaff,
  updateStaffByEmail
};
