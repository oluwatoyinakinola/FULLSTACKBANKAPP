const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');


router.post('/authenticate', loginController.authenticateUser);

module.exports = router;