import {leerDirectorio} from './lib/leerCarpeta'
import * as fs from 'fs'
import { asyncForLoop } from './lib/asyncForLoop'

export let ejercicio1 = () => {
   leerDirectorio(fls => {
      asyncForLoop(fls.length, (idx, next, abort) => {
         let pathArch = fls[idx]
         fs.readFile(pathArch, 'utf-8', (err, data) => {
            if (err) {
               console.log(err)
               return
            }
            console.log(idx)
            console.log(data)
            next()
         })
      }, (err) => {
         if (err) {
            console.log(err)
            return
         }
      })
   })
}

/////////////////////////////////////////////////////

let leerDirectorioPromise = () => {
   return new Promise((resolve, reject) => {
      let carpeta = '/var/QatarMessi/'

      const archivos = fs.readdir(carpeta, (err, files) => {
         if (err) {
            reject(err)
            return
         }
         resolve(files.map(z => carpeta.concat(z)))
      })
   })
}

let mostrarArchivos = (arrDir) => {
   arrDir.forEach(element => {
      console.log(element)
   });
}

let mostrarError = err => {
   console.log(err)
}

export let solucionEjercicio1 = () => {
   leerDirectorioPromise()
   .then(mostrarArchivos)
   .catch(mostrarError)
}
