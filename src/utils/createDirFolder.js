"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirFolder = void 0;
const path = require('path');
const fs_1 = __importDefault(require("fs"));
function createDirFolder({ newFolderPath, getErrFolderPath }) {
    fs_1.default.mkdir(newFolderPath, getErrFolderPath);
    return {
        newFolderPath,
        getErrFolderPath
    };
}
exports.createDirFolder = createDirFolder;
