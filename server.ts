import express from 'express';
import logger from './utils/logger';

import dotenv from 'dotenv';

dotenv.config();

const server = express();

const port = 8080;

server.listen(port, () => {
  logger.log('info', `Server is running on port ${port}`);
});
