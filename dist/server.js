"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utils/logger"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = express_1.default();
const port = 8080;
server.listen(port, () => {
    logger_1.default.log('info', `Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map