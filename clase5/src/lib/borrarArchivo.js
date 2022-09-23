"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarArchivoPromise = void 0;
const fs_1 = __importDefault(require("fs"));
let borrarArchivoPromise = pathArchivo => {
    return new Promise((resolve, reject) => {
        fs_1.default.unlink(pathArchivo, (err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(null);
        }));
    });
};
exports.borrarArchivoPromise = borrarArchivoPromise;
