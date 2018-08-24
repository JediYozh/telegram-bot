import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(format.colorize(), format.splat(), format.simple()),
  transports: [new transports.File({ filename: 'winston.log', level: 'error' })],
});

if (process.env.NODE_ENV !== 'test') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}

export default logger;
