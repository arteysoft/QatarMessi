import express from 'express'

export let ejemploCompletoExpress = () => {
    let app = express()

    // app.use(express.json());

    app.get('/', (request, response) => {
        console.log(request.query)

        let txtResp = JSON.stringify(request.query)

        response.setHeader('Content-Type', 'application/json')
        response
            .status(200)
            .send(txtResp)
    })

    app.listen(3000, () => {
        console.log('OK.. listen 3000')
    })
}


