const MongoClient = require('mongodb').MongoClient
// import * as MongoClient from 'mongodb'
const url = 'mongodb://127.0.0.1:27017'

let objDeprecateCfg = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

export let insert = (base, coleccion, documento, callBackFn) => {
    MongoClient.connect(url, objDeprecateCfg, function(err, client) {
        if (err) {
            console.log(`se produjo un error ${err}`)
            callBackFn(err)
            return;
        }

        const db = client.db(base)
        const collection = db.collection(coleccion)

        collection.insertOne(documento, (err2, resultado) => {
            if (err2) {
                console.log(`se produjo un error ${err2}`);
                callBackFn(err2);
                return;
            }
            client.close({}, () => {
                callBackFn(undefined, resultado);
            });
        });
      });
}

export let query = (base, coleccion, query, callBackFn) => {
    MongoClient.connect(url, objDeprecateCfg, function(err, client) {
        if (err) {
            console.log(`se produjo un error ${err}`);
            callBackFn(err);
            return;
        }
        const db = client.db(base);
        const collection = db.collection(coleccion);
        collection.find(query, {projection: {_id:0}}).toArray(function(err2, resultado:Array<any>) {
            if (err2) {
                console.log(`se produjo un error ${err2}`);
                callBackFn(err2)
                return;
            }
            client.close();
            callBackFn(undefined, resultado);
        });
      });
}

export let update = (base, coleccion, publicId, documento, callBackFn) => {
    MongoClient.connect(url, objDeprecateCfg, function(err, client) {
        if (err) {
            console.log(`se produjo un error ${err}`);
            callBackFn(err);
            return;
        }
        console.log("conectado");

        const db = client.db(base);
        const collection = db.collection(coleccion);

        collection.updateOne({id: publicId}, {$set: documento}, (err2, resultado) => {
            if (err2) {
                console.log(`se produjo un error ${err2}`);
                callBackFn(err2);
                return;
            }
            client.close();
            callBackFn(undefined, resultado);
            return;
        });
      });
}

export let deleteOne = (base, coleccion, id, callBackFn) => {
    MongoClient.connect(url, objDeprecateCfg, function(err, client) {
        if (err) {
            console.log(`se produjo un error ${err}`);
            callBackFn(err)
            return;
        }
        console.log("conectado")

        const db = client.db(base)
        const collection = db.collection(coleccion)
        const query = {id}

        collection.deleteOne(query, (err2, data) => {
            if (err2) {
                //Meter error generado aqui.
                //Sacarlo en la callback function
                console.log(`se produjo un error ${err2}`)
                callBackFn(err2)                
                return;
            }
            client.close()
            callBackFn(undefined, data)
        })
    })
}
