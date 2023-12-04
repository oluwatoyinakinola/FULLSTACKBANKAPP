const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactionModel'); 
const customerController = require('../controllers/customerController');
const Customer = require('../models/customerModel'); 


const updateCustomerBalance = async (accountNumber, newBalance) => {
  try {
    const customer = await Customer.findOne({ accountNumber });

    if (customer) {
      // Update the balance
      customer.balance = newBalance;

      // Save the updated customer
      await customer.save();

      // Return the updated customer details
      return {
        name: customer.name,
        email: customer.email,
        accountNumber: customer.accountNumber,
        balance: customer.balance,
      };
    } else {
      return { error: "Customer not found" };
    }
  } catch (error) {
    console.error("Error updating customer balance:", error);
    return { error: "Internal server error" };
  }
};

const createTransaction = async (req, res) => {
  try {
    const { senderaccountnumber, recipientaccountnumber, amount } = req.body;


    console.log('Enterred......');

    console.log('Amount......', amount);

    console.log('sender......', senderaccountnumber);
    
    console.log('reciever......', recipientaccountnumber);


    // Declare variables
    let sender, recipient, sendersAccountBalance, recipientAccountBalance, recipientAccountNumber, senderAccountNumber ;

    // Fetch sender's details
    sender = await customerController.getCustomerAccountNumber(res, senderaccountnumber);
   
    const { name, balance, accountNumber, email } = sender;

    if(sender)
    {
      senderbalance = sender.balance;
    }

     senderbalance = sender.balance;


    console.log('sender details ......', senderbalance);


    console.log('sender details ......', sender.balance);


    console.log('sender Accountnumber ......', sender.accountNumber);

    // Debit sender's account
    sendersAccountBalance = await DebitAccount(amount, sender.balance);
    
    await updateCustomerBalance(sender.accountNumber, sendersAccountBalance);

     // Create debit transaction
     const debitTransaction = new Transaction({
      accountNumber: senderaccountnumber,
      amount,
      transactionType: 'DEBIT',
    });

    // Save debit transaction
    await debitTransaction.save();

    // Fetch recipient's details
    recipient = await customerController.getCustomerAccountNumber(res, recipientaccountnumber);



    // Credit recipient's account
    recipientAccountBalance = await CreditAccount(amount, recipient.balance);

    recipientAccountNumber = recipient.accountNumber;

    await updateCustomerBalance(recipient.accountNumber,  recipientAccountBalance);

    console.log('recieveer Account number -->',recipientAccountNumber );


    // Create credit transaction

    const creditTransaction = new Transaction({
      accountNumber: recipientaccountnumber,
      amount,
      transactionType: 'CREDIT',
    });

    // Save credit transaction
    await creditTransaction.save();

    console.log('Transaction Successfull !!!!!' );


    res.status(201).json({ message: 'Transaction created successfully' });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(400).json({ error: 'Bad request' });
  }
};




// List all transactions

const DebitAccount = async (amount, accountbalance) => {
 
  console.log('account balance', accountbalance );
  const balance = accountbalance - amount;
  return balance;
  
};

// List all transactions
const CreditAccount = async (amount, accountbalance) => {
 
  const balance = accountbalance + amount;
  return balance;
  
};


const listTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error('Error listing transactions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// searching for a transaction by id

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

// create a new transaction

router.post('/transactions', async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// getting a list of all transactions

router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// getting a transaction by ID

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

// updating a transaction by id

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

// deleting a transaction by id

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
