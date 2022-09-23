"use strict";
/*
Si se dan cuenta, para hacer un promise, siempre recurro a la misma
estrategia, repetitiva.
Como salir de esa estrategia.
1) Buscar librerias que tengan su version en promise
2) Hacer nuestra Promisify

Pasos para armar nuestra propia Promisify

1) Entender curry o partial application
2) Hacer el temlate

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.paso3 = void 0;
const promisify_1 = require("./lib/promisify");
let log = x => console.log(x);
let insertMongo = (base, collection, doc, onFinish) => {
    log('voy a insertar en mongodb');
    log(base);
    log(collection);
    log(doc);
    setTimeout(() => {
        onFinish(null, 'OK');
    }, 2000);
};
let insertMongoPromise = () => {
    let fpa = insertMongo.bind(null, 'QatarMessi', 'usuarios', { hola: 'mundo' });
    return (0, promisify_1.promisify)(fpa);
};
let paso3 = () => {
    let suma = (x, y) => {
        return x + y;
    };
    /*
    log(suma(10, 10))
    log(suma.call(null, 1, 44))
    log(suma.apply(null, [55, 66]))
    log(suma.bind(null, 9, 9)())
    */
    let suma10 = suma.bind(null, 10);
    let suma1000 = suma.bind(null, 1000);
    insertMongoPromise()
        .then(z => log(z));
};
exports.paso3 = paso3;
