"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarArchivos = void 0;
const fs_1 = __importDefault(require("fs"));
const os_1 = require("os");
const genusuario_1 = require("./lib/genusuario");
let generarArchivo = onFinish => {
    let carpeta = '/var/QatarMessi/';
    let objUsuario = (0, genusuario_1.crearObjetoFake)();
    let nombreArchivo = objUsuario.id.concat('.json');
    let archivo = [carpeta, nombreArchivo].join('');
    let txtUsuario = JSON.stringify(objUsuario);
    fs_1.default.appendFile(archivo, txtUsuario + os_1.EOL, 'utf-8', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('parece que fue ok...');
        onFinish(null);
    });
};
let generarArchivos = onFinish => {
    /*
    El problema que tenemos es que NO puedo hacer un
    for y combinarlo con una operacion asincronica.
    */
};
exports.generarArchivos = generarArchivos;
