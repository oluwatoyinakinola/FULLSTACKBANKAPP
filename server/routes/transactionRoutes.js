const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');


/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: API for managing transactions
 */

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create a new transaction
 *     description: Create a new transaction.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaction'
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *       400:
 *         description: Bad request
 */
router.post('/transaction/new', transactionController.createTransaction);


/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get a list of all transactions
 *     description: Retrieve a list of all transactions.
 *     responses:
 *       200:
 *         description: A list of transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaction'
 */
router.get('/transaction/listall',transactionController.listTransactions );

/**
 * @swagger
 * /transactions/{id}:
 *   get:
 *     summary: Get a transaction by ID
 *     description: Retrieve a transaction by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the transaction to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transaction retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       404:
 *         description: Transaction not found
 */
router.get('/transaction/:id',transactionController.getTransactionById);

/**
 * @swagger
 * /transactions/{id}:
 *   put:
 *     summary: Update a transaction by ID
 *     description: Update a transaction by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the transaction to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaction'
 *     responses:
 *       200:
 *         description: Transaction updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       404:
 *         description: Transaction not found
 */
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

/**
 * @swagger
 * /transactions/{id}:
 *   delete:
 *     summary: Delete a transaction by ID
 *     description: Delete a transaction by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the transaction to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transaction deleted successfully
 *       404:
 *         description: Transaction not found
 */
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

module.exports = router;
