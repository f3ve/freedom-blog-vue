require('dotenv').config();
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_USER_NAME = process.env.DB_USER_NAME;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;
const DB_DIALECT = process.env.DB_DIALECT;
const API_URL = '/api/v1';

module.exports = {
  PORT,
  NODE_ENV,
  API_URL,
  DB_NAME,
  DB_HOST,
  DB_USER_NAME,
  DB_USER_PASSWORD,
  DB_DIALECT,
};
