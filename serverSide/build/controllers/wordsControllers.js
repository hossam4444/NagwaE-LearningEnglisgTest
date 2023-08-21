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
const isCorrect = async (req, res, next) => {
    // request data
    const { answer } = req.body;
    let wordId = parseInt(req.body.wordId);
    console.log({ answer, wordId });
    try {
        if (!wordId || !answer) {
            throw new AppError_1.default('Bad Request 🧐 Please provide a valid word ID number and answer', 400);
        }
        // get the words list from the DB
        const wordsList = JSON.parse(await promises_1.default.readFile(config_1.dataPath, 'utf-8')).wordList;
        // get the required Word usind wordId from the request
        const currentWord = wordsList.find((word) => word.id === wordId);
        if (!currentWord) {
            throw new AppError_1.default('Bad Request Wrong word ID', 400);
        }
        console.log(currentWord);
        const isCorrect = currentWord.pos === answer ? true : false;
        if (isCorrect) {
            res.send('Correct');
        }
        else {
            res.send('Not Correct');
        }
    }
    catch (error) {
        next(error);
    }
};
exports.isCorrect = isCorrect;
