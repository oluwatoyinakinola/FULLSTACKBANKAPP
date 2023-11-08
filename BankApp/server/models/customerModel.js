const mongoose = require('mongoose');

const generateAccountNumber = require('../utils/accountNumberGenerator');


const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: Number,
    default: generateAccountNumber,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;