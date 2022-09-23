import {leerDirectorioPromise} from './lib/leerCarpeta'
import { asyncForLoop } from './lib/asyncForLoop'
import {leerArchivo} from './lib/leerArchivo'

export let paso1 = onFinish => {
    leerDirectorioPromise()
    .then((data) => {
        asyncForLoop(data.length, (idx, next, abort) => {
            let archivo = data[idx]
            leerArchivo(archivo)
            .then(z => console.log(z))
            .then(next)
            .catch(err => {
                abort(err)
            })
        }, err => {
            console.log(err)
        })
    })
}