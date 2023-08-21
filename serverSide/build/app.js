"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
require("express-async-errors");
const wordsRoutes_1 = __importDefault(require("./routes/wordsRoutes"));
const rankRoutes_1 = __importDefault(require("./routes/rankRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/words', wordsRoutes_1.default);
app.use('/rank', rankRoutes_1.default);
// Global error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.sendStatus(statusCode).send({
        status: statusCode,
        message: err?.message || 'Internal Server Error!',
        errors: err?.errors || [],
    });
});
app.listen(config_1.portNumber, config_1.hostName, () => {
    console.log(`Server is Running at ${config_1.hostName}:${config_1.portNumber}`);
});
