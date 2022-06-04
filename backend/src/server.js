const app = require('./app');
const logger = require('./logger');
const { PORT } = require('./config');

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
