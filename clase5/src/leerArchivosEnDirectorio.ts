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

let leerFilePromise = (pathArch) => {
   return new Promise((resolve, reject) => {
      fs.readFile(pathArch, 'utf-8', (err, data) => {
         if (err) {
            reject(err)
            return
         }
         resolve(data)
      })
   })
}

let mostrarArchivos = (arrDir) => {
   arrDir.forEach(element => {
      console.log(element)
   });
   return arrDir
}

let mostrarError = err => {
   console.log('------------------------')
   console.log(err)
   console.log('------------------------')
   return err
}
let intercalarLinea = z => {
   console.log('*************************')
   console.log(z)
   return z
}

let iterarSobreLosArchivos = (arr) => {
   return new Promise((resolve, reject) => {
      asyncForLoop(arr.length, (idx, next) => {
         leerFilePromise(arr[idx])
         .then(intercalarLinea)
         .then(intercalarLinea)
         .then(next)
         .catch(reject)
      }, () => {})
   })
}


export let solucionEjercicio1 = () => {
   leerDirectorioPromise()
   .then(mostrarArchivos)
   .then(iterarSobreLosArchivos)
   .catch(mostrarError)
}
