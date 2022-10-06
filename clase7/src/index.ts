import * as dotEnv from 'dotenv'
import {insertMongoRandom} from './app/insertMongoRandom'
import {ejemploCompletoExpress} from './app/server'

dotEnv.config()

switch (process.argv[2]) {
    case 'insertmongo': 
        insertMongoRandom()
        break
    case 'httpserver':
        ejemploCompletoExpress()
        break
    default:
        console.log('debe enviar: [httpserver insertMongo]')
        break;
}