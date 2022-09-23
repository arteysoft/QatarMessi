import fs from 'fs'

export let borrarArchivoPromise = pathArchivo => {
    return new Promise((resolve, reject) => {
        fs.unlink(pathArchivo, (err => {
            if (err) {
                reject(err)
                return
            }
            resolve(null)
        })
    })
}