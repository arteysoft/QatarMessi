/* Obtener numeros primos. Dado un numero, tengo que probar si es divisible (se puede dividir de forma entera) por numeros primos hallados anteriormente. 
* Si no es divisible es Primo 
*/

let arrayPrimos = [2,3,5,7];

let discoverPrimos = (number) => {
    for (let i = 0; i < arrayPrimos.length; i++) {

        if(number % arrayPrimos[i] == 0) {
            console.log('No es un numero primo');
            return;
        }
        if(number == arrayPrimos[i]) {
            console.log('Ya existe el numero')
            return;
        }
        
    }
    return arrayPrimos.push(number);
}

discoverPrimos(4);
discoverPrimos(7);
discoverPrimos(23);
discoverPrimos(11);
discoverPrimos(13);
discoverPrimos(15);
discoverPrimos(18);
discoverPrimos(19);
discoverPrimos(21);


console.log(arrayPrimos);