import express from 'express'
import {query, insert} from '../../lib/mongocli2'
const uuid = require('uuid');

const NOMBRE_COLECCION = 'usuarioslogin'

let usuarioLoginRouter = express.Router()

usuarioLoginRouter.route('/login').post((request, response) => {
    
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

        if (data.password !== request.body.password) {
            response
            .status(401)
            .send()        
            return
        }

        response
            .status(200)
            .send(JSON.stringify({mensaje:'Hay que enviar el token'}))
    })
})

usuarioLoginRouter.route('/usuariologin').post((request, response) => {
    let obj = request.body
    console.log(obj)

    let id = (!obj.id) ? uuid.v4() : obj.id
    let {nombreUsu, password} = obj

    insert(process.env.BASE_MONGO, NOMBRE_COLECCION, {id, nombreUsu, password}, (e) => {
        if (e) {
            response
            .status(500)
            .send()        
            return
        }
        response
        .status(201)
        .send()
    })
})

export default usuarioLoginRouter
