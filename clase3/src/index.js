"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discoverPrimos_1 = require("./discoverPrimos");
/*
generarArchivos(err => {
   console.log('el resultado del callback es: ' + err)
})
*/
/*
leerDirectorio(fls => {
   console.log(fls)
})
*/
let res = (0, discoverPrimos_1.esPrimo)([2, 3, 5, 7], 16);
console.log(res);
