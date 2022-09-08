"use strict";
/** Cant Iteraciones
* Callback nroIteracion:Integer, next:Function, abort: Function(Err)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncForLoop = void 0;
function asyncForLoop(cantIteraciones, callBack, onFinish) {
    if (onFinish === undefined) {
        onFinish = z => { };
    }
    (function innerFunction(iteracionActual) {
        if (cantIteraciones === iteracionActual) {
            onFinish(null);
            return;
        }
        callBack(iteracionActual, () => {
            // next
            setTimeout(() => {
                innerFunction(iteracionActual + 1);
            }, 0);
        }, (err) => {
            // abort
            onFinish(err);
        });
    })(0);
}
exports.asyncForLoop = asyncForLoop;
