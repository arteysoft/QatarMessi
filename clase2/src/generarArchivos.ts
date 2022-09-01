import fs from 'fs'
import {EOL} from 'os'

export let generarArchivos = onFinish => {
   let carpeta = '/var/QatarMessi/'
   let archivo = carpeta.concat('unArchivo.txt')

   fs.appendFile(archivo, new Date()+''+EOL, 'utf-8', (err) => {
      if (err) {
         console.log(err)
         return
      }
      console.log('parece que fue ok...')
      onFinish(null)
   })
}