"use strict";
let myFunction = (every10) => {
    for (let x = 0; x < 1000000; x++) {
        if (x % 10 === 0) {
            every10(x);
        }
    }
};
let myFunctionAsync = (next) => {
    setTimeout(() => {
        console.log('paso 1');
        next();
    }, 2000);
};
console.log('ORDEN 1');
myFunctionAsync(() => console.log('.'));
console.log('ORDEN 2');
