import jwtlib from 'jsonwebtoken'
import {hora} from '../lib/utils'

const PK = 'AzksyqlaiekspwkjscTF2233kalzaskeft'

export let generarToken = (suscriber) => {
    let payload = {
        sub : suscriber,
        nombre : suscriber,
        iat : hora(),
        exp : hora()+600,
        roles: ['ADMIN', 'USER']
    }
    
    let token = jwtlib.sign(payload, PK)
    return token
}
