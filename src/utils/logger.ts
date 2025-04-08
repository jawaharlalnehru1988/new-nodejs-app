import winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // Minimum level of logs to record
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }), // Include stack trace for errors
    winston.format.splat(),
    winston.format.json() // Log as JSON
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple() // More readable output in console
      ),
    }),
    // You can add more transports for logging to files, databases, etc.
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ],
});

export default logger;