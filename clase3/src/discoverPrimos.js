"use strict";
/* Obtener numeros primos. Dado un numero, tengo que probar si es divisible (se puede dividir de forma entera) por numeros primos hallados anteriormente.
* Si no es divisible es Primo
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.descubrirPrimosDel1Al10000 = exports.esPrimo = void 0;
let arrayPrimos = [];
let esPrimo = (arrayPrimos, number) => {
    if (number === 1) {
        throw new Error('No puede ser uno o dos, ya estan contemplados');
    }
    for (let i = 0; i < arrayPrimos.length; i++) {
        if (number % arrayPrimos[i] === 0) {
            return arrayPrimos;
        }
    }
    arrayPrimos.push(number);
    return arrayPrimos;
};
exports.esPrimo = esPrimo;
let descubrirPrimosDel1Al10000 = () => {
    for (let x = 2; x <= 10000; x++) {
        (0, exports.esPrimo)(x);
    }
    return [1, ...arrayPrimos];
};
exports.descubrirPrimosDel1Al10000 = descubrirPrimosDel1Al10000;
