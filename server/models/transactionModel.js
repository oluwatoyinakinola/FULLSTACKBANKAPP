const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String, 
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
