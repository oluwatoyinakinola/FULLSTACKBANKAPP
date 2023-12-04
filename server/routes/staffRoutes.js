const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

router.post('/new', staffController.createStaff);


router.get('/listall', staffController.listAllStaff);

router.put('/:email', staffController.getStaffbyEmail);

module.exports = router;
