"use strict";
let arrOrig = [
    "Comision",
    "Honorable",
    "Oriunda",
    "Riojana",
    "En",
    "Ojotas"
];
let resultado = arrOrig.reduce((acum, z) => {
    let primeraLetra = z.charAt(0);
    return acum.concat(primeraLetra);
}, "");
console.log(resultado);
console.log(arrOrig.map(z => z.charAt(0)).join(''));
