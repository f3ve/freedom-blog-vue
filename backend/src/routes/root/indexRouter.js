const express = require('express');
const { packResponse } = require('../../response/responsePackers');

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
  packResponse(res, 'Hello, world!');
});

module.exports = indexRouter;
