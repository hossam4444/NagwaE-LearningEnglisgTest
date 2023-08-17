"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.portNumber = exports.hostName = exports.dataPath = void 0;
const path_1 = __importDefault(require("path"));
// any Secret Data Shall be Stored As Env Variables
const dataPath = path_1.default.join(__dirname, 'DB_like', 'TestData.json');
exports.dataPath = dataPath;
const hostName = '127.0.0.1';
exports.hostName = hostName;
const portNumber = 3000;
exports.portNumber = portNumber;
