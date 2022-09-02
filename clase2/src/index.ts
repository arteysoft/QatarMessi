import {generarArchivos} from './generarArchivos'
import {leerDirectorio} from './lib/leerCarpeta'

/*
generarArchivos(err => {
   console.log('el resultado del callback es: ' + err)
})
*/

leerDirectorio(fls => {
   console.log(fls)
})
