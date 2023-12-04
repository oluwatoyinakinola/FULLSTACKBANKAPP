const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel");
const bcrypt = require('bcrypt');

// Creating a new admin

const creatnewadmin = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;

    // Checking the password length

    if (req.body.password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // Creating an instance of the Admin model with data from the request body

    const hashedPassword = await bcrypt.hash(req.body.password, 10); 

    const admin = new Admin({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save the admin to the database

    const savedAdmin = await admin.save();

    res.status(201).json(savedAdmin); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Getting a list of all admins

const listadmins = async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.json(admins);
  } catch (error) {
    console.error("Error listing admin users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Getting an admin by ID

const getadminbyID = async (req, res) => {
  try {
    const adminId = req.params.id; 
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


// Getting an admin by id

const getAdminbyEmail = async (req, res) => {
  try {
    const adminemail = req.params.email; 
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

// updating an admin by id

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

// deleting an admin by id

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
