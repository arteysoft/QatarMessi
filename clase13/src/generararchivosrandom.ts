import fs from 'fs'
import {EOL} from 'os'
import {crearObjetoFake as crearUsuario} from './lib/genusuario'
import * as util from 'node:util'

let appendFilePromise = util.promisify(fs.appendFile)

let generarArchivo = async () => {
   let carpeta = '/var/QatarMessi/'
   let objUsuario = crearUsuario()
   let nombreArchivo = objUsuario.id.concat('.json')
   let archivo = [carpeta, nombreArchivo].join('')
   let txtUsuario = JSON.stringify(objUsuario)

   await appendFilePromise(archivo, txtUsuario+EOL, 'utf-8')
}

export let generarArchivos = async () => {
    try {
        for (let x=1; x <= 2000; x++) {
            console.log('generando ... ' + x)
            await generarArchivo()
        }
    }
    catch (err) {
        console.log(err)
        console.log('Termino todo el loop...')
    }
}