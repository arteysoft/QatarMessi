"use strict";
/*
map, filter, reduce son las tres funcionas
mas relevantes en la programacion funcional
*/
let fnTransformadora = z => z * 5;
let arrOrginal = [1, 2, 3, 4, 5, 6];
let otroArr = arrOrginal.map(z => z);
let otroMas = [...arrOrginal]; // spread operator
otroMas = arrOrginal;
arrOrginal.push(77);
console.log(otroArr);
console.log(otroMas);
/*
A filter le paso una funcion que se llama predicado
el predicado, es algo que SIEMPRE retorna true o false

Si es true, el elemento esta en el grupo de inclusion
si es false, el elemento esta fuera del grupo de inclusion
*/
let numerosEnteros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let filtroPar = z => z % 2 === 0;
let pares = numerosEnteros.filter(filtroPar);
let impares = numerosEnteros.filter(z => !filtroPar(z));
console.log('Filter');
console.log(pares);
console.log(impares);
/*
El reduce es:
dado un array, reduce toma el arr y una funcion acumuladora
*/
let arrReducir = [11, 11, 11, 11];
let suma = (acum, z) => acum + z;
let valorReducido = arrReducir.reduce(suma, 1000);
console.log('reduce');
console.log(valorReducido);
