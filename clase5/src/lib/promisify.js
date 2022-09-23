"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = void 0;
let promisify = (funcionParcialmenteCocinada) => {
    return new Promise((resolve, reject) => {
        funcionParcialmenteCocinada((err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};
exports.promisify = promisify;
