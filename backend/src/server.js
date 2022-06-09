const app = require('./app');
const db = require('./db');
const logger = require('./logger');
const { PORT } = require('./config');

async function assertDatabaseConnectionOk() {
  logger.info('Checking database connection...');
  try {
    await db.authenticate();
    logger.info('Database connection is okay!');
  } catch (err) {
    logger.error('Unable to connect to the database');
    logger.error(err);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  logger.info(`Starting server on port ${PORT}...`);

  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
}

init();
