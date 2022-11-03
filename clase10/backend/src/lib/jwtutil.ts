import jwtlib from 'jsonwebtoken'
import {hora} from '../lib/utils'

const PK = 'AzksyqlaiekspwkjscTF2233kalzaskeft'

export let generarToken = (suscriber) => {
    let payload = {
        sub : suscriber,
        nombre : suscriber,
        iat : hora(),
        exp : hora()+30,
        roles: ['ADMIN', 'USER']
    }
    
    let token = jwtlib.sign(payload, PK)
    return token
}

export let verificarToken = (token:string):jwtlib.JwtPayload|string => {
    return jwtlib.verify(token, PK)
}