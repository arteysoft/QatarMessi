import fs from 'fs'

export let borrarArchivoPromise = (pathArchivo:any) => {
    return new Promise((resolve, reject) => {
        fs.unlink(pathArchivo, (err:any) => {
            if (err) {
                reject(err)
                return
            }
            resolve(null)
        })
    })
}