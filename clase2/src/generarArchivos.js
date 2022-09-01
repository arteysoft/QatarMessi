"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarArchivos = void 0;
const fs_1 = __importDefault(require("fs"));
const os_1 = require("os");
let generarArchivos = onFinish => {
    let carpeta = '/var/QatarMessi/';
    let archivo = carpeta.concat('unArchivo.txt');
    fs_1.default.appendFile(archivo, new Date() + '' + os_1.EOL, 'utf-8', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('parece que fue ok...');
        onFinish(null);
    });
};
exports.generarArchivos = generarArchivos;
