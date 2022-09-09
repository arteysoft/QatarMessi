/* Obtener numeros primos. Dado un numero, tengo que probar si es divisible (se puede dividir de forma entera) por numeros primos hallados anteriormente.
* Si no es divisible es Primo
*/

let arrayPrimos:number[] = [];

export let esPrimo = (arrayPrimos, number) => {
   if (number === 1) {
      throw new Error('No puede ser uno o dos, ya estan contemplados')
   }
   for (let i = 0; i < arrayPrimos.length; i++) {
        if (number % arrayPrimos[i] === 0) {
            return arrayPrimos
        }
   }
   arrayPrimos.push(number);
   return arrayPrimos
}

export let descubrirPrimosDel1Al10000 = () => {
   for (let x = 2; x <= 10000; x++) {
      esPrimo(x)
   }
   return [1, ...arrayPrimos]
}


