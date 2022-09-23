import fs from 'fs'
import {promisify} from './promisify'

export let leerDirectorio = (onFinish) =>{
   console.log('carpeta actual: ' + __dirname)
   let carpeta = process.env.PATH_ARCHIVOS_USUARIO

   const archivos = fs.readdir(carpeta, (err, files) => {
      if (err) {
         onFinish(err)
         return
      }
      onFinish(null, files.map(z => carpeta.concat("/").concat(z)))
   })
}

export let leerDirectorioPromise = () => {
   return promisify(leerDirectorio.bind(null))
}
