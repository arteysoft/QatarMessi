import {leerDirectorioPromise} from '../lib/leerCarpeta'
import {leerArchivo} from '../lib/leerArchivo'
import {insertPromise} from '../lib/mongocli'

export async function insertarArchivosEnMongo() {
    let arrArchivos:any = await leerDirectorioPromise()
    for (let arch of arrArchivos) {
        let contenido:string = await leerArchivo(arch)
        let formatoJson:any = JSON.parse(contenido)
        await insertPromise('prueba1', formatoJson)

        console.log(arch)
        console.log(contenido)
        console.log(formatoJson)
    }    
}
