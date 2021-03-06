const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const apiErrorHandler = require('./error/apiErrorHandler');
const useRoutes = require('./routes/useRoutes');
const { NODE_ENV } = require('./config');

const app = express();

const loggingMode = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(loggingMode));
app.use(helmet());
app.use(cors());

useRoutes(app);

app.use(apiErrorHandler);

module.exports = app;
