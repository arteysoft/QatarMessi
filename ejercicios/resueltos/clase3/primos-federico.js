const primos = [2];

const findPrimos = n => {
    let isPrimo = true;
    primos.forEach(primo => {
        if (n % primo === 0) isPrimo = false;
    })
    isPrimo ? primos.push(n) : ''
}

let numeros = [3,4,5,6,7,8,9,10,11,12,13,14,15]

numeros.forEach(n => findPrimos(n))

console.log(primos)

