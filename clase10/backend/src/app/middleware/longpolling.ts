import {hora} from '../../lib/utils'
import express from 'express'
import {participantes, ParticipantImpl, borrarParticipante} from './manejoparticipantes'
import {v4 as uuid} from 'uuid'
import { messagemap, Mensaje } from './messagemap'
import { EventEmitter } from 'node:events'


export let longPolling = express.Router()

let emitter = new EventEmitter()

longPolling.route('/api/notify/:id').post((request, response) => {
    let idMensaje = uuid()
    let idDestino = request.params.id
    let newObj:Mensaje = {
        origen: 'AUN NO VIENE',
        destino: idDestino,
        mensaje: request.body,
        ts: hora()
    }
    messagemap[idMensaje] = newObj
    response.status(201).send({message:'notificacion creada'})
    emitter.emit('EVT_NOTIFY', { idDestino, idMensaje})
})

longPolling.route('/api/retirar/:id').get((request, response) => {
    let idMensaje = request.params.id
    let {mensaje} = messagemap[idMensaje]
    response.status(200).send(mensaje)
})

longPolling.route('/api/listen/:id').get((request, response) => {
    let idParticipante = request.params.id
    let nuevoPart = new ParticipantImpl(idParticipante, hora() + 10, response, () => {
        response.status(200).send({status:'TIMEOUT'})
    }) 
    participantes.push(nuevoPart)
})

emitter.addListener('EVT_NOTIFY', ({ idDestino, idMensaje}) => {
    console.log('Vino un mensaje para : ', idDestino)
    participantes.forEach(p => {
        if (p.id === idDestino) {
            p.res.status(200).send({status: 'NEW_MESSAGE', idMensaje})
            borrarParticipante(p.id)
        }
    })
})