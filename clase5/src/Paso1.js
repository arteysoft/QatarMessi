"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paso1 = void 0;
const leerCarpeta_1 = require("./lib/leerCarpeta");
const asyncForLoop_1 = require("./lib/asyncForLoop");
const leerArchivo_1 = require("./lib/leerArchivo");
let paso1 = onFinish => {
    (0, leerCarpeta_1.leerDirectorioPromise)()
        .then((data) => {
        (0, asyncForLoop_1.asyncForLoop)(data.length, (idx, next, abort) => {
            let archivo = data[idx];
            (0, leerArchivo_1.leerArchivo)(archivo)
                .then(z => console.log(z))
                .then(next)
                .catch(err => {
                abort(err);
            });
        }, err => {
            console.log(err);
        });
    });
};
exports.paso1 = paso1;
