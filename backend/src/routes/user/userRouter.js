const express = require('express');
const logger = require('../../logger');
const { packResponse } = require('../../response/responsePackers');

const userRouter = express.Router();

userRouter.get('/', ({ req, res, next }) => {
  packResponse(res, 'Hello from the user index endpoint!');
});

module.exports = userRouter;
