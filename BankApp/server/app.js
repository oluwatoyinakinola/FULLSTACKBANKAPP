const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes');
const loginRoutes = require('./routes/loginRoutes');
const customerRoutes = require('./routes/customerRoutes');
const staffRoutes = require('./routes/staffRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware'); 
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express'); 
const swaggerSpec = require('./swaggerOptions'); 
const cors = require('cors');


dotenv.config();

const app = express();

app.use(cors());
const mongoURI = 'mongodb://10.10.2.117:27017/BANKAPPLICATTION';


// Connect to your MongoDB database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Handling database connection errors
mongoose.connection.on('error', (error) => {
  console.error('MongoDB Connection Error:', error);
});

// Handling successful database connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database');
});


// Middleware to parse JSON requests
app.use(express.json());

// Apply the logger middleware to all routes
app.use(loggerMiddleware);

// Setting up Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use the routes for each model
app.use('/api/admin', adminRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/user', userRoutes);
app.use('/api/login', loginRoutes);



// Starting the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
