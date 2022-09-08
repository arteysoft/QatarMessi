import fs from 'fs'
import {EOL} from 'os'
import {crearObjetoFake as crearUsuario} from './lib/genusuario'
import {asyncForLoop} from './lib/asyncForLoop'

let generarArchivo = onFinish => {
   let carpeta = '/var/QatarMessi/'
   let objUsuario = crearUsuario()
   let nombreArchivo = objUsuario.id.concat('.json')
   let archivo = [carpeta, nombreArchivo].join('')
   let txtUsuario = JSON.stringify(objUsuario)

   fs.appendFile(archivo, txtUsuario+EOL, 'utf-8', (err) => {
      if (err) {
         console.log(err)
         return
      }
      console.log('parece que fue ok...')
      onFinish(null)
   })
}

export let generarArchivos = onFinish => {
   /*
   El problema que tenemos es que NO puedo hacer un
   for y combinarlo con una operacion asincronica.
   */
   asyncForLoop(2000, (nroCiclo, next, abort) => {
      console.log(nroCiclo)
      generarArchivo(err => {
         if (err) {
            console.log(err)
            return
         }
         next()
      })
   }, err => {
      console.log(err)
      console.log('Termino todo el loop...')
   })
}