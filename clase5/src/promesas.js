"use strict";
let funcionAsincronica = (onFinish) => {
};
let funcionSincronica = (subIndice) => {
    console.log('funcion Sincronica: ' + subIndice);
    if (subIndice === 4) {
        throw 'MOTIVO DEL ERROR';
    }
    return subIndice + 1;
};
let promiseWrapper = (subIndice) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ya termino la funcion asincronica: ' + subIndice);
            resolve(subIndice + 1);
        }, 2000);
    });
};
promiseWrapper(1)
    .then(promiseWrapper)
    .then(promiseWrapper)
    .then(funcionSincronica)
    .then(promiseWrapper)
    .then(promiseWrapper)
    .then(promiseWrapper)
    .catch((err) => {
    console.log('ESTOY EN EL CATCH !!!!');
    console.log(err);
});
