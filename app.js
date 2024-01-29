const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRoute = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  // console.log(`Request received: ${req.method}, ${req.url}`);
  req.requestTime = new Date().toISOString();
  next(); // Call next to pass control to the next middleware
});

// tours route

app.use('/api/v1/tour', tourRoute);
app.use('/api/v1/user', userRoute);

module.exports = app;
