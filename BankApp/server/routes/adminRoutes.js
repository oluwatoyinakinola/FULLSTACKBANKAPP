const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const Admin = require('../models/adminModel');

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: API for managing admin users
 */

/**
 * @swagger
 * /admins:
 *   post:
 *     summary: Create a new admin
 *     description: Create a new admin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Bad request
 */
router.post('/new', adminController.creatnewadmin);

/**
 * @swagger
 * /admins:
 *   get:
 *     summary: Get a list of all admins
 *     description: Retrieve a list of all admin users.
 *     responses:
 *       200:
 *         description: A list of admin users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Admin'
 */
router.get('/listall', adminController.listadmins);

/**
 * @swagger
 * /admins/{id}:
 *   get:
 *     summary: Get an admin by ID
 *     description: Retrieve an admin user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the admin to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Admin retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: Admin not found
 */
router.get('/:id', adminController.getadminbyID);


router.get('/:email', adminController.getAdminbyEmail);

/**
 * @swagger
 * /admins/{id}:
 *   put:
 *     summary: Update an admin by ID
 *     description: Update an admin user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the admin to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: Admin not found
 */
router.put('/:id', adminController.upadteadminbyid);

/**
 * @swagger
 * /admins/{id}:
 *   delete:
 *     summary: Delete an admin by ID
 *     description: Delete an admin user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the admin to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Admin deleted successfully
 *       404:
 *         description: Admin not found
 */
router.delete('/:id', adminController.deleteadminbyID);

module.exports = router;
