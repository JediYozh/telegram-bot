"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.splat(), winston_1.format.simple()),
    transports: [new winston_1.transports.File({ filename: 'winston.log', level: 'error' })],
});
if (process.env.NODE_ENV !== 'test') {
    logger.add(new winston_1.transports.Console({
        format: winston_1.format.simple(),
    }));
}
exports.default = logger;
//# sourceMappingURL=logger.js.map