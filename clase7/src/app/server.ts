import express from 'express'
import {query, insert, deleteOne, updateOne} from '../lib/mongocli2'
import {crearObjetoFake} from '../lib/genusuario'

export let ejemploCompletoExpress = () => {
    let app = express()

    app.use(express.json());

    app.get('/inventar', (_request, response) => {
        response.setHeader('Content-Type', 'application/json')

        let resp = crearObjetoFake()

        let txtResp = JSON.stringify(resp)
        response
            .status(200)
            .send(txtResp)
    })

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

    app.get('/:id', (request, response) => {
        response.setHeader('Content-Type', 'application/json')

        let id = request.params.id

        query(process.env.BASE_MONGO, 'usuarios', {id}, (e, data) => {
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

    app.post('/', (request, response) => {
        response.setHeader('Content-Type', 'application/json')

        let obj = request.body
        console.log(obj)

        insert(process.env.BASE_MONGO, 'usuarios', obj, (e) => {
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

    app.put('/:id', (request, response) => {
        let obj = request.body
        obj.id = request.params.id
        console.log(obj)
        updateOne(process.env.BASE_MONGO, 'usuarios', obj, (e) => {
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

    app.delete('/:id', (request, response) => {
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

    app.listen(3000, () => {
        console.log('OK.. listen 3000')
    })
}


