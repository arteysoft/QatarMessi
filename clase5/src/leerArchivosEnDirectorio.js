"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solucionEjercicio1 = exports.ejercicio1 = void 0;
const leerCarpeta_1 = require("./lib/leerCarpeta");
const fs = __importStar(require("fs"));
const asyncForLoop_1 = require("./lib/asyncForLoop");
let ejercicio1 = () => {
    (0, leerCarpeta_1.leerDirectorio)(fls => {
        (0, asyncForLoop_1.asyncForLoop)(fls.length, (idx, next, abort) => {
            let pathArch = fls[idx];
            fs.readFile(pathArch, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(idx);
                console.log(data);
                next();
            });
        }, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
};
exports.ejercicio1 = ejercicio1;
/////////////////////////////////////////////////////
let leerDirectorioPromise = () => {
    return new Promise((resolve, reject) => {
        let carpeta = '/var/QatarMessi/';
        const archivos = fs.readdir(carpeta, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(files.map(z => carpeta.concat(z)));
        });
    });
};
let leerFilePromise = (pathArch) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathArch, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};
let mostrarArchivos = (arrDir) => {
    arrDir.forEach(element => {
        console.log(element);
    });
    return arrDir;
};
let mostrarError = err => {
    console.log('------------------------');
    console.log(err);
    console.log('------------------------');
    return err;
};
let intercalarLinea = z => {
    console.log('*************************');
    console.log(z);
    return z;
};
let iterarSobreLosArchivos = (arr) => {
    return new Promise((resolve, reject) => {
        (0, asyncForLoop_1.asyncForLoop)(arr.length, (idx, next) => {
            leerFilePromise(arr[idx])
                .then(intercalarLinea)
                .then(intercalarLinea)
                .then(next)
                .catch(reject);
        }, () => { });
    });
};
let solucionEjercicio1 = () => {
    leerDirectorioPromise()
        .then(mostrarArchivos)
        .then(iterarSobreLosArchivos)
        .catch(mostrarError);
};
exports.solucionEjercicio1 = solucionEjercicio1;
