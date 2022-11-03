import { verificarToken } from '../../lib/jwtutil'
import jwtlib from 'jsonwebtoken'

export let jwtMiddleware = () => (request, response, next) => {
    let token = request.headers['x-security-token']
    if (token === undefined) {
        response.status(401).send({mensaje:'NO AUTORIZADO'})
        return
    }
    try {
        verificarToken(token)
        next()
    }
    catch (err) {
        if (err instanceof jwtlib.TokenExpiredError) {
            response
                .status(401)
                .send({mensaje:'TOKEN EXPIRADO'})
            return
        }
        if (err instanceof jwtlib.JsonWebTokenError) {
            response
                .status(401)
                .send({mensaje:'TOKEN INVALIDO'})
            return
        }        
    }

    
}

