import {insert} from './lib/mongocli'
import {asyncForLoop} from './lib/asyncForLoop'
import {crearObjetoFake as crearUsuario} from './lib/genusuario'

export let inserta2K = () => {
    asyncForLoop(2000, (idx, next, abort) => {
        let usu = crearUsuario()
        insert('QatarMessi', 'usuarios', usu, (err, res) => {
            if (err) {
                abort(err)
                return
            }
            console.log(idx, res)
            next()
        })
    }, e => {
        console.log(e)
    })
}

export default () => { console.log('sarasa') }