/** Cant Iteraciones
* Callback nroIteracion:Integer, next:Function, abort: Function(Err)
*/

export function asyncForLoop(cantIteraciones:number, callBack:Function, onFinish:Function) {
   if (onFinish === undefined) {
       onFinish = () => {}
   }
   (function innerFunction(iteracionActual:number) {
       if (cantIteraciones === iteracionActual) {
           onFinish(null)
           return;
       }
       callBack(iteracionActual, () => {
           // next
           setTimeout(()=>{
               innerFunction(iteracionActual+1)
           },0)
       }, (err:any) => {
           // abort
           onFinish(err)
       })
   })(0)
}
