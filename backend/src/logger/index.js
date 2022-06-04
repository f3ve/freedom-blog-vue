const { NODE_ENV } = require('../config');
const createDevLogger = require('./devLogger');
const createProdLogger = require('./prodLogger');

const logger =
  NODE_ENV === 'development' ? createDevLogger() : createProdLogger();

module.exports = logger;
