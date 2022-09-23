"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerDirectorioPromise = exports.leerDirectorio = void 0;
const fs_1 = __importDefault(require("fs"));
const promisify_1 = require("./promisify");
let leerDirectorio = (onFinish) => {
    console.log('carpeta actual: ' + __dirname);
    let carpeta = process.env.PATH_ARCHIVOS_USUARIO;
    const archivos = fs_1.default.readdir(carpeta, (err, files) => {
        if (err) {
            onFinish(err);
            return;
        }
        onFinish(null, files.map(z => carpeta.concat("/").concat(z)));
    });
};
exports.leerDirectorio = leerDirectorio;
let leerDirectorioPromise = () => {
    return (0, promisify_1.promisify)(exports.leerDirectorio.bind(null));
};
exports.leerDirectorioPromise = leerDirectorioPromise;
