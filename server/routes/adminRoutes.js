const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const Admin = require('../models/adminModel');


router.post('/new', adminController.creatnewadmin);


router.get('/listall', adminController.listadmins);


router.get('/:id', adminController.getadminbyID);


router.get('/:email', adminController.getAdminbyEmail);


router.put('/:id', adminController.upadteadminbyid);


router.delete('/:id', adminController.deleteadminbyID);

module.exports = router;
