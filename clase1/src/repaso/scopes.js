"use strict";
// scopes var
function fn() {
    var variable1 = 'hola mundo';
    console.log(variable1);
    for (let z of [1, 2, 4]) {
        console.log(variable1);
    }
}
let fn2 = () => {
    let variable2 = 'hola variable let';
    {
        variable2 = 'hola ';
    }
    variable2 = 'hola ';
};
{
    const CONST1 = 'UNA CONSTANTE';
    CONST1 = '';
}
