"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyRank = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const config_1 = require("../config");
const helpers_1 = require("../utils/helpers");
const getMyRank = async (req, res, next) => {
    const finalScore = Number(req.body.finalScore);
    if (!finalScore || finalScore < 0 || isNaN(finalScore)) {
        return next(new AppError_1.default(`Bad Request: Must Provide 0 or a positive Final Score In The Request Body`, 400));
    }
    try {
        const data = await promises_1.default.readFile(config_1.dataPath, 'utf-8');
        const scoresList = JSON.parse(data).scoresList;
        const rank = (0, helpers_1.calcRank)(finalScore, scoresList);
        console.log({ finalScore, rank });
        res.send({ rank });
    }
    catch (err) {
        next(new AppError_1.default('That Error Occurred 👉🏼 ' + err, 404));
    }
};
exports.getMyRank = getMyRank;
