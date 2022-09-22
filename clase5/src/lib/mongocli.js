"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = void 0;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
let objDeprecateCfg = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};
let insert = (base, coleccion, documento, callBackFn) => {
    MongoClient.connect(url, objDeprecateCfg, function (err, client) {
        if (err) {
            console.log(`se produjo un error ${err}`);
            callBackFn(err);
            return;
        }
        console.log("conectado");
        const db = client.db(base);
        const collection = db.collection(coleccion);
        collection.insertOne(documento, (err2, resultado) => {
            if (err2) {
                console.log(`se produjo un error ${err2}`);
                callBackFn(err2);
                return;
            }
            client.close();
            callBackFn(null, resultado);
        });
    });
};
exports.insert = insert;
