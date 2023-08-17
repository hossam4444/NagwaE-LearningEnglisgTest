"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCorrect = exports.getWords = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const config_1 = require("../config");
const helpers_1 = require("../utils/helpers");
const getWords = async (req, res, next) => {
    try {
        const data = await promises_1.default.readFile(config_1.dataPath, 'utf-8');
        const wordsList = JSON.parse(data).wordList;
        const selectedWords = (0, helpers_1.getRandomWords)(wordsList, 10).map((wordObj) => {
            return { id: wordObj.id, word: wordObj.word };
        });
        res.send(selectedWords);
    }
    catch (err) {
        next(new AppError_1.default('That Error Occurred 👉🏼 ' + err, 404));
    }
};
exports.getWords = getWords;
const isCorrect = (req, res, next) => {
    const { wordId } = req.body;
    console.log(wordId);
    try {
        if (!wordId) {
            throw new AppError_1.default('Bad Request 🧐 Please provide a valid word ID number', 400);
        }
        res.send({
            wordId,
            message: 'Is Correct True = Correct 🎉 \n false = Not Correct 😥',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.isCorrect = isCorrect;
