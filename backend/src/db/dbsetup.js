const db = require('.');
const logger = require('../logger');

async function reset() {
  logger.info('Starting database sync...');

  await db.sync({ force: true });

  logger.info('Finished syncing database');
}

reset();
