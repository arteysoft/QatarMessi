import fs from 'fs'

export let leerArchivo = (pathArchivo:any) => {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(pathArchivo, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

