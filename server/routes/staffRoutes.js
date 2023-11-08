const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

/**
 * @swagger
 * tags:
 *   name: Staff Members
 *   description: API for managing staff members
 */

/**
 * @swagger
 * /staff:
 *   post:
 *     summary: Create a new staff member
 *     description: Create a new staff member.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 *     responses:
 *       201:
 *         description: Staff member created successfully
 *       400:
 *         description: Bad request
 */
router.post('/new', staffController.createStaff);

/**
 * @swagger
 * /staff:
 *   get:
 *     summary: Get a list of all staff members
 *     description: Retrieve a list of all staff members.
 *     responses:
 *       200:
 *         description: A list of staff members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Staff'
 */
router.get('/listall', staffController.listAllStaff);

/**
 * @swagger
 * /staff/{email}:
 *   put:
 *     summary: Update a staff member by email
 *     description: Update a staff member by their email.
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email of the staff member to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 *     responses:
 *       200:
 *         description: Staff member updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       404:
 *         description: Staff member not found
 */
router.put('/:email', staffController.updateStaffByEmail);

module.exports = router;
