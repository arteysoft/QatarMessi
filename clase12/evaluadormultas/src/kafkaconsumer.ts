import log4js from "./lib/log4js";
import {Kafka, Partitioners, TopicPartition} from 'kafkajs'
import {push} from './colamemoria'

let logger = log4js.getLogger('kafkaconsumer')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['127.0.0.1:9092'],
    connectionTimeout: 5000
})
  
let doTime = t => new Promise((r) => { setTimeout(r, t); })

async function consumer() {
    const consumer = kafka.consumer({ groupId: 'grupo-evaluador-1' })
    await consumer.connect()
    console.log(1)
    await consumer.subscribe({ topic: 'datos-transito-qatar', fromBeginning: true })
    console.log(2)
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            try {
                let objRecieved = JSON.parse(<string>message?.value?.toString())
                console.log({
                    value: message?.value?.toString(),
                    topic,
                    partition
                })
                push(objRecieved)
                let hb = heartbeat
                let resume = pause()
                console.log('>>>>')
                await doTime(10000)
                console.log('<<<<<')
                resume()
            }
            catch (err) {
                console.log(err)
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

