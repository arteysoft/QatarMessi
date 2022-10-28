import express from 'express'
import usuarioRouter from './Routes/usuario';
import usuarioLoginRouter from './Routes/usuariologin';
import loginRouter from './Routes/login';
import {jwtMiddleware} from './middleware/jwtmiddleware'

export let ejemploCompletoExpress = () => {
    let app = express()

    app.use(express.json())

    app.use('/', (_request, response, next) => {
        response.setHeader('Content-Type', 'application/json')
        next()
    })

    app.use(loginRouter)
    app.use(jwtMiddleware())

    app.use(usuarioLoginRouter)
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


