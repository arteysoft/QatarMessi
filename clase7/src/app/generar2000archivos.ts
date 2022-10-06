import {asyncForLoop} from '../lib/asyncForLoop'
import {generarArchivo} from '../lib/generararchivo'

export let generar2KArchivos = (onFinish:Function) => {
    asyncForLoop(2000, (nroCiclo:number, next:Function, abort:Function) => {
       console.log(nroCiclo)
       generarArchivo((err:any) => {
          if (err) {
             console.log(err)
             return
          }
          next()
       })
    }, (err:any) => {
       console.log(err)
       console.log('Termino todo el loop...')
    })
 }