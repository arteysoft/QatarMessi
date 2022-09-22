"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const asyncForLoop_1 = require("./lib/asyncForLoop");
let leerDirectorio = () => {
    return new Promise((resolve, reject) => {
        let carpeta = '/var/QatarMessi/';
        const archivos = fs_1.default.readdir(carpeta, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(files.map(z => carpeta.concat(z)));
        });
    });
};
let leerArchivos = (arrDir) => {
    return new Promise((resolve, reject) => {
        let allJsonData = [];
        (0, asyncForLoop_1.asyncForLoop)(arrDir.length, (idx, next, abort) => {
            let pathArch = arrDir[idx];
            fs_1.default.readFile(pathArch, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(idx);
                allJsonData.push(data);
                next();
            });
        }, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            resolve(allJsonData);
        });
    });
};
let mostrarError = err => {
    console.log(err);
};
let mostrarArchivos = (arrArch) => {
    console.log('ANTES');
    arrArch.forEach(element => {
        console.log(element);
    });
    console.log('DESPUES');
};
let solucionEjercicio2 = () => {
    leerDirectorio()
        .then(leerArchivos)
        .then(mostrarArchivos)
        .catch(mostrarError);
};
solucionEjercicio2();
