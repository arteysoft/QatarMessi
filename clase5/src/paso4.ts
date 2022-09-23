import {leerDirectorioPromise} from './lib/leerCarpeta'
import { asyncForLoop } from './lib/asyncForLoop'
import {leerArchivo} from './lib/leerArchivo'
import {insertPromise} from './lib/mongocli'
import {borrarArchivoPromise} from './lib/borrarArchivo'

let imprimirRetornar = x => {
    console.log(x)
    return x
}

export let paso4 = onFinish => {
    leerDirectorioPromise()
    .then((data) => {
        console.log(data)
        return
        asyncForLoop(data.length, (idx, next, abort) => {
            let archivo = data[idx]
            leerArchivo(archivo)
            .then(z => JSON.parse(z))
            .then(z => imprimirRetornar(z))
            .then(z => insertPromise('QatarMessi', 'usuarios', z))
            .then(na => borrarArchivoPromise(archivo))
            .then(next)
            .catch(err => {
                abort(err)
            })
        }, err => {
            console.log(err)
        })
    })
}