import express from 'express'
import {query, insert, deleteOne, updateOne} from '../../lib/mongocli2'
import {crearObjetoFake} from '../../lib/genusuario'

const NOMBRE_COLECCION = 'usuarios'

let usuarioRouter = express.Router()

usuarioRouter.route('/inventar').get((_request, response) => {
    let resp = crearObjetoFake()

    let txtResp = JSON.stringify(resp)
    response
        .status(200)
        .send(txtResp)
})

usuarioRouter.route('/usuario').get((request, response) => {
    query(process.env.BASE_MONGO, NOMBRE_COLECCION, request.query, (e, data) => {
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

usuarioRouter.route('/usuario/:id').get((request, response) => {
    let id = request.params.id

    query(process.env.BASE_MONGO, NOMBRE_COLECCION, {id}, (e, data) => {
        if (e) {
            response
            .status(500)
            .send()        
            return
        }
        if (data.length === 0) {
            response
            .status(404)
            .send()        
            return
        }
        response
        .status(200)
        .send(data[0])
    })
})

usuarioRouter.route('/usuario').post((request, response) => {
    let obj = request.body
    console.log(obj)

    insert(process.env.BASE_MONGO, NOMBRE_COLECCION, obj, (e) => {
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

usuarioRouter.route('/usuario/:id').put((request, response) => {
    let obj = request.body
    obj.id = request.params.id
    console.log(obj)
    updateOne(process.env.BASE_MONGO, NOMBRE_COLECCION, obj, (e) => {
        if (e) {
            console.log(e)
            response
            .status(500)
            .send()        
            return
        }
        console.log(e)
        response
        .status(200)
        .send()
    })
})

usuarioRouter.route('/usuario/:id').delete((request, response) => {
    let id = request.params.id
    deleteOne(process.env.BASE_MONGO, 'usuarios', id, (e) => {
        if (e) {
            response
            .status(500)
            .send()        
            return
        }
        console.log(e)
        response
        .status(200)
        .send()
    })
})

usuarioRouter.use('/usuario', (_err, _request, _response, next) => {
    console.log('aca entra ?')
    next()
})

export default usuarioRouter
