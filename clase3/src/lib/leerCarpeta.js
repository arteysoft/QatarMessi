"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerDirectorio = void 0;
const fs_1 = __importDefault(require("fs"));
let leerDirectorio = (onFinish) => {
    console.log('carpeta actual: ' + __dirname);
    let carpeta = '/var/QatarMessi/';
    const archivos = fs_1.default.readdir(carpeta, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        onFinish(files.map(z => carpeta.concat(z)));
    });
};
exports.leerDirectorio = leerDirectorio;
