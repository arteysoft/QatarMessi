import log4js from "./lib/log4js";
import {Kafka, Partitioners} from 'kafkajs'
import {push} from './colamemoria'

let logger = log4js.getLogger('kafkaconsumer')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['127.0.0.1:9092'],
    connectionTimeout: 5000
})
  
async function consumer() {
    const consumer = kafka.consumer({ groupId: 'grupo-gen-multas-1' })
    await consumer.connect()
    console.log(1)
    await consumer.subscribe({ topic: 'datos-multas-qatar', fromBeginning: true })
    console.log(2)
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            try {
                let objRecieved = JSON.parse(<string>message?.value?.toString())
                console.log({
                    value: message?.value?.toString(),
                    topic, 
                    partition                    
                })
                push(objRecieved)
            }
            catch (err) {

            }
        }
    })
    console.log(3)
}

export let initConsumer = () => {
    try {
        consumer()
    }
    catch (err) {
        logger.error(err)
    }
}

