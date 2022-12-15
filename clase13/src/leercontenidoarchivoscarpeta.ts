import fs from 'fs'
import {EOL} from 'os'
import * as util from 'node:util'
import { exec } from 'child_process'

let readdirPromise = util.promisify(fs.readdir)
let readFilePromise = util.promisify(fs.readFile)
let pausa = () => {
    return new Promise((fin) => {
        setTimeout(fin, 0);
    })
}
let execPromise = util.promisify(exec)
let deletePromse = util.promisify(fs.unlink)

export let leerContenidoArchivosCarpeta = async () => {
    let carpeta = '/var/QatarMessi/'
    
    try {
        let arrArchivos = await readdirPromise(carpeta, 'utf8')
        for (let archivo of arrArchivos) {
            let pathCompleto = [carpeta, archivo].join('')
            console.log(pathCompleto)
            let contenido = await readFilePromise(pathCompleto, 'utf-8')
            console.log(contenido)            
            let comandoscp = ['scp', ' -i ', process.env.PATH_CLAVE_PRIVADA, ' ', 
                                pathCompleto, ' ', 'root@', process.env.IP_TICKETS_DEST, ':',
                                '/root/tickets' ].join('')
            console.log(comandoscp)            
            await execPromise(comandoscp)
            await deletePromse(pathCompleto)
            await pausa()
        }
    }
    catch (err) {
        console.log(err)
    }
}