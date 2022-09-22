"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inserta2K = void 0;
const mongocli_1 = require("./lib/mongocli");
const asyncForLoop_1 = require("./lib/asyncForLoop");
const genusuario_1 = require("./lib/genusuario");
let inserta2K = () => {
    (0, asyncForLoop_1.asyncForLoop)(2000, (idx, next, abort) => {
        let usu = (0, genusuario_1.crearObjetoFake)();
        (0, mongocli_1.insert)('QatarMessi', 'usuarios', usu, (err, res) => {
            if (err) {
                abort(err);
                return;
            }
            console.log(idx, res);
            next();
        });
    }, e => {
        console.log(e);
    });
};
exports.inserta2K = inserta2K;
exports.default = () => { console.log('sarasa'); };
