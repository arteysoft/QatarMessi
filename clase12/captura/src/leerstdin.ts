import log4js from "./lib/log4js";
import {initColaMemoria, registrarCallBack, push} from './colamemoria'
import {producer} from './kafkaproducer'

let logger = log4js.getLogger('sistemamultas')

var readline = require('readline');

const { spawn } = require('child_process');


export let init = () => {
    const child = spawn('java', ['-jar', '/cursos/QatarMessi/clase12/sensortransito/sensor.jar', 2000]);

    child.stdout.on('data', (data) => {
        let objClimaVehiculo = JSON.parse(data)
        push(objClimaVehiculo)
    });

    child.on('exit', function (code, signal) {
        logger.info('child process exited with ' +
                    `code ${code} and signal ${signal}`);
    });

    registrarCallBack((item, onFinish) => {
        logger.debug('esto es lo que saco del array')
        logger.info(item)
        producer(item)
        .then(onFinish)
    })
    
    initColaMemoria()
}

