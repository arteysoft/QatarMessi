import fs from 'fs'
import {promisify} from './promisify'

export let leerDirectorio = (onFinish:Function) =>{
   let carpeta:String = '/var/qatarmessi' // process.env.PATH_ARCHIVOS_USUARIO
   let fld:fs.PathLike = '/var/qatarmessi'

   fs.readdir(fld, (err, files:any) => {
      if (err) {
         onFinish(err)
         return
      }
      let resultado = files.map((z:any) => [carpeta, z].join('/'))
      onFinish(null, resultado)
   })
}

export let leerDirectorioPromise = () => {
   /*
   return new Promise((resolve, reject) => {
      leerDirectorio((e:any, arrRes:any) => {
         if (e) {
            reject(e)
            return
         }
         resolve(arrRes)
      })
   })
   */
   return promisify(leerDirectorio.bind(null))
}
