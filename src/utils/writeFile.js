"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFileFun = void 0;
const fs_1 = __importDefault(require("fs"));
function writeFileFun({ writeFilePath, dataFile, getErr }) {
    fs_1.default.writeFile(writeFilePath, dataFile, getErr);
    return {
        writeFilePath,
        dataFile,
        getErr
    };
}
exports.writeFileFun = writeFileFun;
