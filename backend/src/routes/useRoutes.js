const { API_URL } = require('../config');
const indexRouter = require('./root/indexRouter');

function useRoutes(app) {
  app.use('/', indexRouter);
}

module.exports = useRoutes;
