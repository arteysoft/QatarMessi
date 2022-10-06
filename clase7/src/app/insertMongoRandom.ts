import {insert} from '../lib/mongocli2'
import {asyncForLoop} from '../lib/asyncForLoop'
import {crearObjetoFake as crearUsuario} from '../lib/genusuario'

export let insertMongoRandom = () => {
    asyncForLoop(100000, (idx, next, abort) => {
        insert(process.env.BASE_MONGO, 'usuarios', crearUsuario(), e => {
            if (e) {
                abort(e)
                return
            }
            console.log(idx)
            next()
        })
    }, e => {
        console.log(e)
    })
}


