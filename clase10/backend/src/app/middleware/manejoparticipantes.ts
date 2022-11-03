import {hora} from '../../lib/utils'
import express from 'express'


export interface Participant {
    id: string,
    exp: Number,
    fnc: Function,
    res: express.Response
}

export class ParticipantImpl implements Participant {
    constructor(public readonly id, 
                public readonly exp,
                public readonly res,
                public readonly fnc) {
    }
}

export let borrarParticipante = id => {
    participantes = participantes.filter(p => p.id != id)
}

export let participantes:Array<Participant> = []

;(function loopForEver() {
    console.log('.')
    console.log('conectados: ', participantes.map(p => p.id))
    participantes.forEach((p, idx, wholeArr) => {
        if (hora() > p.exp) {
            p.fnc()
            wholeArr.splice(idx, 1)
        }
    })
    setTimeout(loopForEver, 1000)
})()