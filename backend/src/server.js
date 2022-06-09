const app = require('./app');
const db = require('../models');
const logger = require('./logger');
const { PORT } = require('./config');

async function assertDatabaseConnectionOk() {
  logger.info('Checking database connection...');
  try {
    await db.sequelize.authenticate();
    logger.info('Database connection is okay!');
  } catch (err) {
    logger.error('Unable to connect to the database');
    logger.error(err);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  logger.info(`Starting server on port ${PORT}...`);

  app.set('db', db);

  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
}

init();
