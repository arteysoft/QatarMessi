import {insert} from '../lib/mongocli2'
import {asyncForLoop} from '../lib/asyncForLoop'
import {crearObjetoFake as crearUsuario} from '../lib/genusuario'

export let insertMongoRandom = () => {
    asyncForLoop(100000, (idx:any, next:Function, abort:Function) => {
        insert(process.env.BASE_MONGO, 'usuarios', crearUsuario(), (e:any) => {
            if (e) {
                abort(e)
                return
            }
            console.log(idx)
            next()
        })
    }, (e:any) => {
        console.log(e)
    })
}


