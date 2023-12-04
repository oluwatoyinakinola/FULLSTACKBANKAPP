const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Admin = require('../models/adminModel');
const Customer = require('../models/customerModel');
const Staff = require('../models/staffModel');

const authenticateUser = async (req, res) => {
  try {
    const { email, password, userType } = req.body;

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
    console.log(userModel);

    const userModelName = userModel.modelName; 

    console.log('Model Name --->', userModelName);

    if (userModelName == 'Customer') {

       user = await Customer.findOne({ email }); 
       console.log('User --> ', user);


    } else if (userModelName == 'Admin') {

       user = await Admin.findOne({ email }); 
       console.log('User --> ', user);

    } else if (userModelName == 'Staff') {

       user = await Staff.findOne({ email }); 
       console.log('User --> ', user);
    }

    if (!user) 
    {
      return { status: 401, error: 'User not found' };
    }

    console.log('User --> ', user);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) 
    {
      return { status: 401, error: 'Invalid password' };

    } else 
    {
      console.log('User Sent --> ', user);

          const formattedUser = {
            name: user.name, 
            email: user.email,
            balance: user.balance,
            accountNumber: user.accountNumber,
              };

              console.log('Formatted User Sent --> ', formattedUser);

              const retrunstatement =  {
                status: 200,
                data: formattedUser,
              }

              console.log('Return Statement', retrunstatement );

              return res.status(200).json({ status: 200, data: formattedUser });
    
         }
       } 
       catch (error) 
      {
         console.error(error);
         return { status: 500, error: 'Internal server error' };
        }
      };


module.exports = { authenticateUser };
