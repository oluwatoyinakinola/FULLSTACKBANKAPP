const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactionModel'); 



// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const { customerId, amount, transactionType } = req.body;
    const transaction = new Transaction({ customerId, amount, transactionType });
    await transaction.save();
    res.status(201).json({ message: 'Transaction created successfully' });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(400).json({ error: 'Bad request' });
  }
};

// List all transactions
const listTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error('Error listing transactions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Search for a transaction by ID
const getTransactionById = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const transaction = await Transaction.findById(transactionId);

    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    console.error('Error getting transaction by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new transaction
router.post('/transactions', async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a list of all transactions
router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a transaction by ID
router.get('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a transaction by ID
router.put('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a transaction by ID
router.delete('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndRemove(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = { createTransaction,
                   listTransactions,
                   getTransactionById };
