const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const Customer = require('../models/customerModel');


router.post('/new', customerController.createnewCustomer);


// router.post('/listall', customerController.listallcustomers);


router.get('/listall', customerController.listAllCustomers);


router.get('/:accountnumber', customerController.getCustomerByAccountNumber);



router.put('/:accountnumber', customerController.updateCustomerbyID);


router.delete('/:accountnumber',customerController.deleteCustomerbyID );


router.post('/login', customerController.customerLogin);


router.post('/:email', customerController.getCustomerByEmail);

module.exports = router;


