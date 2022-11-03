import express from 'express'
import {insert} from '../../lib/mongocli2'
import {crearRandomSalt, encriptar} from '../../lib/crypto'

const uuid = require('uuid');

const NOMBRE_COLECCION = 'usuarioslogin'

let usuarioLoginRouter = express.Router()

usuarioLoginRouter.route('/usuariologin').post((request, response) => {
    let obj = request.body
    console.log(obj)

    let id = (!obj.id) ? uuid.v4() : obj.id
    let {nombreUsu, password} = obj
    let salt = crearRandomSalt()

    let passwordEncriptada = encriptar(salt, password)

    insert(process.env.BASE_MONGO, NOMBRE_COLECCION, {id, nombreUsu, salt, password: passwordEncriptada}, (e) => {
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
