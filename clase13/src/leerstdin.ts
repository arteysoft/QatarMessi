import log4js from './lib/log4js'
import { exec } from 'child_process'

export let init = () => {
    exec('ls -allh', (err, salida) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(salida)
    })
}

// generar archivos con el proyecto de clase 1, 2
// leer los archivos, solo los nombres
// luego leerlos con cat, para posteriormente poder transferirlos.

