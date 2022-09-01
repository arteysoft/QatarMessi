"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generarArchivos_1 = require("./generarArchivos");
(0, generarArchivos_1.generarArchivos)(err => {
    console.log('el resultado del callback es: ' + err);
});
