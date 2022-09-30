import * as dotEnv from 'dotenv'
import {insertarArchivosEnMongo} from './ejemplos/insertarArchivosEnMongo'

dotEnv.config()

insertarArchivosEnMongo()
