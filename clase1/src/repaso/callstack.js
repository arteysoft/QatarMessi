"use strict";
let fn6 = () => {
    console.log('Llegue a FN6');
    let x = () => console.log('Ejecutar una funcion');
    setTimeout(x, 0);
};
let fn5 = () => {
    console.log('antes de llamar a fn6');
    fn6();
    console.log('despues de llamar a fn6');
};
let fn4 = () => {
    console.log('antes de llamar a fn5');
    fn5();
    console.log('despues de llamar a fn5');
};
let fn3 = () => {
    console.log('antes de llamar a fn4');
    fn4();
    console.log('despues de llamar a fn4');
};
let fn2 = () => {
    console.log('antes de llamar a fn3');
    fn3();
    console.log('despues de llamar a fn3');
};
let fn1 = () => {
    console.log('antes de llamar a fn2');
    fn2();
    console.log('despues de llamar a fn2');
};
setTimeout(() => { console.log('antes de fn1'); }, 0);
fn1();
