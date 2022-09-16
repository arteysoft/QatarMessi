
import fs from 'fs'
import path from 'path'
import { asyncForLoop } from './lib/asyncForLoop'

let leerDirectorio = () => {
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

let leerArchivos = (arrDir) => {
  return new Promise((resolve, reject) => {
    let allJsonData: any[] = []
    asyncForLoop(arrDir.length, (idx, next, abort) => {
      let pathArch = arrDir[idx]
      fs.readFile(pathArch, 'utf-8', (err, data) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(idx)
        allJsonData.push(data)
        next()
      })
    }, (err) => {
      if (err) {
        console.log(err)
        return
      }
      resolve(allJsonData)
    })
  })
}

let mostrarError = err => {
  console.log(err)
}

let mostrarArchivos = (arrArch) => {
   console.log('ANTES')
  arrArch.forEach(element => {
    console.log(element)
  });
  console.log('DESPUES')
}
let solucionEjercicio2 = () => {
  leerDirectorio()
    .then(leerArchivos)
    .then(mostrarArchivos)
    .catch(mostrarError)
}
solucionEjercicio2()
