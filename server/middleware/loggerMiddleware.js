// Middleware function to log incoming requests

function loggerMiddleware(req, res, next) {
    console.log(`Received ${req.method} request at ${req.url} request body ${req.body}`);
    next(); 
  }
  
  module.exports = loggerMiddleware;
  