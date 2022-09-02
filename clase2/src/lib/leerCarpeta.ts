import fs from 'fs'
import path from 'path'

export let leerDirectorio = (onFinish) =>{
   console.log('carpeta actual: ' + __dirname)
   let carpeta = '/var/QatarMessi/'

   const archivos = fs.readdir(carpeta, (err, files) => {
      if (err) {
         console.log(err)
         return
      }

      /*
      files.forEach(file => {
         console.log(file);
      })
      */
     onFinish(files)
   })
}
