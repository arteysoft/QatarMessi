import express from 'express'
import {query} from '../lib/mongocli2'

export let ejemploCompletoExpress = () => {
    let app = express()

    // app.use(express.json());

    app.get('/', (request, response) => {
        response.setHeader('Content-Type', 'application/json')
        query(process.env.BASE_MONGO, 'usuarios', request.query, (e, data) => {
            if (e) {
                response
                .status(500)
                .send()        
                return
            }
            response
            .status(200)
            .send(data)
        })
    })

    app.listen(3000, () => {
        console.log('OK.. listen 3000')
    })
}


