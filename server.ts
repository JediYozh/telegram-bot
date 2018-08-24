import * as express from 'express';
import logger from './utils/logger';

const server = express();

const port = 8080;

server.listen(port, () => {
  logger.log('info', `Server is running on port ${port}`);
});
