import express from 'express'

export let ejemploCompletoExpress = () => {
    let app = express()

    // app.use(express.json());

    app.get('/', (request, response) => {
        let resp = {
            nombre: 'hola',
            apellido: 'mundo',
            apodo:'hello world'
        }
        let txtResp = JSON.stringify(resp)

        response.setHeader('Content-Type', 'application/json')
        response
            .status(200)
            .send(txtResp)
    })

    app.listen(3000, () => {
        console.log('OK.. listen 3000')
    })
}


