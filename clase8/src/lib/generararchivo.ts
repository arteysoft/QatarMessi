import fs from 'fs'
import {crearObjetoFake as crearUsuario} from '../lib/genusuario'

export let generarArchivo = (onFinish:Function) => {
    let carpeta = process.env.PATH_ARCHIVOS_USUARIO
    let objUsuario = crearUsuario()
    let nombreArchivo = objUsuario.id.concat('.json')
    let archivo = [carpeta, '/', nombreArchivo].join('')
    let txtUsuario = JSON.stringify(objUsuario)
 
    fs.writeFile(archivo, txtUsuario, 'utf-8', (err) => {
       if (err) {
          console.log(err)
          return
       }
       console.log('parece que fue ok...')
       onFinish(err)
    })
 }