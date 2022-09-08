"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leerCarpeta_1 = require("./lib/leerCarpeta");
/*
generarArchivos(err => {
   console.log('el resultado del callback es: ' + err)
})
*/
(0, leerCarpeta_1.leerDirectorio)(fls => {
    console.log(fls);
});
