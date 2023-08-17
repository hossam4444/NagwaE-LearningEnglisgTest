"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wordsControllers_1 = require("../controllers/wordsControllers");
const router = express_1.default.Router();
router.get('/', wordsControllers_1.getWords);
router.post('/', wordsControllers_1.isCorrect);
exports.default = router;
