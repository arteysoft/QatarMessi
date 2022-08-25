let miFuncion = () => {
   console.log('Mi funcion')
}


/*
Aca se abre todo un mundo nuevo que es el de
functions as data
*/

let structure = numberValue => numberValue + 100

let myFunction = (operation, param1, param2) => {
   return operation(param1 + param1 + param1 * 10, param2)
}

let sumaSimple = (z1, z2) => z1 + z2
let convierteEnArray = (z1, z2) => [z1, z2]

let resultado = myFunction(convierteEnArray, 200, 5)

console.log(resultado)
