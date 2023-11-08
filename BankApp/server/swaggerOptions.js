const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = require('./swaggerDefinition');

const options = {
  swaggerDefinition,
  apis: ['routes/adminRoutes.js'], // Path to your API routes
};

module.exports = swaggerJsdoc(options);
