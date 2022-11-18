import * as dotenv from 'dotenv'
import {initConsumer} from './kafkaconsumer'
import {initColaMemoria} from './colamemoria'
import {initLogicaMultas} from './logicaMultas'

dotenv.config()

initColaMemoria()
initConsumer()
initLogicaMultas()