import {generarArchivos} from './generarArchivos'
import {leerDirectorio} from './lib/leerCarpeta'
import { esPrimo } from './discoverPrimos'

/*
generarArchivos(err => {
   console.log('el resultado del callback es: ' + err)
})
*/

/*
leerDirectorio(fls => {
   console.log(fls)
})
*/

let res = esPrimo([2, 3, 5, 7], 16)
console.log(res)
