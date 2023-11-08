const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel");

// Create a new admin
const creatnewadmin = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;

    // Check password length
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // Create an instance of the Admin model with data from the request body
    const admin = new Admin({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Save the admin to the database
    const savedAdmin = await admin.save();

    res.status(201).json(savedAdmin); // Respond with the saved admin data
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a list of all admins
const listadmins = async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.json(admins);
  } catch (error) {
    console.error("Error listing admin users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get an admin by ID
const getadminbyID = async (req, res) => {
  try {
    const adminId = req.params.id; // Get the ID parameter from the request
    const admin = await Admin.findOne({ id: adminId });

    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    console.error("Error getting admin user by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Get an admin by ID
const getAdminbyEmail = async (req, res) => {
  try {
    const adminemail = req.params.email; // Get the ID parameter from the request
    const admin = await Admin.findOne({ adminemail });

    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    console.error("Error getting admin user by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an admin by ID
const upadteadminbyid = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an admin by ID
const deleteadminbyID = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndRemove(req.params.id);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    res.json({ message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  creatnewadmin,
  listadmins,
  getadminbyID,
  upadteadminbyid,
  deleteadminbyID,
  getAdminbyEmail,
};
