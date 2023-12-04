const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');



router.post('/new', transactionController.createTransaction);



router.get('/listall',transactionController.listTransactions );


router.get('/:id',transactionController.getTransactionById);


// router.put('/:id', transactionController.updateTransactionById);


// router.delete('/:id', transactionController.deleteTransactionById);


module.exports = router;
