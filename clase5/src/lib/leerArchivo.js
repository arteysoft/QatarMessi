"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerArchivo = void 0;
const fs_1 = __importDefault(require("fs"));
let leerArchivo = (pathArchivo) => {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(pathArchivo, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};
exports.leerArchivo = leerArchivo;
