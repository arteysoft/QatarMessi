const {v4:uuid} = require('uuid');
let sha256 = require('sha256')

export let encriptar = (salt:string, password:string):string => {
    return sha256([salt,password].join('__'))
}

export let crearRandomSalt = ():string => {
    return [uuid(), uuid()].join('__')
}

