const { API_URL } = require('../config');
const indexRouter = require('./root/indexRouter');
const userRouter = require('./user/userRouter');

function useRoutes(app) {
  app.use('/', indexRouter);
  app.use(`${API_URL}/users`, userRouter);
}

module.exports = useRoutes;
