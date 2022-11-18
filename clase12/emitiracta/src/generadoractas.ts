import log4js from "./lib/log4js";
import {registrarCallBack} from './colamemoria'
import fs from 'fs'

let logger = log4js.getLogger('generadoractas')

const LIMITES = {}

export let initGeneradorActas = () => {
    registrarCallBack((item, onFinish) => {
        console.log('**************************')
        console.log('GENERANDO ACTA DE TRANSITO')
        console.log('**************************')

        console.log(item.clima)
        console.log(item.datosVehiculo.tipoVehiculo)
        console.log(item.datosVehiculo.velocidadMedida)
        
        let path = ['/var/qatarmessi/multas/', item.instancia, '.json'].join('')
        console.log(path)

        fs.writeFile(path, JSON.stringify(item), 'utf-8', err => {
            if (err) {
                console.log(err)
            }
            setTimeout(() => {
                onFinish()
            }, 5000)
        })

        let pathhtml = ['/var/qatarmessi/multas/', item.instancia, '.html'].join('')
        let contenido =  [
            '<h1>', item.instancia, '</h1>',
            '<h1>', item.datosVehiculo.patente, '</h1>',
            '<h1>', item.datosVehiculo.tipoVehiculo, '</h1>',
            '<h1>', item.datosVehiculo.velocidadMedida, '</h1>'
        ].join('')

        fs.writeFile(pathhtml, contenido, 'utf-8', err => {
            if (err) {
                console.log(err)
            }
        })

    })
}