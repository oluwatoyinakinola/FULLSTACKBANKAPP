const express = require('express');
const router = express.Router();
const Staff = require('../models/staffModel');
const bcrypt = require('bcrypt');

const createStaff = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking if the required fields are provided

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide name, email, and password' });
    }

    // Checking password length

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // hashing the password

    const hashedPassword = await bcrypt.hash(password, 10); 

    // creating a new staff member

    const staff = new Staff({
      name,
      email,
      password: hashedPassword, 
    });

    // saving the staff member to the database

    const newStaff = await staff.save();

    res.status(201).json(newStaff);
  } catch (error) {
    console.error(error); 
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

// updating staff details by email

const updateStaffByEmail = async (req, res) => {
  try {
    const { email } = req.params; 
    const { name, password } = req.body;

    // finding staff member by email and update their details

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
// getting an admin by ID

const getStaffbyEmail = async (req, res) => {
  try {
    const staffemail = req.params.email; 
    const staff = await Staff.findOne({ staffemail });

    if (staff) {
      res.json(staff);
    } else {
      res.status(404).json({ error: "Staff not found" });
    }
  } catch (error) {
    console.error("Error getting Staff user by Email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createStaff,
  listAllStaff,
  updateStaffByEmail,
  getStaffbyEmail,
};
