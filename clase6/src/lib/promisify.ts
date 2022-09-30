export let promisify = (funcionParcialmenteCocinada:Function) => {
    return new Promise((resolve, reject) => {
        funcionParcialmenteCocinada((err:any, data:any) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

