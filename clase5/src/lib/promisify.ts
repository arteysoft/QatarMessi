export let promisify = (funcionParcialmenteCocinada) => {
    return new Promise((resolve, reject) => {
        funcionParcialmenteCocinada((err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

