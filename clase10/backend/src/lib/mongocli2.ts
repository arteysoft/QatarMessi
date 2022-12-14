import {MongoClient} from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'

export let insert = (base, coleccion, documento, callBackFn) => {
    let cliente:MongoClient
    
    MongoClient.connect(url)
    .then(client => {
        cliente = client
        let db = client.db(base)
        let collection = db.collection(coleccion)
        return collection
    })    
    .then(coleccion => {
        return coleccion.insertOne(documento)
    })
    .then(metadata => {
        return new Promise((r) => {
            setTimeout(() => {
                console.log('insertando metada... en mysql')
                r(metadata)
            }, 1)
        })
    })
    .then(metadata => {
        console.log(metadata)
        return metadata
    })    
    .then(result => {
        setTimeout(callBackFn.bind(null, null, result), 0)
        cliente.close()
    })
    .catch(e => {
        callBackFn(e)
        cliente.close()
    })
}

export let query = (base, coleccion, query, callBackFn) => {
    let cliente:MongoClient

    MongoClient.connect(url)
    .then(client => {
        cliente = client
        let db = client.db(base)
        let collection = db.collection(coleccion)
        return collection
    })
    .then(coleccion => {
        return coleccion.find(query, {projection: {_id:0}}).toArray()
    })
    .then(findResult => {
        cliente.close()
        callBackFn(null, findResult)
    })
    .catch(_ => {
        cliente.close()
        callBackFn(null)
    })
}

export let updateOne = (base, coleccion, documento, callBackFn) => {
    let cliente:MongoClient

    MongoClient.connect(url)
    .then(client => {
        cliente = client
        let db = client.db(base)
        let collection = db.collection(coleccion)
        return collection
    })
    .then(collection => {
        return collection.updateOne({id: documento.id}, { $set: documento })
    })
    .then(() => {
        cliente.close()
        callBackFn(null)
    })
    .catch((e) => {
        cliente.close()
        callBackFn(e)
    })
}

export let deleteOne = (base, coleccion, id, callBackFn) => {
    let cliente:MongoClient

    MongoClient.connect(url)
    .then(client => {
        cliente = client
        let db = client.db(base)
        let collection = db.collection(coleccion)
        return collection
    })
    .then(collection => {
        return collection.deleteOne({id})
    })
    .then(() => {
        cliente.close()
        callBackFn(null)
    })
    .catch((e) => {
        cliente.close()
        callBackFn(e)
    })
}

/*
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

        collection.deleteOne({id}, (err2, data) => {
            if (err2) {
                //Meter error generado aqui.
                //Sacarlo en la callback function
                console.log(`se produjo un error ${err2}`)
                callBackFn(err2)
                
                return;
            }
            client.close()
            callBackFn(undefined, data)
        });
    });
}
*/