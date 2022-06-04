require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const apiErrorHandler = require('./error/apiErrorHandler');
const { NODE_ENV } = require('./config');

const app = express();

const loggingMode = NODE_ENV === 'production' ? 'tiny' : 'common';

// Add middleware
app.use(morgan(loggingMode));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(apiErrorHandler);

module.exports = app;
