import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const CreateTransactionForm = () => {

  const email = sessionStorage.getItem('email');
  
  const accountbalance = sessionStorage.getItem('accountbalance');
  const userType = sessionStorage.getItem('userType');
  let requestBody ;

  let accountNumber;

  if (userType === 'admin') {
    accountNumber = '12345678';
  } else {
    accountNumber = sessionStorage.getItem('accountNumber');
  }

  const [recipientAccount, setRecipientAccount] = useState('');

  const [amount, setAmount] = useState(0);

  const [senderAccount, setSenderAccount] = useState('');

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleCreateTransaction = async (e) => {

    e.preventDefault();

 console.log('UserType',userType );

 

 

    const transactionbalance = ((accountbalance * 1) - amount);

    if (transactionbalance < 0) {
      setError("Insufficient Funds.");
      return;

    }

    // Validate form inputs
    if (!accountNumber || !recipientAccount || !amount) {
      setError('Please fill out all fields');
      return;
    }




    // Clear previous errors
    setError('');
    setSuccess('');

    console.log('Sender Account Number --> ', senderAccount);
    console.log('Sender Account Number --> ', accountNumber);

    console.log('Reciever Account Number --> ', recipientAccount);

    if (userType == 'admin') {

       
       requestBody = {
        senderaccountnumber: '12345678',
        recipientaccountnumber: recipientAccount,
        amount: parseFloat(amount), 
      };
   
     }else{

     requestBody = {
      senderaccountnumber: accountNumber,
      recipientaccountnumber: recipientAccount,
      amount: parseFloat(amount), 
    };
    // sending a POST request to your server to create a transaction

  }
    console.log('Request Body --> ', requestBody);


    const response = await fetch('http://localhost:4500/api/transaction/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.status === 201) {

      setSuccess('Transaction Sucessful!!');
    } else {

      console.log('Transaction creation failed');
    }
  };

  return (

    <div className="container-fluid d-flex align-items-center justify-content-center  " style={{ backgroundColor: 'steelblue' }}>

    <div className="container-fluid p-5 bg-steelblue rounded">

    <Link to="../customer" className="btn btn-success mb-1 font-weight-bold">Back to Homepage</Link>
    
      <br />
      
      
      <br />
      <Link to="../logout" className='btn btn-success mb-3 font-weight-bold'>Log Out</Link>

      <br/>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleCreateTransaction}>
        <div className="mb-2">
          <label htmlFor="senderAccount" className="form-label  mb-3 text-white ">My Account Number:</label>
          <input
            readOnly
            type="text"
            id="accountnumber"
            value={accountNumber}
            onChange={(e) => setSenderAccount(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className=" btn btn-success mb-3">
          <label htmlFor="recipientAccount" className="form-label text-center text-white">Recipient Account Number:</label>
          <input
            type="text"
            id="recipientAccount"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="text-center text-white form-label">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            required
          />

        </div>

        <div className="mb-3 text-center">

        <button type="submit" className="btn btn-success">Create Transaction</button>

        </div>

      </form>

      </div>

    </div>
  );
};

export default CreateTransactionForm;
