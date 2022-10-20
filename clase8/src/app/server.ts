import express from 'express'
import usuarioRouter from './Routes/usuario';

export let ejemploCompletoExpress = () => {
    let app = express()

    app.use(express.json())

    app.use('/', (_request, response, next) => {
        response.setHeader('Content-Type', 'application/json')
        console.log('estoy en el middleware 1 ... seteo app json')
        next()
    })

    app.use('/', (request, response, next) => {
        console.log('estoy en el middleware 2 ... tema seguridad')
        // voy a chequear si viene un token
        console.log(request.header['x-token'])
        if (request.headers['x-security-token'] !== undefined) {
            next()
            return
        }
        response
            .status(401)
            .send(JSON.stringify({mensaje:'sin credenciales'}))
    })

    app.use(usuarioRouter)

    app.use('/', (err, _request, response, _next) => {
        console.log(err)
        response
            .status(500)
            .send(JSON.stringify({mensaje:'error descontrolado'}))
    })


    app.listen(3000, () => {
        console.log('OK.. listen 3000')
    })
}


