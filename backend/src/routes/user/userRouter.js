const express = require('express');
// const User = require('../../../models/User');
const { packResponse } = require('../../response/responsePackers');

const userRouter = express.Router();

userRouter.get('/', async ({ req, res, next }) => {
  const db = req.app.get('db');
  const users = await db.User.findAll();
  console.log(users);
  return packResponse(res, []);
});

module.exports = userRouter;
