const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const Customer = require('../models/customerModel');


/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: API for managing customer users
 */

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     description: Create a new customer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Bad request
 */
router.post('/new', customerController.createnewCustomer);

// /**
//  * @swagger
//  * /customers:
//  *   get:
//  *     summary: Create a new customer
//  *     description: Create a new customer.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Customer'
//  *     responses:
//  *       201:
//  *         description: Customer created successfully
//  *       400:
//  *         description: Bad request
//  */
// router.post('/listall', customerController.listallcustomers);

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get a list of all customers
 *     description: Retrieve a list of all customer users.
 *     responses:
 *       200:
 *         description: A list of customer users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */
router.get('/listall', customerController.listAllCustomers);

/**
 * @swagger
 * /customers/{accountnumber}:
 *   get:
 *     summary: Search customer by Account Number
 *     description: Search a customer user by their Account Number.
 *     parameters:
 *       - in: path
 *         name: accountnumber
 *         required: true
 *         description: Account Number of the customer to search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer not found
 */
router.get('/:accountnumber', customerController.getCustomerByAccountNumber);


/**
 * @swagger
 * /customers/{accountnumber}:
 *   get:
 *     summary: search customer by Account Number
 *     description: Update a customer user by their ID.
 *     parameters:
 *       - in: path
 *         name: accountnumber
 *         required: true
 *         description: ID of the customer to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer not found
 */
router.put('/:accountnumber', customerController.updateCustomerbyID);

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete a customer by ID
 *     description: Delete a customer user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the customer to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 *       404:
 *         description: Customer not found
 */
router.delete('/:accountnumber',customerController.deleteCustomerbyID );

/**
 * @swagger
 * /customers/login:
 *   post:
 *     summary: Customer login
 *     description: Authenticate a customer user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer logged in successfully
 *       401:
 *         description: Invalid email or password
 *       500:
 *         description: Internal server error
 */
router.post('/login', customerController.customerLogin);


router.post('/:email', customerController.getCustomerByEmail);

module.exports = router;


