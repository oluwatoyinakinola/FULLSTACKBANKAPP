const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate a user
 *     description: Authenticate a user based on their email, password, and userType.
 *     parameters:
 *       - name: email
 *         in: formData
 *         required: true
 *         type: string
 *         description: User's email address.
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *         description: User's password.
 *       - name: userType
 *         in: formData
 *         required: true
 *         type: string
 *         description: Type of user (admin, customer, staff).
 *     responses:
 *       200:
 *         description: User is authenticated successfully.
 *       401:
 *         description: Authentication failed.
 *       500:
 *         description: Internal server error.
 */
router.post('/authenticate', loginController.authenticateUser);

module.exports = router;