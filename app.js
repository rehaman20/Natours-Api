//Third-party modules
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

//User-defined modules
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const appError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

//Global Middleware Stack

//Set Security HTTP Headers
app.use(helmet());

//Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
});

//Limit requests from same Api
app.use('/api', limiter);

//Body-parser, allows accessing data from req.body
app.use(express.json({ limit: '10kb' }));

//Data sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitization against XSS (side script injection)
app.use(xss());

//Preventing parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

//Serving static files
app.use(express.static('public'));

//User-defined Middleware (Test Middleware)
app.use((req, res, next) => {
  console.log('Hello from the Middle-ware');
  next();
});

//Routing
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//Handling errors for undefined routes
app.all('*', (req, res, next) => {
  next(new appError(`Cant find ${req.originalUrl} on this server`, 404));
});

//Global Error Handling Middleware
app.use(globalErrorHandler);

module.exports = app;
