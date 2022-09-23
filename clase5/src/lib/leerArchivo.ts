import fs from 'fs'
import path from 'path'

export let leerArchivo = (pathArchivo) => {
    return new Promise<String>((resolve, reject) => {
        fs.readFile(pathArchivo, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

