import * as dotenv from 'dotenv'
import {initConsumer} from './kafkaconsumer'
import {initColaMemoria} from './colamemoria'
import {initGeneradorActas} from './generadoractas'

dotenv.config()

initColaMemoria()
initConsumer()
initGeneradorActas()