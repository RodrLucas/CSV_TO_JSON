"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const fs_1 = __importDefault(require("fs"));
function readFile({ readFilePath, readFileOptions, readFileCallBack }) {
    fs_1.default.readFile(readFilePath, readFileOptions, readFileCallBack);
    return {
        readFilePath,
        readFileOptions,
        readFileCallBack
    };
}
exports.readFile = readFile;
