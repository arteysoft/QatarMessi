
import fs from 'fs'
import path from 'path'

let leerDirectorio = () => {
  return new Promise((resolve, reject) => {
    let carpeta = '../output/'
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
    arrDir.forEach(element => {
      let jsonData = require(element);
      //console.log(jsonData)
      if (jsonData === undefined) {
        reject('Archivo Vacio')
        return
      }
      allJsonData.push(jsonData)
    })
    resolve(allJsonData.map(z => z))
    //console.log(allJsonData)
  })
}

let mostrarError = err => {
  console.log(err)
}

let mostrarArchivos = (arrArch) => {
  arrArch.forEach(element => {
    console.log(element)
  });
  return arrArch;
}
let solucionEjercicio2 = () => {
  leerDirectorio()
    .then(leerArchivos)
    .then(mostrarArchivos)
    .catch(mostrarError)
}
console.log(solucionEjercicio2())
