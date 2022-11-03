import express from 'express'
import {query} from '../../lib/mongocli2'
import {encriptar} from '../../lib/crypto'
import { generarToken } from '../../lib/jwtutil';

const NOMBRE_COLECCION = 'usuarioslogin'

let loginRouter = express.Router()

loginRouter.route('/login').post((request, response) => {
    
    let nombreUsu = request.body.nombreUsu

    query(process.env.BASE_MONGO, NOMBRE_COLECCION, {nombreUsu}, (e, data) => {
        if (e) {
            response
            .status(500)
            .send()        
            return
        }
        if (data.length === 0) {
            response
            .status(401)
            .send()        
            return
        }
        data = data[0]

        let passwordEncriptada = encriptar(data.salt, request.body.password)

        if (data.password != passwordEncriptada) {
            response
            .status(401)
            .send()        
            return
        }

        response
            .status(200)
            .send({token:generarToken(nombreUsu)})
    })
})

export default loginRouter
