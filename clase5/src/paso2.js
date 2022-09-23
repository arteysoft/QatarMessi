"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paso2 = void 0;
const leerCarpeta_1 = require("./lib/leerCarpeta");
const asyncForLoop_1 = require("./lib/asyncForLoop");
const leerArchivo_1 = require("./lib/leerArchivo");
const mongocli_1 = require("./lib/mongocli");
const borrarArchivo_1 = require("./lib/borrarArchivo");
let imprimirRetornar = x => {
    console.log(x);
    return x;
};
let paso2 = onFinish => {
    (0, leerCarpeta_1.leerDirectorioPromise)()
        .then((data) => {
        (0, asyncForLoop_1.asyncForLoop)(data.length, (idx, next, abort) => {
            let archivo = data[idx];
            (0, leerArchivo_1.leerArchivo)(archivo)
                .then(z => JSON.parse(z))
                .then(z => imprimirRetornar(z))
                .then(z => (0, mongocli_1.insertPromise)('QatarMessi', 'usuarios', z))
                .then(na => (0, borrarArchivo_1.borrarArchivoPromise)(archivo))
                .then(next)
                .catch(err => {
                abort(err);
            });
        }, err => {
            console.log(err);
        });
    });
};
exports.paso2 = paso2;
