const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', 
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
