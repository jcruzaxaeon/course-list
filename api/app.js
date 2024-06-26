//  app.js

'use strict';

// load modules
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const { sequelize } = require('./models');

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app
const app = express();

app.use(cors()); //Enables *all* CORS requests

// setup morgan which gives us http request logging
app.use(morgan('dev'));

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
   res.json({
      message: 'Welcome to the REST API project!',
   });
});

// Add routes
app.use('/api', routes);  //BOOKMARK

// send 404 if no other route matched
app.use((req, res) => {
   res.status(404).json({
      message: 'Route Not Found',
   });
});

// setup a global error handler
app.use((err, req, res, next) => {
   let errors = [];
   
   if (enableGlobalErrorLogging) {
      console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
   }

   if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
      errors = err.errors.map(e => e.message);
      // console.log(errors);
      // res.status(400).json({ errors });
      err.status = 400;
   }


   res.status(err.status || 500).json({
      msg: err.message,
      errors: err.errs,
   });
});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
   console.log(`Express server is listening on port ${server.address().port}`);
});

// Test the database connection
(async () => {
   try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
   } catch (error) {
      console.error('Unable to connect to the database:', error);
   }
})();
