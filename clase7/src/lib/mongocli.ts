const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'

let objDeprecateCfg = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

export let insert = (coleccion:String, documento:String, callBackFn:Function) => {
    let base:String|undefined = process.env.BASE_MONGO
    MongoClient.connect(url, objDeprecateCfg, function(err:any, client:any) {
        if (err) {
            console.log(`se produjo un error ${err}`)
            callBackFn(err)
            return;
        }
        console.log("conectado")

        const db = client.db(base)
        const collection = db.collection(coleccion)

        collection.insertOne(documento, (err2:any, resultado:any) => {
            if (err2) {
                console.log(`se produjo un error ${err2}`);
                callBackFn(err2);
                return;
            }
            client.close();
            callBackFn(null, resultado);
        });
      });
}

export let insertPromise = (coleccion:String, documento:String) => {
    return new Promise((resolve, reject) => {
        insert(coleccion, documento, (err:any, data:any|null) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}