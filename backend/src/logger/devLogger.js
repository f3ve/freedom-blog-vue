const { createLogger, format, transports } = require('winston');
const { printf, combine, timestamp, colorize, errors } = format;

const printFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

function createDevLogger() {
  return createLogger({
    level: 'debug',
    format: combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      printFormat
    ),
    transports: [new transports.Console()],
  });
}

module.exports = createDevLogger;
